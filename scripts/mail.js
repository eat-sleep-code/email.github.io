function sendMail(sender, senderName, recipient, subject, message) {
	$.ajax({
		type: 'POST',
		url: 'https://mandrillapp.com/api/1.0/messages/send.json',  
		data: {
			/* Confirm API key before use! */
			'key': 'f--yiGIPJLzYgQR-i2XWSg', 
			'message': {
				'from_email': 'info@eat-sleep-code.com',
				'from_name': senderName,
				"headers": {"Reply-To": sender},
				'to': [{'email': recipient, 'type': 'to'}],
				'autotext': 'true',
				'subject': subject,
				'html': message,
				'auto_html': true,
				'auto_text': true
			}
	    	}
	});
}


/* Assign an OnClick function to items in the "Send" button */
$('#ContactMessageSendButton').click(function(e) {
	$(document).ready(function () {
		var form = $('#ContactMessageForm');
		form.validate();
		if (form.valid() === true) {
			/* Get IP Address */
			$.get("http://ipinfo.io", function(response) {
    				
				/* Send mail only if there is a message (basically prevent empty submissions if validation goes haywire)... */
				if ($.trim($('#Message').val()).length >= 1) {
					var sender = $.trim($('#EmailAddress').val());
					var senderName = $.trim($('#FirstName').val()) + ' ' + $.trim($('#LastName').val());
					var recipient = 'info@eat-sleep-code.com';
					var subject = $.trim($('#Subject').val());
					var message = $.trim($('#Message').val()).replace(/\n/g, '<br />') + '<br />' + $.trim($('#TwitterUsername').val());
					message += '<hr />' + response.ip + '<br />' + response.city + ', ' + response.region + ' ' + response.postal + ', ' + response.country;
					sendMail(sender, senderName, recipient, subject, message);
					
					$('#ContactMessageSentAlert').show();
					$('#ContactMessageForm').hide();
				}	
			}, "jsonp");
			$(window).scrollTop(0);
		}
	});
});  
