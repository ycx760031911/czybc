
$(document).ready(function(){
var name=location.search.substring(1);//这个就是页面?后面的内容
//var videoName=name.split("=")[1];
//console.log(videoName);
var videoName=parseInt(name.split("=")[1]);

var swfVersionStr = "11.6.0";
var xiSwfUrlStr = "playerProductInstall.swf";
var flashvars = {};
flashvars.autostart = 1;            //自动开始播放
flashvars.autohide = 1;             //控制条自动隐藏
flashvars.uid = "12138";            //密码
flashvars.enable_progress = 1;      //是否能拖动
flashvars.url = "./video/"+videoName+".flv";                 //视频地址，只支持加密后的flv
console.log(videoName);

var params = {};
params.quality = "high";
params.bgcolor = "#000000";
params.allowscriptaccess = "always";
params.allowfullscreen = "true";
var attributes = {};
attributes.id = "SparrowPlayer";
attributes.name = "SparrowPlayer";
attributes.align = "middle";
swfobject.embedSWF(
	"../video/p.swf", "flashContent", 
	"100%", "590", 
	swfVersionStr, xiSwfUrlStr, 
	flashvars, params, attributes);
swfobject.createCSS("#flashContent", "display:block;text-align:center;");


var videoTitle="";
	switch(videoName)
	{
		case 1:videoTitle="焊枪头部组成";break;
		case 2:videoTitle="送丝速度不均匀（焊丝直径大于通孔）";break;
		case 3:videoTitle="送丝速度不均匀（焊丝直径小于通孔）";break;
	}

$(".content h4").html(videoTitle);
//console.log(videoTitle);

});	

