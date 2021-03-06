$(document).ready(function () { 
	// Set initial state of form...
	$('#InvalidThreadIDAlert').hide();
	$('#ThreadRetrievalForm').show();
	$('#ThreadContainer').hide();
	
	// Toggle visibility of "CAPTCHA" row...
	if ($.cookie('ClearedCaptcha') !== undefined)
	{
		$('#CaptchaRow').hide();	
	}
	var securityCode = GenerateCaptcha('CaptchaCanvas');
	
	// Setup form field validation...
	var validator = $('#ThreadRetrievalForm').validate({
		errorElement: 'div',
		rules: {
			ThreadID: {required: true}
		},
		messages: {
			ThreadID: {required: 'Please enter your message access code.'}
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

/* Assign an OnClick function to items in the "Retrieve" button */
$('#ThreadRetrievalButton').click(function(e) {
	$(document).ready(function () {
		var form = $('#ThreadRetrievalForm');
		form.validate();
		if (form.valid() === true) {
			var threadID = $('#ThreadID').val().trim();
			
			//console.log('Datasource: ' + messageDatasourceRead);
			$('#dataPlaceholder').sheetrock({
	  			url: messageDatasourceRead,
	  			sql: "select A,B,C,D where B = '"+threadID+"' order by A",
	  			chunkSize: 1,
				formatting: false,
	  			dataHandler: isThreadIDValid
			});
		
			function isThreadIDValid(data)
			{
				//$('#dataPlaceholder').html('<pre>' + JSON.stringify(data) + '</pre>');
				if (data.table.rows[0] === undefined) {
					$('#InvalidThreadIDAlert').show();
				}
				else {
					$('#InvalidThreadIDAlert').hide();
					$('#Subject').html(data.table.rows[0].c[3].v);
					$('#OriginalRecipient').html(data.table.rows[0].c[2].v);
				}
			}
			
			// Put the info the user should see into the table...
			$('#Thread').sheetrock({
	  			url: messageDatasourceRead,
	  			sql: "select A,E where B = '"+threadID+"' order by A desc",
	  			chunkSize: 100,
	  			labels: ['Date', 'Message']
			});
			
			setTimeout(function() {
				// Cleanup date formatting from Google's format
				$('#Thread tbody tr td:first-child').each(function()
				{
					var currentVal = $(this).html().trim();
					var unformattedDate = new Date(currentVal);
					
					var dd = pad(unformattedDate.getDate(), 2);
					var mm = pad(unformattedDate.getMonth()+1, 2);
					var yyyy = pad(unformattedDate.getFullYear(), 4);
					var hours = pad(unformattedDate.getHours(), 2);
					var hours12 = hours % 12 || 12; 
					var minutes = pad(unformattedDate.getMinutes(), 2);
					var seconds = pad(unformattedDate.getSeconds(), 2);
					var tt = 'am';
					if (hours >= 12) { 
						tt = 'pm';
					}
					d=mm+'/'+dd+'/'+yyyy+' '+hours12+':'+minutes+tt;
					$(this).html(d);
					//console.log(d);
				});
				$('#ThreadRetrievalForm').hide();
				$('#ThreadContainer').show();
			}, 1000);
			$(window).scrollTop(0);
		}	
	});
});

$('#ReplyButton').click(function(e) {
	$(document).ready(function () {	
		window.location = '/#!/reply/'+$('#ThreadID').val().trim();
	});
});
