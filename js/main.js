
//
// Lazy Load

$("a.js-lazy").lazyload({
      effect : "fadeIn",
      threshold : 400
  });






// Menu

// function closeNav() {
// 		$('.cd-nav-trigger').removeClass('nav-is-visible');
// 		$('.cd-main-header').removeClass('nav-is-visible');
// 		$('.cd-primary-nav').removeClass('nav-is-visible');
// 		$('.has-children ul').addClass('is-hidden');
// 		$('.has-children a').removeClass('selected');
// 		$('.moves-out').removeClass('moves-out');
// 		$('.cd-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
// 			$('body').removeClass('overflow-hidden');
// 		});
// 	}

// 	function toggleSearch(type) {
// 		if(type=="close") {
// 			//close serach 
// 			$('.cd-search').removeClass('is-visible');
// 			$('.cd-search-trigger').removeClass('search-is-visible');
// 			$('.cd-overlay').removeClass('search-is-visible');
// 		} else {
// 			//toggle search visibility
// 			$('.cd-search').toggleClass('is-visible');
// 			$('.cd-search-trigger').toggleClass('search-is-visible');
// 			$('.cd-overlay').toggleClass('search-is-visible');
// 			if($(window).width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
// 			($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
// 		}
// 	}

		//open submenu
	$('.lapa-nav--children').children('a').on('click', function(event){

		event.preventDefault();
		$(this).toggleClass('selected');

		$('.js-lapa-category').toggleClass('active');

		$('.lapa-overlay').toggleClass('lapa-overlay--active');

	});


	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();

		$('.cd-nav-trigger').toggleClass('nav-is-visible');

		$('.js-lapa-category').toggleClass('active');

		$('.lapa-overlay').toggleClass('lapa-overlay--active');

	});


	$('.cd-search-trigger').on('click', function(event){
		event.preventDefault();

		//alert("search");

		$('.cd-search-trigger').toggleClass('search-is-visible');

		$('#cd-search').toggleClass('is-visible');

		$('.cd-search').find('input[type="search"]').focus();

		$('.lapa-overlay').toggleClass('lapa-overlay--active');

	});



		//mobile - open lateral menu clicking on the menu icon
	// $('.cd-nav-trigger').on('click', function(event){
	// 	event.preventDefault();
	// 	if( $('.cd-main-content').hasClass('nav-is-visible') ) {
	// 		closeNav();
	// 		$('.cd-overlay').removeClass('is-visible');
	// 	} else {
	// 		$(this).addClass('nav-is-visible');
	// 		$('.cd-primary-nav').addClass('nav-is-visible');
	// 		$('.cd-main-header').addClass('nav-is-visible');
	// 		$('.cd-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	// 			$('body').addClass('overflow-hidden');
	// 		});
	// 		toggleSearch('close');
	// 		$('.cd-overlay').addClass('is-visible');
	// 	}
	// });

	// //open search form
	// $('.cd-search-trigger').on('click', function(event){
	// 	//event.preventDefault();
	// 	//toggleSearch();
	// 	//closeNav();
	// });




	jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});