$(document).ready(function () {
	$('.selectpicker').selectpicker();
	$('.selectpicker').on('change', function () {
		var childMenu = $("body").find('#' + $(this).data('child-menu-name'));
		var childMenuData = $(this).find(':selected').data('child-menu');
		if (childMenuData !== undefined) {
			$(childMenu).find('option').remove().end();

			childMenuData.items.forEach(function (item) {
				var json = JSON.parse(item);
				$(childMenu).append('<option value=' + json.value + '>' + json.name + '</option>');
				$(childMenu).parents().removeClass('is-disabled');
				$(childMenu).prop('disabled', false);
			});
		}
		else {
			$(childMenu).find('option').remove().end();
			$(childMenu).parent().addClass('is-disabled');
			$(childMenu).prop('disabled', true);
		}
		$('.selectpicker').selectpicker('refresh');
	});

	
	var validator = $('#RegistrationForm').validate({
		errorElement: 'div',
		rules: {
			FirstName: { required: true },
			LastName: { required: true },
			Email: { required: true, email: true },
			JobTitle: { required: true },
			Company: { required: true },
			StateProvince: { required: true }
		},
		messages: {
			FirstName: { required: $("#FirstName").data("validationRequired") },
			LastName: { required: $("#LastName").data("validationRequired") },
			Email: { required: $("#Email").data("validationRequired"), email: $("#Email").data("validationFormat") },
			JobTitle: { required: $("#JobTitle").data("validationRequired") },
			Company: { required: $("#Company").data("validationRequired") },
			StateProvince: { required: $("#StateProvince").data("validationRequired") }
		},
		errorPlacement: function (error, element) {
			$(error).insertBefore($(element));
		},
		highlight: function (element, errorClass) {
			$(element).parent('div').addClass('has-error');
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).parent('div').removeClass('has-error');
		},
		onfocusout: false,
		invalidHandler: function (event, validator) {
			setTimeout(function () {
				$('input:text').blur();
				$('textarea').blur();
				// Pseudo of input:email is not recognized by jQuery yet, so have to target the email fields individually.
				$('#Email').blur();
			}, 10);
		}
	});
});

