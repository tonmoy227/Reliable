/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: 1.3, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	$('.marquee-left').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			CustomEase.create("ease1", ".645,.045,.355,1");

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				if($('.hero_char').length) {
					var txtSplit = $('.hero_char');
					if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
						el.split = new SplitText(el, { 
							type: "chars",
							charsClass: "hr3-chars"
						});
						$(el).find('.hr3-chars').each(function() {
							$(this).wrap('<div class="hr3-chars-wrapper"></div>');
						});
					});
				}
			}, 700);
		})		
	});
	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var RASER = gsap.timeline({

			scrollTrigger: {
				trigger: '.ra-ser3-sec',
				start: "top -35%",
				end: "top -100%",
				scrub: 3,
				pin: true,
				pinSpacing: true,
				markers: false,
			}

		});
		RASER
		.to( ".ra_list_1 a" , { fontWeight: 500, opacity: 1,borderColor: "#85EE00", duration: 1})
		.to( ".ra_item_1" , { xPercent: -200, y: 50, duration: 10})
		.to( ".ra_list_2 a" , { fontWeight: 500, opacity: 1, borderColor: "#85EE00", duration: 1})
		.to( ".ra_list_1 a" , { fontWeight: 400, opacity: .4, borderColor: "rgba(255, 255, 255, .32)", duration: 1})
		.to(".ra_item_2", { rotate: "-22deg", duration: 10},"<= -1")
		.to(".ra_item_2", {y: -50, xPercent: -200,   duration: 10},"<= +2 ")
		.to( ".ra_list_2 a" , { fontWeight: 400, opacity: .4, borderColor: "rgba(255, 255, 255, .32)", duration: 1})
		.to( ".ra_list_3 a" , { fontWeight: 500, opacity: 1, borderColor: "#85EE00", duration: 1})
		.to(".ra_item_3", {  rotate: "22deg", duration: 10},"<= -1")
		.to(".ra_item_3", { xPercent: -200, y: 50,  duration: 10},"<= +2 ")
		.to( ".ra_list_3 a" , { fontWeight: 400, opacity: .4, borderColor: "rgba(255, 255, 255, .32)", duration: 1})
		.to( ".ra_list_4 a" , { fontWeight: 500, opacity: 1, borderColor: "#85EE00", duration: 1})
		.to(".ra_item_4", {  rotate: "-22deg", duration: 10},"<= -1")
		.to(".ra_item_4", { xPercent: -200, y: -50,  duration: 5},"<= +2 ")
		.to( ".ra_list_4 a" , { fontWeight: 400, opacity: .4, borderColor: "rgba(255, 255, 255, .32)", duration: 1})
		.to( ".ra_list_5 a" , { fontWeight: 500, opacity: 1, borderColor: "#85EE00", duration: 1})
		.to(".ra_item_5", { rotate: "0", duration: 5},"<= -1")
		.to(".ra_item_5", { xPercent: 0, y: -50,  duration: 5},"<= +2 ")
		.to( ".ra_list_5 a" , { fontWeight: 400, opacity: 1, borderColor: "#85EE00", duration: 1})
	};
	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var RACOUNT = gsap.timeline({
			scrollTrigger: {
				trigger: '.ra-count3-sec',
				start: "top 10%",
				end: "top -100%",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				markers: false,
			}

		});
		RACOUNT
		.from( ".ra_count_1 .item-bg" , { scale: .5, opacity: 0, duration: 1})
		.from( ".ra_count_1 .item-text" , { y: 100, opacity: 0, duration: 1})
		.from( ".ra_count_1 .ra_count_line" , { width: 0, force3D: true , duration: 1})
		.from( ".ra_count_1 .item-desc" , { x: 100, opacity: 0,  duration: 1})
		.from( ".ra_count_2 .item-bg" , { scale: .5, opacity: 0, duration: 1})
		.from( ".ra_count_2 .item-text" , { y: 100, opacity: 0, duration: 1})
		.from( ".ra_count_2 .ra_count_line" , { width: 0, force3D: true , duration: 1})
		.from( ".ra_count_2 .item-desc" , { x: 100, opacity: 0,  duration: 1})
		.from( ".ra_count_3 .item-bg" , { scale: .5, opacity: 0, duration: 1})
		.from( ".ra_count_3 .item-text" , { y: 100, opacity: 0, duration: 1})
		.from( ".ra_count_3 .ra_count_line" , { width: 0, force3D: true , duration: 1})
		.from( ".ra_count_3 .item-desc" , { x: 100, opacity: 0, duration: 1})
	};


})(jQuery);