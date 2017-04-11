$(document).ready(function(){	
	
	$('.site-header__trigger').on('click', function(e){
		e.preventDefault();
    	var header = $('.site-header'),
    		page = $('.page-content');
		if (header.hasClass('menu-open')) {
	        header.removeClass('menu-open');
	        page.removeClass('menu-open');
	    } else {
	        header.toggleClass('menu-open');
	        page.toggleClass('menu-open');
	    }
	});	

});