$(document).ready(function () {
	$('.selectpicker').selectpicker();

	$.validator.setDefaults({
		errorElement: 'div',
		errorPlacement: function (error, element) {
			$(error).insertBefore($(element));
		},
		highlight: function (element, errorClass) {
			$(element).parent().addClass("has-error");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).parent().removeClass("has-error");
		},
		invalidHandler: function (event, validator) {
				$('input:text, input:password, textarea, #Email, #Username').each(function () {
					try {
						$(this).blur();
					}
					catch (e) { }
				});
		},
		onfocusout: false
	});

	var loginFormValidator = $("#LoginForm").validate({
		rules: {
			Username: { required: true, email: true }
		},
		messages: {
			Username: { required: $("#Email").data("validationRequired"), email: $("#Username").data("validationFormat") }
		}
	});
});
