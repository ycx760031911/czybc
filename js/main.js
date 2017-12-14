/**
 * 
 * @chenxueshuang (chenxueshuang@outlook.com)
 * @date    2016-12-15 14:23:53
 * @version 1.0
 */
 require.config({
 	paths:{
 		"jquery":"jquery.min",
 		"easing":"jquery.easing.1.3"
 	},
 	shim:{
		"easing":{
 			deps:["jquery"],
 			exports:"easing"
 		}
	}
 });
 require(['jquery','easing','showBackground','showMain'],function($,easing,showBackground,showMain){
	$(function(){
		showBackground.showBackground();
		setTimeout(showMain.ShowMain({
			selectors : {
				section : '.section2',
				pre : '.section2 .pre',
				next : '.section2 .next'
			},
			bannerNum : $(".section2 div").length,
			bannerName : 'brief'
		}),2000);
		// var show = new showMain.ShowMain({
		// 	selectors : {
		// 		section : '.section2',
		// 		pre : '.section2 .pre',
		// 		next : '.section2 .next'
		// 	},
		// 	bannerNum : $(".section2 div").length,
		// 	bannerName : 'brief'
		// });
	});

	// toSlideBs('.section2', '.section2 .pre', '.section2 .next')

	// function toSlideBs(section, pre, next){
	// 		if($(window).width()>767 && $(window).width()>$(window).height()){
	// 			//setTimeout(showMain,2000);
	// 			$(section).mouseenter(function(){show.stopSlide();}).mouseleave(function(){show.startSlide();});
				
	// 			show.startSlide();
	// 			$(pre).click(function(){show.preImage();});
	// 			$(next).click(function(){show.nextImage();});

	// 			$(section).hover(
	// 				function(){
	// 				$(pre).animate({left:0},600);
	// 				$(next).animate({right:-2},600);
	// 			},function(){
	// 				$(pre).animate({left:-54},600);
	// 				$(next).animate({right:-54},600);	
	// 			});
	// 		}
	// 	}
 });