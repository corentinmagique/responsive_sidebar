$(document).ready(function() {

    $('#default').addClass('active');
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
        anchors: ['dashboard', 'achats', 'stock', 'settings'],
        licenseKey: '7823AF3B-75D143EC-BBC224B0-ED18DB29',
		scrollOverflow: false 
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});