// JavaScript Document
//if(!window.ScriptEngineMinorVersion()){alert("IE9---window.ScriptEngineMinorVersion()")}
function iframeFitHeight(oIframe) 
{//Iframe窗口自适应高度 兼容IE6.0 FF2.0以上 
    try 
    { 
        var oWin = oIframe.name ? window.frames[oIframe.name] : oIframe.contentWindow;  
        if(oWin.document.body.scrollHeight==0){
			pageheight=500;
		}
		else{
		   pageheight=	 oWin.document.body.scrollHeight+90;
		}
		oIframe.style.height = pageheight + "px";
    } 
    catch(e){} 
} 

/**
 * 内容区生成iframe
 */
function mIframe(id,url){
	$("#"+id).html("<br><iframe src='"+ url +"' onload='iframeFitHeight(this)' frameborder=0 style='width:100%; height:600px;'></iframe>");
}