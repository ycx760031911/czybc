/**
 * 
 * @chenxueshuang (chenxueshuang@outlook.com)
 * @date    2016-12-06 17:17:53
 * @version 1.0
 */
function mobliemenu(curl){
	var getnum = curl.split("_");
	var first = parseInt(getnum[0]);
	var second = parseInt(getnum[1]);
	var third = parseInt(getnum[2]);
 	var level_1='';
 	var level_2='';
 	var level_3='';
 	var mobliebtn='';
 	var first_on,second_on,third_on;
/*一级*/
	level_1+='<div class="level" id="level_1">\n';
	for(i=0;i<menu.length;i++){
		var secondlevel = menu[i].menulist;
		if(!secondlevel){
			level_1+='<a '+((i+1)===first?'class="active"':'')+' href="'+menu[i].url+'">'+menu[i].title+'</a></div>';
		}else{
			if((i+1)===first){
				level_1+='<a class="active" href="../'+(i+1)+'_0_1/'+(i+1)+'_0_1.html">'+menu[i].title+'</a>\n';
				mobliebtn += '<div class="m-btn">'+menu[i].title.split(" ")[0]+'</div>';
				if(secondlevel.length>=1){
					/*二级*/
					level_2+='<div class="level" id="level_2">\n';
					for(j=0;j<secondlevel.length;j++){
						var thirdlevel = secondlevel[j].menulist;
						if(!thirdlevel){
							if(j===(second) && i===(first-1)){
								level_2+='<a class="active" href="'+secondlevel[j].url+'">'+secondlevel[j].title+'</a>\n';
								mobliebtn += '<div class="m-btn">'+secondlevel[j].title.split(" ")[0]+'</div>\n';
							}else{
								level_2+='<a href="'+secondlevel[j].url+'">'+secondlevel[j].title+'</a>\n';
							}
						}else{
							if(j===(second) && i===(first-1)){
								level_2+='<a class="active" href="../'+(i+1)+'_'+j+'_1/'+(i+1)+'_'+j+'_1.html">'+secondlevel[j].title+'</a>\n';
								mobliebtn += '<div class="m-btn">'+secondlevel[j].title.split(" ")[0]+'</div>\n';
								if(thirdlevel.length>=1){
								/*三级*/
									level_3 +='<div class="level" id="level_3">\n';
									for(z=0;z<thirdlevel.length;z++){
										if(j===(second) && i===(first-1) && z===(third-1)){
											level_3 +='<a href="'+thirdlevel[z].url+'" class="active">'+thirdlevel[z].title+'</a>\n';
											mobliebtn += '<div class="m-btn">'+thirdlevel[z].title+'</div>\n';
										}else{
											level_3 +='<a href="'+thirdlevel[z].url+'">'+thirdlevel[z].title+'</a>\n';	
										}
									}
									level_3 +='</div>\n';	
								}
							}else{
								level_2+='<a href="../'+(i+1)+'_'+j+'_1/'+(i+1)+'_'+j+'_1.html">'+secondlevel[j].title+'</a>\n';
							}	
						}
					}
					level_2+='</div>\n';
				}
			}else{
				level_1+='<a href="../'+(i+1)+'_0_1/'+(i+1)+'_0_1.html">'+menu[i].title+'</a>\n';
			}
		}
	}
	level_1+='</div>\n';
	return (mobliebtn+level_1+level_2+level_3);
}

