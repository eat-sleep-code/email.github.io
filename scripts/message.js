/* Assign an OnClick function to items in the "Send" button */
$('#MessageSendButton').click(function(e) {
	$(document).ready(function () {
		var form = $('#MessageForm');
		form.validate();
		if (form.valid() === true) {
			if ($.trim($('#Message').val()).length >= 1) {
			/* Send mail only if there is a message (basically prevent empty submissions if validation goes haywire)... */
				var messageID = $.trim($('#MessageIDHidden').val());
				var threadID = $.trim($('#ThreadIDHidden').val());
				var sender = $.trim($('#FromEmailAddress').val());;
				var recipient = $.trim($('#ToEmailAddress').val());
				var subject = $.trim($('#Subject').val());
				var message = $.trim($('#Message').val()).replace(/\n/g, '<br />') + '<br />';
				var messageHeader = 'This message was sent to you anonymously.   If you would like to send a reply, <a href="'+serviceRootUrl+'/reply/'+threadID+'" target="_blank" title="Click here to reply to this message">click here</a>.';
				var messageFooter = 'If you would like to block all ' + serviceName + ' users from sending you a message, <a href="'+serviceRootUrl+'/unsubscribe/'+recipient+'" target="_blank" title="Click here to block users from sending you future messages.">click here</a>.';
			
				// Check To Make Sure Recipient Hasn't Blocked Service
				var recipientCleared = true;
				
				if (recipientCleared == true) {
					// Save To Database
					$.ajax({
						url: messageDatasourceWrite,
						data: { 
							"entry_184866599": messageID,
							"entry_1063432399": threadID, 
							"entry_274482486": sender, 
							"entry_692194785": recipient, 
							"entry_848437565": subject, 
							"entry_1901043579": message
						},
						type: "POST",
						dataType: "xml",
						statusCode: {
							0: function () {
								// Send Mail 
						    		sendMail(serviceEmail, serviceName, recipient, subject, messageHeader + '<hr />' + message + '<hr />' + messageFooter);
							},
							200: function () {
								// Send Mail 
						    		sendMail(serviceEmail, serviceName, recipient, subject, messageHeader + '<hr />' + message + '<hr />' + messageFooter);
							}
						}
					});
	
					$('#MessageSentAlert').show();
					$('#MessageForm').hide();
					$.cookie('ClearedCaptcha', 'true', { expires: 7, path: '/' });
				}
			}	
			$(window).scrollTop(0);
		}
	});
});  


$(document).ready(function () { 
	// Set initial state of form...
	$('#MessageSentAlert').hide();
	$('#UnsubscribedAlert').hide();
	$('#MessageForm').show();
	$('#FromEmailAddressRow').hide();
	
	// Create this message's GUID...
	var messageID = generateUUID();
	$('#MessageIDHidden').val(messageID);
	
	// Create this thread's GUID...
	setTimeout(function(){
		if ($('#ThreadIDHidden').val() === '{{threadID}}') {
			var threadID = generateUUID();
			$('#ThreadIDHidden').val(threadID);
			$('#ThreadID').html(threadID);
		}
		else {
			console.log("SQL: select A,B,C,D,E where B = '" + $("#ThreadIDHidden").val() + "'");
			$('#ToEmailAddressRow').hide();
			$('#dataPlaceholder').sheetrock({
	  			url: messageDatasourceRead,
	  			sql: "select A,B,C,D,E where B = '" + $("#ThreadIDHidden").val() + "'",
				formatting: false,
	  			dataHandler: getMessageData
			});
		
			function getMessageData(data)
			{
				$('#dataPlaceholder').html('<pre>' + JSON.stringify(data) + '</pre>');
				
				if (data.table.rows[0] !== undefined) {
					console.log('Re: ' + data.table.rows[0].c[3])
					$('#Subject').val('Re: ' + data.table.rows[0].c[3]);
					//console.log('Email Address Already Unsubscribed');
				}
			}
		}
	}, 100);

	// Toggle visibility of "From" email address row...
	$('#ReceiveEmailNotification').click(function(){
		var isEmailNotificationChecked = this.checked;
		if(isEmailNotificationChecked == true) {
			$('#FromEmailAddressRow').show();
		}
		else {
			$('#FromEmailAddressRow').hide();	
		}
	});
	
	// Toggle unsubscribed message based on recipient's email address...
	$('#ToEmailAddress').blur(function() {
		//console.log('Datasource: ' + unsubscribeDatasourceRead);
		$('#dataPlaceholder').sheetrock({
  			url: unsubscribeDatasourceRead,
  			sql: "select B where B = '" + $("#ToEmailAddress").val() + "'",
			formatting: false,
  			dataHandler: isEmailUnsubscribed
		});
	
		function isEmailUnsubscribed(data)
		{
			//$('#dataPlaceholder').html('<pre>' + JSON.stringify(data) + '</pre>');
			if (data.table.rows[0] !== undefined) {
				$('#UnsubscribedAlert').show();
				$('#MessageSendButton').attr("disabled", "disabled");
				//console.log('Email Address Already Unsubscribed');
			}
			else {
				$('#UnsubscribedAlert').hide();
				$('#MessageSendButton').removeAttr("disabled");
				//console.log('Email Address NOT Yet Unsubscribed');
			}
		}
	});
	
	// Toggle visibility of "CAPTCHA" row...
	if ($.cookie('ClearedCaptcha') !== undefined)
	{
		$('#CaptchaRow').hide();	
	}
	var securityCode = GenerateCaptcha('CaptchaCanvas');
	
	// Setup form field validation...
	var validator = $('#MessageForm').validate({
		errorElement: 'div',
		rules: {
			ToEmailAddress: {required: true, email: true},
			Subject: {required: true},
			Message: {required: true},
			Captcha: {required: true, captcha: securityCode},
			FromEmailAddress: {required: true, email: true}
		},
		messages: {
			ToEmailAddress: {required: 'Please enter the recipient\'s email address.', email: 'Please enter a valid email address.'},
			Subject: {required: 'Please enter a subject.'},
			Message: {required: 'Please enter a message.'},
			Captcha: {required: 'Please type the code displayed in the image.', captcha: 'The code you typed did not match the image displayed.'},
			FromEmailAddress: {required: 'You have indicated that you would like to receive an email notification if the recipient responds to your message.   Please enter your email address.', email: 'Please enter a valid email address.'}
		},
		errorPlacement: function (error, element) {
			$(error).insertBefore($(element));
		},
		highlight: function(element, errorClass) {				
			$(element).parent('div').addClass('has-error');
		},			
		unhighlight: function(element, errorClass, validClass) {
			$(element).parent('div').removeClass('has-error');
		},
		onfocusout: false,
		invalidHandler: function(event, validator){
			setTimeout(function(){
				$('input:text').blur();
				$('textarea').blur();
				// Pseudo of input:email is not recognized by jQuery yet, so have to target the email fields individually.
				$('#EmailAddress').blur();
			}, 10);
		}
	});		
});
