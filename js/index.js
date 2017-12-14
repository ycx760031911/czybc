// JavaScript Document
/**
 * 
 * @chenxueshuang (chenxueshuang@outlook.com)
 * @date    2016-11-28
 * @version 1.0
 */

var timer;
var currentNum=1;
var changeCurr=false;


$(document).ready(function(){

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
	// 太阳闪烁
	function sun(){
		$(".sun").animate({
		    opacity:'0.5'
		  },2000);
		$(".sun").animate({
		    opacity:'1'
		  },2000);
	}
	setInterval(sun,4000);
	
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
	// pc端及平板横向显示首页展示信息轮播出现
	if($(window).width()>1023 && $(window).width()>$(window).height()){
		setTimeout(showMain,2000);

		$(".section2").mouseenter(function(){stopSlide();}).mouseleave(function(){startSlide();});
		
		startSlide();
		$(".section2 .pre").click(function(){preImage();});
		$(".section2 .next").click(function(){nextImage();});

		$(".section2").hover(
			function(){
			$(".section2 .pre").animate({left:0},600);
			$(".section2 .next").animate({right:-2},600);
		},function(){
			$(".section2 .pre").animate({left:-54},600);
			$(".section2 .next").animate({right:-54},600);	});
	}else{//手机端及平板竖向显示效果
		$('.section3').delay(1400).animate({
			top: '-185%'
		}, 1000, 'easeOutExpo');
		if($(window).width()<1023){
			$(".circle,.circle-content").css({"display":"block","top":"0"});
		}else{
			$(".circle,.circle-content").css({"display":"block","top":"15%"});
		}
	}

});
// 第一屏动画完成后信息显示
function showMain(){
	$('.ground').animate({
		top: '30%'
	}, 1000, 'easeOutExpo');
	$('.section2').delay(500).animate({
		left: '0'
	}, 1000, 'easeOutExpo');
}
// 信息轮播（左右滑动）
function slidBs(whether){
	if(changeCurr){return;}
	changeCurr=true;
	var i=whether?currentNum+1:currentNum-1;
	i=i>$(".section2 div").length?1:(i<1?$(".section2 div").length:i);
	slideB(whether,i);
}
// 信息轮播（当前显示索引）
function slideB(diraction,i){
	var winWidth;
	//true为下一个图片,false为上一个图片
	if(diraction){
		winWidth = $(window).width();
	}else{
		winWidth = -$(window).width();
	}
	$(".brief"+i).css("left",winWidth);
	$(".brief"+i).show();
	$(".brief"+currentNum).animate({left:-winWidth},1000,'easeOutExpo');
	$(".brief"+currentNum).hide();
	$(".brief"+i).animate({left:'0'},1000,'easeOutExpo',function(){
		currentNum=i;
		changeCurr=false;	
	});
}
// 信息轮播鼠标交互效果
function startSlide(){timer=setInterval("timerTick()",3000);}
function stopSlide(){clearInterval(timer);}
function timerTick(){slidBs(true);}
function preImage(){slidBs(false);}
function nextImage(){slidBs(true);}


