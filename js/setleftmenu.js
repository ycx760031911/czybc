/**
 * 
 * @chenxueshuang (chenxueshuang@outlook.com)
 * @date    2016-11-30
 * @version 1.0
 */
 var menu = menulist.menulist;
 function setleftmenu(curl){
 	var getnum = curl.split("_");
	var first = parseInt(getnum[0]);
	var second = parseInt(getnum[1]);
	var third = parseInt(getnum[2]);
	var first_title=new Array("项目一","项目二","项目三","项目四","项目五","项目六","项目七","附录一","附录二");
 	var leftmenu='';
 	/*一级*/
	for(i=0;i<menu.length;i++){
		var secondlevel = menu[i].menulist;
		if(!secondlevel){
			leftmenu+='<li>\n';
			leftmenu+='<a class="first-menu '+((i+1)===first?'active':'')+'" href="'+menu[i].url+'" title="'+menu[i].title+'">'+first_title[i]+'</a></li>';
		}else{
			leftmenu+='<li>\n';
			leftmenu+='<a class="first-menu '+((i+1)===first?'active':'')+'" href="#second'+(i+1)+'" title="'+menu[i].title+'">'+first_title[i]+'</a>\n';
			leftmenu+='<dl class="second-menu" id="second'+(i+1)+'">\n';
			
			if(secondlevel.length>=1){
				/*二级*/
				for(j=0;j<secondlevel.length;j++){
					var thirdlevel = secondlevel[j].menulist;
					if(!thirdlevel){
						leftmenu+='<dd><a '+((j===(second) && i===(first-1))?'class="active"':'')+' href="'+secondlevel[j].url+'" title="'+secondlevel[j].title+'">'+secondlevel[j].title+'</a></dd>';
					}else{
						leftmenu+='<dd><a '+((j===(second) && i===(first-1))?'class="active"':'')+' title="'+secondlevel[j].title+'">'+secondlevel[j].title+'</a><div class="third-menu">';
						
						if(thirdlevel.length>=1){
							/*三级*/
							for(z=0;z<thirdlevel.length;z++){
								leftmenu +='<a href="'+thirdlevel[z].url+'" '+((j===(second) && i===(first-1) && z===(third-1))?'class="active"':'')+' title="'+thirdlevel[z].title+'">'+thirdlevel[z].title+'</a>';
							}	
						}
						leftmenu+='</div></dd>';
					}
				}
			}
		}
		leftmenu+='</dl></dd>';
	}
	//console.log(leftmenu);
	return leftmenu;
	
	
 }