/*
	Prerequisites: 

		* jQuery
		* jQuery Validation
		* An HTML5 Canvas Control
	
	Variables Created:
	
		* code : The Captcha Code
*/

function GenerateCaptcha(canvasControl) {
	canvasControl = typeof canvasControl !== 'undefined' ? canvasControl : 'CaptchaCanvas';
		
	/* Initialize "Captcha" Control */
    	var code = (Math.random() +1).toString(36).substr(2, 6);
	var fontList = new Array('Oxygen', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Palatino Linotype', 'Tahoma', 'Times New Roman', 'Trebuchet', 'Verdana', 'Segoe UI');
	var fontFamily = fontList[Math.floor(Math.random() * fontList.length)];
	var fontSize = Math.floor(Math.random() * 7 + 30);
	var strokeColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
	var fillColor = 'rgb(' + Math.floor(Math.random() * 128) + ',' + Math.floor(Math.random() * 128) + ',' + Math.floor(Math.random() * 128) + ')';
    	var skew = Math.floor(Math.random() * 3 - 1) * 0.1;
	var canvas = document.getElementById(canvasControl);
	var canvasContext = canvas.getContext('2d');
	canvasContext.canvas.width = '200';
	canvasContext.canvas.height = '60';
	canvasContext.font = fontSize + 'px ' + fontFamily;
	canvasContext.strokeStyle = strokeColor;
	canvasContext.fillStyle = fillColor;
	canvasContext.strokeText(code,0,40);
    	canvasContext.setTransform (1, skew, 0, 1, 0, 0);
	canvasContext.fillText(code,0,40);
	
	/* jQuery Validation Plugin Is Required */
	$.validator.addMethod('captcha', function(value, element, param) {
		return this.optional(element) || value == param;
	}, "Invalid CAPTCHA Code");
	return code;
}
