var kclist="";
var i=1;
$.each(kclist_ary,function(index,item){
   flagname = testid+"flag"+item.id;
   var myflag = $.jStorage.get(flagname);
	 if(myflag==1){
		   kclist+="<li><span class=\"glyphicon glyphicon-ok\"></span><a href=\""+item.id+".html\"><span>"+i+".</span>"+cutstr(item.title,70)+"</a></li>";
	  }
	  else if(myflag==0){
		 kclist+="<li><span class=\"glyphicon glyphicon-remove\"></span><a href=\""+item.id+".html\"><span>"+i+".</span>"+cutstr(item.title,70)+"</a></li>";
	  }
	  else{
		kclist+="<li><span class=\"glyphicon\"></span><a href=\""+item.id+".html\"><span>"+i+".</span>"+cutstr(item.title,70)+"</a></li>";
	  }
	  i++;
});
// 提交之后提示框消失
$(document).ready(function(){
$('#myanswer').focus(function(){
	$('#notice').css('display','none');
	console.log('123')
})
});

function cutstr(str, len) {
	var str_length = 0;
	var str_len = 0;
	str_cut = new String();
	str_len = str.length;
	for (var i = 0; i < str_len; i++) {
		a = str.charAt(i);
		str_length++;
		if (escape(a).length > 4) {
			//中文字符的长度经编码之后大于4  
			str_length++;
		}
		str_cut = str_cut.concat(a);
		if (str_length >= len) {
			str_cut = str_cut.concat("...");
			return str_cut;
		}
	}
	//如果给定字符串小于指定长度，则返回源字符串；  
	if (str_length < len) {
		return str;
	}
}

//显示所选择内容
function setval(v){
//alert(v);
var vv="input:radio[value='"+v+"']";
//alert(vv);
$(vv).attr("checked",true); 
}

function settextval(v){
	$("#myanswer").val(v); 
}

function setduoxval(v){
	for(i=0;i<v.length;i++){
		x=v.substr(i,1);
		$("input:checkbox[value='"+x+"']").attr("checked",true);
	}
}

//单选提交
function danxtj(){
	var answer = $("input:checked");
	if (answer.length > 0) {
		if (answer.val() == right) {
			$("#notice").html("恭喜你,回答正确！");
			$("#tj").hide();
			$("#np").show();
			$(".daan").show();
			flag=1;
		}
		else {
			$("#notice").html("真遗憾，回答错误！");
			$("#tj").hide();
			$("#np").show();
			$(".daan").show();
			flag=0;
		}
		   showda();
	    $('#myModal').on('hide.bs.modal', function () {
               if(nextpage!=""){
			   document.location.href= nextpage;
			   }
			   else{
			   document.location.href= document.location.href;
			   $("#np").hide();
			   }
         }) 
		if(nextpage==""){
			 $("#np").hide();
		}
		$.jStorage.set(testid+"answer"+id,answer.val());
		$.jStorage.setTTL(testid+"answer"+id, 3000000); 
		$.jStorage.set(testid+"flag"+id,flag);
		$.jStorage.setTTL(testid+"flag"+id, 3000000); 
	}
	else {
		$("#notice").html("在提交之前，您必须完成问题！");
		flag=2;
	}
	
   $("#kclist").html(kclist);
   $("#notice").show(); 
}
/*多选提交*/
function duoxtj(){
	var flag=0;
	var answerchecked = $("input:checked");
	var answer = "";
	for (i = 0; i < answerchecked.length; i++) {
		answer += answerchecked.eq(i).val();
	}
	if (answer.length > 0) {
		if (answer == right) {
			$("#notice").html("恭喜你,回答正确！");
			$("#tj").hide();
			$("#np").show();
			$(".daan").show();
			flag=1;
		}
		else {
			$("#notice").html("真遗憾，回答错误！");
			$("#tj").hide();
			$("#np").show();
			$(".daan").show();
			flag=0;
		}
		   showda();
	    $('#myModal').on('hide.bs.modal', function () {
               if(nextpage!=""){
			   document.location.href= nextpage;
			   }
			   else{
			   document.location.href= document.location.href;
			   }
         })
		if(nextpage==""){
			 $("#np").hide();
		}
		$.jStorage.set(testid+"answer"+id,answer);
		$.jStorage.setTTL(testid+"answer"+id, 3000000); 
		$.jStorage.set(testid+"flag"+id,flag);
		$.jStorage.setTTL(testid+"flag"+id, 3000000); 
	}
	else {
		$("#notice").html("在提交之前，您必须完成问题！");

		flag=2;
	}
	
   $("#kclist").html(kclist);
   $("#notice").show();
}

//文本提交
function answertj(){
	var answer = $("#myanswer").val();
	if (answer!=="") {
		showtextda();
		$("#np").show();
		$("#tj").hide();
	    $('#myModal').on('hide.bs.modal', function () {
               if(nextpage!=""){
			   document.location.href= nextpage;
			   }
			   else{
			   document.location.href= document.location.href;
			   $("#np").hide();
			   }
         }) 
		if(nextpage==""){
			 $("#np").hide();
		}
		$.jStorage.set(testid+"answer"+id,answer.val());
		$.jStorage.setTTL(testid+"answer"+id, 3000000); 
	}
	else {
		$("#notice").html("在提交之前，您必须完成问题！");
	}	
   $("#kclist").html(kclist);
   $("#notice").show(); 
}

//页面跳转
function gotourl(){
     window.location.href=nextpage;	
}

//显示答案
function showda(){
$(".daan").show();
}

function showtextda(){
$("#daan").show();
}
//隐藏答案
function hideda(){
$(".daan").hide();
}

//显示列表
function viewkclist(){
   //$("#kclist").html(kclist);
   //$('#myModa2').modal('show'); ;
}