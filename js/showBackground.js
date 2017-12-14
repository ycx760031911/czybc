/**
 * 
 * @chenxueshuang (chenxueshuang@outlook.com)
 * @date    2016-12-15 14:23:53
 * @version 1.0
 */
 define(['jquery','easing'],function($, easing){
 	function showMain(){
		$('.ground').animate({
			top: '30%'
		}, 1000, 'easeOutExpo');
		$('.section2').delay(500).animate({
			left: '0'
		}, 1000, 'easeOutExpo');
	}
	return{
		showBackground : function(){
			if($(window).width()>767){
				$(".sun").animate({
				    top:'2%',
				    opacity:'1'
				  },2000, 'easeOutExpo');
			}else{
				$(".sun").animate({
				    top:'8%',
				    opacity:'1'
				  },2000, 'easeOutExpo');
			}
			
			// 山树出现动画
			$('.m-bg').delay(0).animate({
				bottom: '0px'
			}, 500, 'easeOutExpo');
			$('.mountain').delay(400).animate({
				bottom: '0px'
			}, 500, 'easeOutExpo');
			$('.tree2').delay(800).animate({
				bottom: '0px'
			}, 500, 'easeOutExpo');
			$('.tree1').delay(1300).animate({
				bottom: '0px'
			}, 500, 'easeOutExpo');

			$('.enter').delay(2000).animate({
				bottom: '16%'
			}, 500, 'easeOutExpo');
		 // 	// 第一屏动画完成后信息显示
			// $('.ground').animate({
			// 	top: '30%'
			// }, 1000, 'easeOutExpo');
			// $('.section2').delay(500).animate({
			// 	left: '0'
			// }, 1000, 'easeOutExpo');
		},
		showMain : setTimeout(showMain(),2000)
		}
});	