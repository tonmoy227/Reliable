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

	if($('#smooth-content').length){
		ScrollSmoother.create({
			smooth: 1.2,         
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			normalizeScroll: true,                 
			ignoreMobileResize: false, 
			effects: true,
		});
	};

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
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.ra-scrollup').fadeIn();
		} else {
			$('.ra-scrollup').fadeOut();
		}
	});
	$('.ra-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
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
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	
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
		gap: 28,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	// counter-activation
	$('.counter').counterUp({
		delay: 20,
		time: 5000
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
				if($(".hero_title").length) {
					var Mcoxherp = $(".hero_title");
					if(Mcoxherp.length == 0) return; gsap.registerPlugin(SplitText); Mcoxherp.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line",
							charsClass: "hr3-chars-wrapper",
						});
						$(el).find('.hr3-chars').each(function() {
							$(this).wrap('<div class="hr3-chars-wrapper"></div>');
						});
						gsap.set(el, { perspective: 400 });
						if( $(el).hasClass('hero_title_1') ){
							gsap.set(el.split.chars, {
								y: 200,
								scaleX: 0,
								opacity: 0,
								rotateX: "15deg"
							});
						}
						if( $(el).hasClass('hero_title_2') ){
							gsap.set(el.split.words, {
								x: 100,
								scaleY: 0,
								opacity: 0,
								rotateX: "90deg",
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								end: "top -100%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							opacity: 1,
							duration: 1,
							stagger: .2,
							rotateX: "0",
							ease: "back.out",
						});
						el.anim = gsap.to(el.split.words, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								end: "top -100%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleY: 1,
							opacity: 1,
							duration: 1,
							stagger: .2,
							rotateX: "0",
							ease: "back.inOut(1.7)",
						});
					});
				};
				const RAH1 = gsap.timeline();
				RAH1
				.from(".ra-hero3-sec .ra-hero3-shape img", { scaleX: 0,  yPercent: -100, duration: 3, transformOrigin: "top",  ease: "power1.out" })
				.from(".ra-hero3-percent", {  opacity:0, xPercent: -100, duration: 3, transformOrigin: "top", ease: "bounce.out" },"<= -.5")
				.from(".ra-hero3-desc", {  opacity:0, xPercent: 100, duration: 3, transformOrigin: "top", ease: "elastic.out(1,0.7)" },"<= .5")
				.from(".ra-hero3-img", {  opacity:0, yPercent: 100, duration: 3, transformOrigin: "bottom", ease: "elastic.out(1,0.7)" },"<= .5")

				const RAH2 = gsap.timeline();
				RAH2
				.from(".ra-hero4-sec .ra-hr4-top", { opacity: 0,  yPercent: -100, duration: 1.5, transformOrigin: "bottom",  ease: "power1.out" })
				.from(".ra-hero4-sec .ra-hr-bottom-shape1", { opacity: 0,  yPercent: 100, duration: 1.5, transformOrigin: "bottom",  ease: "power1.out" })
				.from(".ra-hero4-sec .ra-hr-bottom-shape2", { opacity: 0,  yPercent: 100, duration: 1.5, transformOrigin: "bottom",  ease: "power1.out" },"<= -.5")
				.from(".ra-hero4-text p", { opacity: 0,  y: 100, duration: 1, transformOrigin: "top",  ease: "power1.out" },"<= +1.5")
				.from(".ra-hero4-text .item-img-wrap .item-img", { opacity: 0,  x: 100, duration: 1, transformOrigin: "top",  ease: "power1.out" })
				.from(".ra-hero4-text .item-img-wrap .item-circle", { opacity: 0,  x: -100, duration: 1, transformOrigin: "top",  ease: "power1.out" },"<= -.5")
				.from(".ra-hero4-content .ra-hr-rocket", { opacity: 0,  yPercent: 100, duration: 5, transformOrigin: "bottom",  ease: "elastic.out(1,0.7)" },"<= -.5")
				.from(".ra-hero4-sec .ra-hr-seo", { opacity: 0,   scale: .5, duration: 5, transformOrigin: "bottom",  ease: "elastic.out(1,0.7)" },"<= -.5")
				.from(".ra-hr4-count-item.item_1", { opacity: 0,  x: -100, duration: 2, transformOrigin: "bottom",  ease: "elastic.out(1,0.7)" },"<= -.06")
				.from(".ra-hr4-count-item.item_2", { opacity: 0,  x: -100, duration: 2, transformOrigin: "bottom",  ease: "elastic.out(1,0.7)" },"<= -.07")
				.from(".ra-hr4-count-item.item_3", { opacity: 0,  x: -100, duration: 2, transformOrigin: "bottom",  ease: "elastic.out(1,0.7)" },"<= -.08")

				if($(".ra-hero1-slide").length) {
					var AGTh3 = new Swiper(".ra-hero1-slide", {
						loop: true,
						speed: 1000,
						effect: "fade",
						fadeEffect: {
							crossFade: true
						},
						// autoplay: {
						// 	delay: 4000,
						// },
						navigation: {
							prevEl: ".ra-hs-prev",
							nextEl: ".ra-hs-next",
						},
						pagination: {
							el: ".ra-hs-pagi",
							type: "fraction",
						},
					});
				};
			}, 700);
})		
});
if($('.tx-split-text').length) {
	var st = jQuery(".tx-split-text");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
		});
		gsap.set(el, { perspective: 400 });
		if( jQuery(el).hasClass('split-in-up') ){
			gsap.set(el.split.lines, {
				opacity: 0,
				y: 50,
				rotateX: "50deg",
				ease: "back.out",
				transformOrigin: "50% 0%"
			});
		}
		if( jQuery(el).hasClass('split-in-top') ){
			gsap.set(el.split.lines, {
				opacity: 0,
				yPercent: 100,
				ease: "back.out",
				transformOrigin: "50% 0%"
			});
		}
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			x: "0",
			y: "0",
			rotateX: "0",
			yPercent: 0,
			rotationX: "0",
			color: 'inherit',
			webkitTextStroke: "0px white",
			scale: 1,
			opacity: 1,
			duration: .5, 
			stagger: 0.3,
		});
	});
};
if($('.ra-sec-title').length) {
	var txtheading = $(".ra-sec-title");

	if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		
		if( $(el).hasClass('ra-sec-anim') ){
			gsap.set(el.split.chars, {
				opacity: .3,
				x: "-8",
			});
		}
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 92%",
				end: "top 60%",
				markers: false,
				scrub: 1,
			},

			x: "0",
			y: "0",
			opacity: 1,
			duration: .7,
			stagger: 0.2,
		});
		
	});
}
if ($(".progress-bar").length) {
	var $progress_bar = $('.progress-bar');
	$progress_bar.appear();
	$(document.body).on('appear', '.progress-bar', function() {
		var current_item = $(this);
		if (!current_item.hasClass('appeared')) {
			var percent = current_item.data('percent');
			current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
		}

	});
}; 
if (window.matchMedia("(min-width: 1200px)").matches) { 
	var RASER = gsap.timeline({

		scrollTrigger: {
			trigger: '.ra-ser3-sec',
			start: "top -30%",
			end: "top -100%",
			scrub: 3,
			pin: true,
			pinSpacing: true,
			markers: false,
		}

	});
	RASER
	.to( ".ra_list_1 a" , { fontWeight: 500, opacity: 1,borderColor: "#85EE00", duration: 1})
	.to( ".ra_item_1" , { xPercent: -200, y: 50, duration: 15})
	.to( ".ra_list_2 a" , { fontWeight: 500, opacity: 1, borderColor: "#85EE00", duration: 1})
	.to( ".ra_list_1 a" , { fontWeight: 400, opacity: .4, borderColor: "rgba(255, 255, 255, .32)", duration: 1})
	.to(".ra_item_2", { rotate: "-22deg", duration: 15},"<= -1")
	.to(".ra_item_2", {y: -50, xPercent: -200,   duration: 15},"<= +2 ")
	.to( ".ra_list_2 a" , { fontWeight: 400, opacity: .4, borderColor: "rgba(255, 255, 255, .32)", duration: 1})
	.to( ".ra_list_3 a" , { fontWeight: 500, opacity: 1, borderColor: "#85EE00", duration: 1})
	.to(".ra_item_3", {  rotate: "22deg", duration: 15},"<= -1")
	.to(".ra_item_3", { xPercent: -200, y: 50,  duration: 15},"<= +2 ")
	.to( ".ra_list_3 a" , { fontWeight: 400, opacity: .4, borderColor: "rgba(255, 255, 255, .32)", duration: 1})
	.to( ".ra_list_4 a" , { fontWeight: 500, opacity: 1, borderColor: "#85EE00", duration: 1})
	.to(".ra_item_4", {  rotate: "-22deg", duration: 15},"<= -1")
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
	.from( ".ra_count_3 .item-bg" , { scale: .5, opacity: 0, duration: 1})
	.from( ".ra_count_3 .item-text" , { y: 100, opacity: 0, duration: 1})
	.from( ".ra_count_3 .ra_count_line" , { width: 0, force3D: true , duration: 1})
	.from( ".ra_count_3 .item-desc" , { x: 100, opacity: 0, duration: 1})
	.from( ".ra_count_2 .item-bg" , { scale: .5, opacity: 0, duration: 1})
	.from( ".ra_count_2 .item-text" , { y: 100, opacity: 0, duration: 1})
	.from( ".ra_count_2 .ra_count_line" , { width: 0, force3D: true , duration: 1})
	.from( ".ra_count_2 .item-desc" , { x: 100, opacity: 0,  duration: 1})
};
if (window.matchMedia("(min-width: 1300px)").matches) { 
	var RAABOUT = gsap.timeline({
		scrollTrigger: {
			trigger: '.ra-about-exp3-content',
			start: "top 40%",
			toggleActions: 'play none none reverse',
			markers: false,
		}

	});
	RAABOUT
	.from(".ra-ab3-img-wrap .item-img1 .inner-img", { opacity: 0,  y: 300, duration: 2,   ease: "elastic.out(1,0.5)" })
	.from(".ra-ab3-img-wrap .item-img2 .inner-img", { opacity: 0,  y: 300, duration: 2,   ease: "elastic.out(1,0.5)" },"<= .5")
	.from(".ra-ab3-img-wrap .item-img3 .inner-img", { opacity: 0,  y: 300, duration: 2,   ease: "elastic.out(1,0.5)" },"<= .5")
};
if (window.matchMedia("(min-width: 1400px)").matches) { 
	const initProjectWorkflowAnimation = () => {
		const workflowContainer = document.querySelector('.ra-project3-sec');
		if (!workflowContainer) return;
		const animationDuration = 1;
		const projectSections = gsap.utils.toArray(".ra-horizontal-item");
		const sectionStagger = animationDuration / (projectSections.length - 3);
		const scrollAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: workflowContainer,
				pin: true,
				scrub: 1,
				start: "top -6.2%",
				end: "top -100%",
				markers: false 
			}
		});
		scrollAnimation.to(projectSections, {
			xPercent: -100 * (projectSections.length - 3),
			duration: animationDuration,
			ease: "power1.inOut" 
		});
		ScrollTrigger.addEventListener("refresh", () => console.log("ScrollTrigger refreshed"));
	};
	document.addEventListener('DOMContentLoaded', initProjectWorkflowAnimation);

};
if (window.matchMedia("(min-width: 1400px)").matches) { 
	const ProSection = document.querySelectorAll('.ra-project3-sec');
	ProSection.forEach((box) => {
		ScrollTrigger.create({
			trigger: box,
			start: "top -6%",
			end: "top -10%",
			toggleActions: 'play reverse play reverse',
			onEnter: () => box.classList.add('in-view'),
			onLeaveBack: () => box.classList.remove('in-view'),
			markers: false,
		});
	});
};
gsap.utils.toArray(' .top_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			start: "top 95%",
			end: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1, scale: 1, y: "200"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray('.ra_left_img').forEach((el, index) => { 
	let edImg3 = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 60%",
			end: "buttom 20%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	edImg3
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1, rotateZ: 45, scale: 0.5, x: "+=200"}, {opacity: 1,  rotateZ: 0, scale: 1, x: 0, duration: 1, immediateRender: false})
})
gsap.utils.toArray(' .scale_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			start: "top 95%",
			end: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scaleY: 0, y: "200"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});

gsap.utils.toArray(".img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: true,
			pin: false,

		},
	}); 
	tl.from(image, {
		yPercent: -30,
		ease: "none",
	}).to(image, {
		yPercent: 30,
		ease: "none",
	}); 
});

gsap.utils.toArray(' .bottom_text').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 90%",
			start: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: .5,  y: "100"}, {opacity: 1, xPercent: 0, duration: 1, immediateRender: false})
});
const boxes = gsap.utils.toArray('.txt_item_active');
boxes.forEach(svg => {
	gsap.to(svg, {
		scrollTrigger: {
			trigger: svg,
			start: "top 100%",
			end: "bottom bottom",
			toggleClass: "active",
			duration: 3,
			delay:1,
			toggleActions: "play play play reverse",
			once: true,
		}
	});
});
gsap.utils.toArray(' .ra-shape-ft').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 3,
			start: "top 70%",
			end: "bottom 50%",
			toggleActions: "play reverse none reverse",
			markers: false,
		}
	})

	tlcta
	.set(el, {transformOrigin: 'right right'})
	.fromTo(el, { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"}, { clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)", duration: 1})
});
const items = gsap.utils.toArray('.ra_pro_item_1');
items.forEach(animateItem);
function animateItem(el) {
	gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 90%",
			end: "bottom 50%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})
	.set(el, {
		perspective: 2000,
		transformStyle: "preserve-3d",
		transformOrigin: "top top"
	})
	.from(el, {
		scaleY: 0,
		opacity: 0
	});
}
document.querySelectorAll(".ra-wrp3-list").forEach((el) => {
	ScrollTrigger.create({
		trigger: el,
		start: "top 10%",     
		end: "bottom 25%",    
		onEnter: () => el.classList.add("active"),
		onEnterBack: () => el.classList.add("active"),
		onLeaveBack: () => el.classList.remove("active"),
		markers: false  
	});
});
if (window.matchMedia("(min-width: 1200px)").matches) { 
	var WRPPIN = document.querySelectorAll(".ra-wrp3-sec")
	WRPPIN.forEach((item) => {
		gsap.to(item, {
			scrollTrigger: {
				trigger: item,
				markers: false,
				pin: true,
				pinSpacing: true,
				start: "top 10%",
				end: "top -100%",
			},
		});
	});
};
$('.ra-item-active').each(function() {
	$(this).on('mouseover', function() {
		$('.ra-item-active').removeClass('active');
		$(this).addClass('active');
	});
});
if ($('.ra-sponsor-slider').length > 0 ) {
	var slider = new Swiper('.ra-sponsor-slider', {
		spaceBetween: 80,
		slidesPerView: 6,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 5,
				spaceBetween: 40,
			},
			'992': {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			'768': {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			'576': {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			'480': {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
};
if ($('.ra-sponsor-slider-2').length > 0 ) {
	var slider = new Swiper('.ra-sponsor-slider-2', {
		spaceBetween: 80,
		slidesPerView: 3,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			'992': {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			'768': {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			'576': {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			'480': {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});
};
if($(".ra-testi3-slide").length) {
	const swiper = new Swiper(".ra-testi3-slide" , {
		speed: 500,
		loop: true,
		effect: "fade",
		spaceBetween: 0,
		slidesPerView: 1,
		navigation: {
			nextEl: ".ra-testi3-next",
			prevEl: ".ra-testi3-prev",
		},
		pagination: {
			el: ".ra-testi3-pagi",
			clickable: true,
		},
	})
} 

if($(".ra-testi4-slide").length) {
	const swiper = new Swiper(".ra-testi4-slide" , {
		speed: 500,
		loop: true,
		effect: "fade",
		spaceBetween: 0,
		slidesPerView: 1,
		navigation: {
			nextEl: ".ra-testi4-next",
			prevEl: ".ra-testi4-prev",
		},
	})
} 

if($(".ra-blog4-slider").length) {
	const swiper = new Swiper(".ra-blog4-slider" , {
		speed: 500,
		loop: true,
		spaceBetween: 32,
		navigation: {
			nextEl: ".ra-blog4-next",
			prevEl: ".ra-blog4-prev",
		},
		pagination: {
			el: ".ra-blog4-pagi",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
			1800: {
				slidesPerView: 3,
			},
		},
	})
}
if($(".ra-testi1-slider").length) {
	const swiper = new Swiper(".ra-testi1-slider" , {
		speed: 500,
		loop: true,
		spaceBetween: 32,
		navigation: {
			nextEl: ".ra-testi1-next",
			prevEl: ".ra-testi1-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
			1800: {
				slidesPerView: 3,
			},
		},
	})
}


})(jQuery);