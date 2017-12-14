/**
 * 
 * @authors Your Name (chenxueshuang@outlook.com)
 * @date    2016-12-15 16:13:56
 * @version 1.0
 */
define(['jquery','easing'],function($, easing){
	var ShowMain= (function(){
		function ShowMain(ele, opts){
			this.opts = $.extend({}, ShowMain.defaults, opts);
			this.ele= ele;
			this.toSlideBs(this.opts.section, this.opts.pre, this.opts.next);
		}
		ShowMain.prototype = {
			slideBs : function(){
				var opts = this.opts;
				if(changeCurr){return;}
				changeCurr=true;
				var i=opts.diraction?opts.currentNum+1:opts.currentNum-1;
				i=i>opts.bannerNum?1:(i<1?opts.bannerNum:i);
				var winWidth;
				//true为下一个图片,false为上一个图片
				if(opts.diraction){
					winWidth = $(window).width();
				}else{
					winWidth = -$(window).width();
				}
				$(opts.bannerName+i).css("left",winWidth);
				$(opts.bannerName+i).show();
				$(opts.bannerName+opts.currentNum).animate({left:-winWidth},opts.slideTimeTick,'easeOutExpo');
				$(opts.bannerName+opts.currentNum).hide();
				$(opts.bannerName+i).animate({left:'0'},opts.slideTimeTick,'easeOutExpo',function(){
					opts.currentNum=i;
					opts.changeCurr=false;	
				});
			},
			// startSlide : function(){
			// 	this.opts.timer=setInterval(this.timerTick(),this.opts.waitTimeTick);
			// },
			// stopSlide : function(){
			// 	clearInterval(this.opts.timer);
			// },
			// timerTick : function(){
			// 	slideBs(true);
			// },
			// preImage : function(){
			// 	slideBs(false);
			// },
			// nextImage : function(){
			// 	slideBs(true);
			// },
			toSlideBs : function(section, pre, next){
				if($(window).width()>767 && $(window).width()>$(window).height()){
					//setTimeout(showMain,2000);
					//$(section).mouseenter(function(){this.stopSlide();}).mouseleave(function(){this.startSlide();});
					
					this.startSlide();
					$(pre).click(function(){this.preImage();});
					$(next).click(function(){this.nextImage();});

					$(section).hover(
						function(){
						$(pre).animate({left:0},600);
						$(next).animate({right:-2},600);
					},function(){
						$(pre).animate({left:-54},600);
						$(next).animate({right:-54},600);	
					});
				}
			}
		}
		
		return ShowMain;
	})();
	// 单例模式
	ShowMain = function(opts){
		return this.each(function(){
			var me = $(this),
				instance = me.data("ShowMain");
			if(!instance){
				me.data("ShowMain",(instance = new ShowMain(me,opts)));
			}
			if($.type(opts) === "string"){
				return instance[opts]();
			}
		});
	};
	ShowMain.DEFAULTS = {
		selectors : {
			section : '.section2',
			pre : '.section2 .pre',
			next : '.section2 .next'
		},
		bannerNum : 3,
		bannerName : 'brief',
		diraction : true,
		waitTimeTick : 6000,
		slideTimeTick : 1000,
		timer : '',
		currentNum : 1,
		changeCurr : false
	};
	return ShowMain;
});
