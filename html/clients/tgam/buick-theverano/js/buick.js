$(document).ready(function(){
	
	

	$('#slideshowBtn').click(function(e) {
		$('#theTable').fadeIn();
		// e.preventDefault();
	});
	
	$('#candleClose').click(function(e) {
		$('#theTable').fadeOut();
		// e.preventDefault();
	});
	
	$('#tablebg').click(function(e) {
		$('#theTable').fadeOut();
		// e.preventDefault();
	});
	
	
	$('#videoBtn').click(function(e) {
		$('#videobox').fadeIn();
		$('#buickvid').get(0).play()
		// e.preventDefault();
	});
	
	
	$('#videoClose').click(function(e) {
		
		$('#videobox').hide();
		$('#buickvid').get(0).pause();
		// e.preventDefault();
	});
	
	$('#videobg').click(function(e) {
		
		$('#videobox').hide();
		$('#buickvid').get(0).pause();
		// e.preventDefault();
	});
	
	
	
	
});