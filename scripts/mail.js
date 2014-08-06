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
			//$.get("http://ipinfo.io", function(response) {
				/* Send mail only if there is a message (basically prevent empty submissions if validation goes haywire)... */
				if ($.trim($('#Message').val()).length >= 1) {
					var postID = $.trim($('#PostIDHidden').val());
					var sender = 'info@eat-sleep-code.com';
					var senderName = 'emailapp.eat-sleep-code.com';
					var recipient = $.trim($('#ToEmailAddress').val());
					var subject = $.trim($('#Subject').val());
					var message = $.trim($('#Message').val()).replace(/\n/g, '<br />') + '<br />');
					var messageHeader = 'This message was sent to you anonymously.   If you would like to send a reply, <a href="http://emailapp.eat-sleep-code.com/reply/'+postID+'" target="_blank" title="Click here to reply to this message">click here</a>.';
					var messageFooter = 'If you would like to block all emailapp.eat-sleep-code.com users from sending you a message, <a href="http://emailapp.eat-sleep-code.com/block/'+postID+'" target="_blank" title="Click here to block users from sending you a message.">click here</a>.';
				
					//messageFooter += '<hr />' + response.ip + '<br />' + response.city + ', ' + response.region + ' ' + response.postal + ', ' + response.country;
					sendMail(sender, senderName, recipient, subject, messageHeader + '<hr />' + message + '<hr />' + messageFooter);
					
					$('#ContactMessageSentAlert').show();
					$('#ContactMessageForm').hide();
				}	
			//}, "jsonp");
			$(window).scrollTop(0);
		}
	});
});  
