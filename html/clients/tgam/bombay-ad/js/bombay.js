$(document).ready(function(){
	
	/*
	$('#plate').click(function(e) {
    $('#theTable').lightbox_me({
        centered: false, 
		showOverlay: false,
		modalCSS:	{top: '273px'}
        
    });
    e.preventDefault();
	});
*/

	$('.closeBtn').click(function(){
		$(this).parent().parent().fadeOut();
	})

	$('#martini').click(function(e) {
		$('#martiniCont').fadeIn();
		 e.preventDefault();
	});
	
	$('#redtop').click(function(e) {
		$('#redtopCont').fadeIn();
		 e.preventDefault();
	});
	
	$('#redbot').click(function(e) {
		$('#redbotCont').fadeIn();
		 e.preventDefault();
	});
	
	$('#bombay').click(function(e) {
		$('#bombayCont').fadeIn();
		 e.preventDefault();
	});
	
	
	
	
});