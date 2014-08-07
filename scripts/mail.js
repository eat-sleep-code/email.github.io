sendMail(sender, senderName, recipient, subject, message) {
	$.ajax({
		type: 'POST',
		url: 'https://mandrillapp.com/api/1.0/messages/send.json',  
		data: {
			/* Confirm API key before use! */
			'key': 'f--yiGIPJLzYgQR-i2XWSg', 
			'message': {
				'from_email': serviceEmail,
				'from_name': senderName,
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
