// JavaScript Document

$(document).ready(function(){
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
})

//pc、平板top
var pctop="<div class='row hidden-xs'>";
pctop+="<nav class='navbar navbar-inverse navbar-fixed-top' role='navigation'>";
pctop+="<div id='logo'><img src='images/logo.png'/></div>";
pctop+="<ul class='nav navbar-nav navyj'>";
pctop+="<li><a href='index.html'><img src='images/shou_b.png' id='navtp1'/><br />首页</a></li>";
pctop+="<li><a href='kcjs_kcjj/kcjj.html'><img src='images/kcjs_b.png' /><br />课程介绍</a> </li>";
pctop+="<li><a href='kcxx.html'><img src='images/kcxx_b.png' /><br />课程学习</a></li>";
pctop+="<li><a href='xxhd/ztfa.html'><img src='images/xxhd_b.png' /><br />学习活动</a></li>";
pctop+="<li><a href='xxpj.html'><img src='images/xxpj_b.png' /><br />学习评价</a></li>";
pctop+="<li><a href='zcfw.html'><img src='images/zcfw_b.png' /><br />支持服务</a></li>";
pctop+="<li><a href='kczy.html'><img src='images/kczy_b.png' /><br />课程资源</a></li>";
pctop+="</ul></nav></div>";
document.write(pctop);

//pc、平板bottom
var pcbotm="<div class='row hidden-xs bottom navbar-fixed-bottom'><p>版权所有：北京师范大学网络教育</p></div>";
document.write(pcbotm);

//手机top1
var sjtop="<div class='row visible-xs navbar-fixed-top sjtop'><p>幼儿文学经典作品赏析与教学</p></div>";
document.write(sjtop);

//手机bottom
var sjbotm="<div class='visible-xs navbar-fixed-bottom sjbottom'><div class='sjyjnav'><a href='index.html'><img src='images/shou_b.png' /><br />首页</a></div>";
sjbotm+="<div class='sjyjnav'><a href='kcjs_kcjj/kcjj.html'><img src='images/kcjs_b.png' /><br />课程介绍</a></div>";
sjbotm+="<div class='sjyjnav'><a href='kcxx.html'><img src='images/kcxx_b.png' /><br />课程学习</a></div>";
sjbotm+="<div class='sjyjnav'><a href='xxhd/ztfa.html'><img src='images/xxhd_b.png' /><br />学习活动</a></div>";
sjbotm+="<div class='sjyjnav'><a href='xxpj.html'><img src='images/xxpj_b.png' /><br />学习评价</a></div>";
sjbotm+="<div class='sjyjnav'><a href='zcfw.html'><img src='images/zcfw_b.png' /><br />支持服务</a></div>";
sjbotm+="<div class='sjyjnav'><a href='kczy.html'><img src='images/kczy_b.png' /><br />课程资源</a></div></div>";
document.write(sjbotm);