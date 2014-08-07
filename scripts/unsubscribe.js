$(document).ready(function () { 
	// Set initial state of form...
	$('#UnsubscribedAlert').hide();
	$('#UnsubscribeForm').show();
	
	// Toggle already unsubscribed message based on user's email address...
	$('#EmailAddress').blur(function() {
		//console.log('Datasource: ' + unsubscribeDatasourceRead);
		$('#dataPlaceholder').sheetrock({
  			url: unsubscribeDatasourceRead,
  			sql: "select B where B = '" + $("#EmailAddress").val() + "'",
			formatting: false,
  			dataHandler: isEmailUnsubscribed
		});
	
		function isEmailUnsubscribed(data)
		{
			//$('#dataPlaceholder').html('<pre>' + JSON.stringify(data) + '</pre>');
			if (data.table.rows[0] !== undefined) {
				$('#UnsubscribedAlert').show();
				$('#UnsubscribeButton').attr("disabled", "disabled");
				//console.log('Email Address Already Unsubscribed');
			}
			else {
				$('#UnsubscribedAlert').hide();
				$('#UnsubscribeButton').removeAttr("disabled");
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
	var validator = $('#UnsubscribeForm').validate({
		errorElement: 'div',
		rules: {
			EmailAddress: {required: true, email: true}
		},
		messages: {
			EmailAddress: {required: 'Please enter your email address.', email: 'Please enter a valid email address.'},
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

/* Assign an OnClick function to items in the "Send" button */
$('#UnsubscribeButton').click(function(e) {
	$(document).ready(function () {
		var form = $('#UnsubscribeForm');
		form.validate();
		if (form.valid() === true) {
			var emailAddress = $.trim($('#EmailAddress').val());
			
			// Save To Database
			$.ajax({
				url: unsubscribeDatasourceWrite,
				data: {
					"entry_940157897": emailAddress
				},
				type: "POST",
				dataType: "xml",
				statusCode: {
					0: function () {
						$('#UnsubscribedAlert').show();
						$('#UnsubscribeForm').hide();
					},
					200: function () {
						$('#UnsubscribedAlert').show();
						$('#UnsubscribeForm').hide();
					}
				}
			});
		}	
		$(window).scrollTop(0);
		
	});
});
