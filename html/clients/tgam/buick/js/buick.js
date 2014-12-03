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


	$('#candleBtn').click(function(e) {
		$('#theTable').fadeIn();
		 //e.preventDefault();
	});
	
	$('#candleClose').click(function(e) {
		$('#theTable').fadeOut();
		// e.preventDefault();
	});
	
	$('#tablebg').click(function(e) {
		$('#theTable').fadeOut();
		// e.preventDefault();
	});
	
	$('#plateBtn').click(function(e) {
		$('#recipe').fadeIn();
		// e.preventDefault();
	});
	
	
	$('#recipeClose').click(function(e) {
		$('#recipe').fadeOut();
		// e.preventDefault();
	});
	
	$('#recipebg').click(function(e) {
		$('#recipe').fadeOut();
		// e.preventDefault();
	});
	
	
	$('#recipe1').toggle(
    function(){
        $(this).animate({
            marginTop: "-501px", 
        }, 500);
    },
    function(){
        $(this).animate({
           marginTop: "0px", 
        }, 500);     
	});
	
	$('#shoulderBtn').click(function(e) {
		$('#shoulder').fadeIn();
		$('#shoulderBtn').fadeOut();
		
		// e.preventDefault();
	});
	
	
	$('#shoulderClose').click(function(e) {
		$('#shoulder').fadeOut();
		$('#shoulderBtn').fadeIn();
		// e.preventDefault();
	});
	
	
	$('#shoulderbg').click(function(e) {
		$('#shoulder').fadeOut();
		$('#shoulderBtn').fadeIn();
		// e.preventDefault();
	});
	
	
});