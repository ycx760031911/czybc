
function danxt(){		//单选题

	/*正确答案*/
	var RTans = new Array ("B","D","B","A","D","D","C","D","D","A");
	var j = 1;

	for(var i = 0; i < RTans.length; i++){

		var answer = document.getElementsByName("k"+j);

		/*获取用户选择的答案*/
		var SelectAns ="未选";
		for(var m=0; m<answer.length; m++)
		{
			if(answer[m].checked)
				SelectAns = answer[m].value;
		}

		/*判断正误*/
		if(SelectAns == RTans[i])
		{    document.getElementById("result"+j).innerHTML= '<img src="css/relative_item.gif"/> '+ "您的选择是："+ SelectAns + '<img src="css/02.png"/> '+ "正确答案是："+"<span style='color:red'>" +RTans[i]+"</span>";
			document.getElementById("result"+j).style.backgroundColor = "#F1F1F1";
		}
		else
		{
			document.getElementById("result"+j).innerHTML= '<img src="css/relative_item.gif"/> '+"您的选择是："+ SelectAns +'<img src="css/01.png"/>' + "正确答案是：" + "<span style='color:red'>"+RTans[i]+"</span>";
			document.getElementById("result"+j).style.backgroundColor = "#F1F1F1";


		}

		j++;

	}
}  //ShowAns1   end


function Resetdanxt(){

	for(var i = 1; ; i++){

		/*清空选项*/
		var answer = document.getElementsByName("k"+i);
		if(answer.length<=0)
		 break;
		for(var m=0; m<answer.length; m++)
		{
			answer[m].checked=false;
		}

		/*	清空正确答案*/
		document.getElementById("result"+i).innerHTML="";
		//$("#result"+i).html("");
		
	}
} //Reset1 end



//多选题
function duoxt(){			

    var da=new Array("ABC","BC","ABC","AD","ABD","ABD");
	var answer=new Array();
	var selectAns=new Array();
	var flag;
	for(var i=0 ;i<da.length; i++){
		selectAns=document.getElementsByName("DX"+(i+1));
		answer[i]="";
		for(var j=0;j<selectAns.length;j++){
			if(selectAns[j].checked)
			  answer[i] += selectAns[j].value;
		}
		if(answer[i]==da[i])
		flag='<img src="css/02.png"/>';
		else
		flag='<img src="css/01.png"/> ';
		if(answer[i]=="")
		answer[i]="未选";
		var str='<img src="css/relative_item.gif"/> '+ "您的选择是："+ answer[i] + flag + "正确答案是："+"<span style='color:red'>" +da[i]+"</span>";
		//$("#DXresult"+(i+1)).html(str);
		document.getElementById("DXresult"+(i+1)).innerHTML=str;
	}

}

function Resetduoxt(){
	for(var i = 1;; i++){
		/*清空选项*/
		var selectAns=document.getElementsByName("DX"+i);
		if(selectAns.length<=0)
		break;
		for(var j=0; j<selectAns.length; j++)
		{
			selectAns[j].checked= false;
		}
		/*	清空正确答案*/
		document.getElementById("DXresult"+i).innerHTML="";
		//$("#DXresult"+i).html("");	
	}
}


//简答题 
function wendt(){
	var evt = window.event || arguments.callee.caller.arguments[0]; ; // 获取event对象
    var obj = evt.srcElement || evt.target;
	if($(obj).parents(".test").eq(0).find(".t").val()==""){
	alert("对不起！请先回答问题！");
	}
	else
	$(obj).parents(".test").eq(0).find(".ansDiv").show();
}
function Resetwendt(){
	var evt = window.event || arguments.callee.caller.arguments[0]; ; // 获取event对象
    var obj = evt.srcElement || evt.target;
	$(obj).parents(".test").eq(0).find(".ansDiv").hide();
	$(obj).parents(".test").eq(0).find(".t").val("");
}


//判断题   start
function pandt()
{ 
/*正确答案*/
 var RTans = new Array ("错","对","错","对","对",
						 "对","错","对","错","对");
 
 var j = 1;
 for( var i = 0; i < 10; i++)
 {
      var answer = document.getElementsByName("PD"+j);
	  	 
	 /*获取用户选择的答案*/	
	  var SelectAns ="未选";
      if(answer[0].checked)
	      SelectAns = "对";
	  else if(answer[1].checked)
	      SelectAns = "错";
 

    /*判断正误*/
	  if(SelectAns == RTans[i])
	  {    document.getElementById("PDresult"+j).innerHTML= '<img src="css/relative_item.gif"/> '+ "您的选择是："+ SelectAns + '<img src="css/02.png"/> '+ "正确答案是："+"<span style='color:red'>" +RTans[i]+"</span>";	
		   document.getElementById("PDresult"+j).style.backgroundColor = "#F1F1F1"; 
	  }
	  else
	  {
	       document.getElementById("PDresult"+j).innerHTML= '<img src="css/relative_item.gif"/> '+"您的选择是："+ SelectAns +'<img src="css/01.png"/>' + "正确答案是：" + "<span style='color:red'>"+RTans[i]+"</span>";
		   document.getElementById("PDresult"+j).style.backgroundColor = "#F1F1F1"; 
	   }
	   j++;
}


}

function Resetpandt(){

var j =1;
for(var i = 0; i < 10; i++){

     /*清空选项*/
     var answer = document.getElementsByName("PD"+j);
	 for(var m=0; m<answer.length; m++)
     {
         answer[m].checked=false;
     }
	 
     /*	清空正确答案*/
    document.getElementById("PDresult"+j).innerHTML="";
	j++;
}
} //Reset1 end 




//判断题   end

