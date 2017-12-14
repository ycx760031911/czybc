// JavaScript Document
/**
 * 
 * @chenxueshuang (chenxueshuang@outlook.com)
 * @date    2016-11-28
 * @version 1.0
 */
$(document).ready(function(){
/*主导航高亮显示*/
var name = window.location.pathname.split("/");
// 回到顶部
	$('.flow').append('<div class="go-top"><img src="../images/go-top.png" alt=""></div>')
	
	// 鼠标点击其他地方，二级菜单消失
	$('body').click(function(){
		if($(this)[0].tagName=='BODY'){
			$('.second-menu').css('opacity','0');
		}
	});
	//翻页
	console.log($('.container')[1].clientHeight);
	var mHeight=parseInt($('.main').css('height'));
	var height=parseInt(window.screen.height)-parseInt($('#top').css('height'))-parseInt($('.footer').css('height'))-100;
	console.log(mHeight);
	console.log(height);
	if(mHeight<height){
		//$('.rt').addClass('rt2').removeClass('rt');
		//$('.lf').addClass('lf2').removeClass('lf');
		$('.go-top').css('display','none');
	}

	
	switch(name[name.length-2]){
	case "info" : $(".nav li a").eq(1).addClass("active");break;
	case "test" : $(".nav li a").eq(3).addClass("active");break;
	case "resource" : $(".nav li a").eq(4).addClass("active");break;
	default :
		if(name == "yyjs") 
		{
			$(".nav li a").eq(0).addClass("active");
		}else{
			$(".nav li a").eq(2).addClass("active");
			/*打印课程学习侧边目录*/
			var curFile = name[name.length-1].split(".");
			var curName = curFile[0];
			if($(window).width()>767){
				$("#left-menu").html(setleftmenu(curName));
				$(".second-menu").addClass("hide");
				$(".main").css({"left":"5%","width":"95%"});
			}else{
				$("#moblie-menu").html(mobliemenu(curName));
				moblie_menu();
			}
			setTitle();
			first_menu_show();
			first_menu_click();
			second_menu_hover();

			// 手机端目录按钮宽度
			$(".m-btn").css("width",100/$(".m-btn").length+"%");
		}
	}
	// 设置标签宽度
	$(".tab-control a").css("width",98/$(".tab-control a").length+"%");
	$(".main").css("height",$(window).height() - 151);
	// 标题进入动画
	$(".title").delay(200).animate({
	    right:'-10px',
	    opacity:'1'
	},1000, 'easeOutExpo');
	setInterval(sun,4000);
	sun2();
	
 });

function sun(){
	$(".sun").animate({
	    opacity:'0.5'
	  },2000);
	$(".sun").animate({
	    opacity:'1'
	  },2000);
}
function sun2(){
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
}

function first_menu_show(){
	for(var i=0;i<$(".left-menu li").length;i++)
	{
		$(".left-menu li").eq(i).delay(150*(i+1)).animate({
		    'margin-left':'0px',
		    opacity:'1'
		  },1000, 'easeOutExpo');
	}
}
function first_menu_click(){
	$(".first-menu").each(function(index){
			var i =index+1;
			$(this).click(function(){
				if($("#second"+i).css("opacity") !== "0"){
					$("#second"+i).animate({
						left: '210px',
						opacity:'0'
					}, 200, 'easeOutExpo');
					setTimeout(function(){$("#second"+i).addClass("hide");},200);
				}else{
					$(".second-menu").animate({
						left: '210px',
						opacity:'0'
					}, 200, 'easeOutExpo');
					setTimeout(function(){
						$(".second-menu").addClass("hide");
						$("#second"+i).removeClass("hide");
					},200);
					
					$("#second"+i).animate({
						left: '110px',
						opacity:'1'
					}, 200, 'easeOutExpo');
				}
			});

		});
}

function second_menu_hover(){
	$(".second-menu").each(function(){
			$(this).css("min-height",$(window).height() - 201);
			$(this).find("dd,.third-menu").hover(function(){
				$(this).find(".third-menu").fadeIn();
			},function(){
				$(this).find(".third-menu").fadeOut();	
				//console.log($(this)[0].tagName)
				//if($(this)[0].tagName!='DD'){
					//$(this).parent().parent().css('opacity','0');
				//}
				//if($(this).nodeName())
				//console.log($(this));
			});
			
			
		});
};


function moblie_menu(){
	$(".m-btn").each(function(index){
			var i = index+1;
			$(this).click(function(){
				if($("#level_"+i).css("display") == "none"){
					$(".level").slideUp();
					$("#level_"+i).slideDown();
					$(".m-btn").removeClass('on');
					$(this).addClass('on');
				}else{
					$(".m-btn").removeClass('on');
					$("#level_"+i).slideUp();
				}
			});
		});
}

/*内页title*/
function setTitle(){
	var first_on = ($(window).width()>=768)?$(".first-menu a.active").text():$(".m-btn").eq(0).text();
	var second_on = ($(window).width()>=768)?$(".second-menu a.active").text():$(".m-btn").eq(1).text();
	var third_on = ($(window).width()>=768)?$(".third-menu a.active").text():$(".m-btn").eq(2).text();
	var title = third_on?third_on:(second_on?second_on:first_on);
	$(".content").prepend("<div class='title'>"+title+"</div>");
};

// 回到顶部
//functionpageScroll() {window.scrollBy(0,-10);scrolldelay=setTimeout('pageScroll()',100);}

$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 800)
            $('div.go-top').show();
        else
            $('div.go-top').hide();
    });
    $('div.go-top').click(function() {
        $('.content').animate({scrollTop: 0}, 1000);
        console.log('123');
    });
});



// function setTab(name,cursel,n){
//  for(i=1;i<=n;i++){
//   var menu=document.getElementById(name+i);
//   var con=document.getElementById("content"+i);
//   try{
// 		var obj = con.getElementsByTagName("object");
// 		obj[0].style.display="none";
// 		obj[0].style.display=i==cursel?"block":"none";
// 	}
// 	catch(e){}
//   menu.className=i==cursel?"active":"";
//   con.style.display=i==cursel?"block":"none";
//  }
// }


// /*点击显示图片*/
// $(function(){
// 	$(".img-btn").click(function(){
// 		$(this).css("background","url(../images/navigate_up.png) right 30px center no-repeat");
// 		$(this).siblings(".img-btn").css("background","url(../images/navigate_down.png) right 30px center no-repeat");
// 		$(this).siblings(".img-btn").css("color","#333");
// 		$(this).next(".img-hide").siblings(".img-hide").slideUp();
// 		if($(this).next(".img-hide").css("display") == "block"){
// 			$(this).next(".img-hide").slideUp();
// 			$(this).css("background","url(../images/navigate_down.png) right 30px center no-repeat");
// 			$(this).css("color","#333");
// 		}else{
// 			$(this).next(".img-hide").slideDown();
// 			$(this).css("color","rgb(41, 170, 228)");
// 		}
// 	})






