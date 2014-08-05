jQuery.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
})();


/* Assign an OnClick function to items in the drop down menu */
$("a").click(function(e) {
	var url = $(this).attr('href');
	if(typeof url !== 'undefined')
	{
		if (url.substr(0,3) == '#!/')
		{
			/* URL For View */
			if ($(this).hasClass(".navbar"))
			{
				$('.navbar .active').removeClass('active');
				if ($(this).hasClass(".dropdown-menu"))
				{
					$(this).parent().parent().parent().addClass('active');
		    		$(this).parent().addClass('active');
				}
			}
			$('.navbar-collapse').collapse('hide');
			$(window).scrollTop(0);
		}
		else
		{
			/* Normal URL */
			window.top.location.href = url;
		}
	}
});  

