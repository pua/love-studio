/**-------------------------------------------------------------------------------------------------------------------/
*	@ GuanzhiEdu.JS 
*	@ Date 2010-06-11
*	@ Author Wesly
*	@ PowerBy http://www.guanzhi.cn/
*	@ Version 1.0
*-------------------------------------------------------------------------------------------------------------------*/

function gzEdu(){}

gzEdu.v_tpre=["清痘系列产品推广网站——","坦克打飞机游戏——","光大银行品牌推广网站——","网页重构——"];
gzEdu.videos=[
				["XMTg2ODI5NDA4","XMTg3MTAwOTM2","XMTg3MzAyNjI0","XMTg3NzIwODQ0","XMTg3NzE5NDY4","XMTg3ODM2NDQ0","XMTg4MTAxNzgw","XMTg4MzI0NTA0","XMTg5MDMwODE2"],
				["0/sid/XMTk0NjU3NDky","1/sid/XMTkzNTUxNTQw","2/sid/XMTkzOTQ1MjAw","3/sid/XMTkzOTY3ODQw","4/sid/XMTkzOTYzMTA4","5/sid/XMTkzOTk4NzQ4","6/sid/XMTk0MDA2OTI0","7/sid/XMTk0MDE0MjQw","8/sid/XMTk0MDE2MzQ0","9/sid/XMTk0NTkwMzUy","10/sid/XMTk0NTgzODMy"],
				["XMTk2ODc3Mzky","XMTk2NjE3MTA4","XMTk2NzEzODQ4","XMTk2NjQyNTQ4","XMTk2NzIzMDA4","XMTk2NzIyNzMy"],
				["XMTk3NzczNjQ4","XMTk3ODE2OTM2","XMTk3ODA3OTcy","XMTk3NzY2OTEy","XMTk3ODA3NjI4","XMTk5Mjc3OTgw","XMTk5MjM0OTQ4","XMTk5MjQ4NTAw","XMTk5MjQ1OTIw"],
			
			];
gzEdu.v_titls=[
				["第01讲_网站创意策略","第02讲_导航设计","第03讲_ KEY VISUAL设计","第04讲_ K V设计-对话框细节","第05讲_背景设计","第06讲_导航与背景调整","第07讲_产品与视频设计","第08讲_快速通道设计","第09讲_网站全局调整与动画"],
				["第01讲_游戏的需求及界面介绍","第02讲_游戏的程序文件及重难点分析","第03讲_匀速直线运动和定时器","第04、05讲_随机数的概念和应用与碰撞测","第06讲_事件模型","第07讲_文档类编写（一）","第08讲_文档类的编写（二）","第09讲_文档类编写（三）","第10讲_坦克类的制作","第11讲_敌机类的制作","第12讲_子弹类的制作和预告"],
				["第01讲_设计思路分析","第02讲_大框架的设计","第03讲_主视觉设计","第04讲_主视觉设计2","第05讲_全面突破调整","第06讲_细节设计调整"],
				["第一章_战前分析","第01讲_化腐朽为神奇","第02讲_图片精灵","第03讲_给文字整容","第04讲_给链接化妆","第05讲_圆角与阴影","第06讲_导航菜单","第07讲_不用table 的表格","第08讲_让层飘起来"],					
			
			];
gzEdu.videoBase=["videodetail.html","videodetail_2.html","videodetail_3.html","videodetail_4.html"];

gzEdu.prototype={
	indexLoadimg:function(){
		var $imgArr=["/images/font.gif","/images/icon.gif","/images/line.jpg","/images/number.gif","/images/ranway.gif"];
		this.loadImg.apply($imgArr);
	},
	writeIndexSwf001:function(){
		swfobject.embedSWF("/top.swf", "indexswf_01", "100%", "309", "9.0.0", null, null, {wmode:'transparent'});
	},
	writeIndexSwf002:function(){
		swfobject.embedSWF("/prenext.swf", "indexswf_02", "100%", "136", "9.0.0", null, null, {wmode:'transparent'});
	},
	writeIndexSwf003:function(){
		swfobject.embedSWF("/flash/line.swf", "indexswf_03", "100%", "170", "9.0.0", null, null, {wmode:'transparent'});
	},
	writeIndexSwf004:function(){
		swfobject.embedSWF("/footerlink.swf", "indexswf_04", "100%", "106", "9.0.0", null, null, {wmode:'transparent'});
	},
	writeIndexSwf005:function(){
		swfobject.embedSWF("/video.swf", "indexswf_05", "307", "215", "9.0.0", {path:"video/1.flv&jpgPath=images/01.jpg"}, null, {wmode:'transparent'});
	},
	writeTeacherListSwf001:function(){
		var flashvars={xmlsrc:"/data/column2.xml"};
		var attribute={};
		var params ={allowFullScreen:'true',allowScriptAccess:'always',quality:'high',wmode:'Transparent'}
		swfobject.embedSWF("/column2.swf", "subMainSwf", "100%", "100%", "9.0.0","/flash/expressInstall.swf", flashvars, params, attribute);
	},
	writeProjectsSwf:function(){
		var flashvars={xmlsrc:"/data/column7.xml"};
		var attribute={	};
		var params ={allowFullScreen:'true',allowScriptAccess:'always',quality:'high',wmode:'Transparent'}
		swfobject.embedSWF("/column2.swf", "subMainSwf", "100%", "100%", "9.0.0","/flash/expressInstall.swf", flashvars, params, attribute);
	},
	writeCourseSwf:function(){
		var flashvars={xmlsrc:"/data/column7.xml"};
		var attribute={	};
		var params ={allowFullScreen:'true',allowScriptAccess:'always',quality:'high',wmode:'Transparent'}
		swfobject.embedSWF("/column2.swf", "subMainSwf", "100%", "100%", "9.0.0","/flash/expressInstall.swf", flashvars, params, attribute);
	},
	writeAnnonce001:function(){
		var flashvars={xmlsrc:"/data/column4.xml"};
		var attribute={	};
		var params ={allowFullScreen:'true',allowScriptAccess:'always',quality:'high',wmode:'Transparent'}
		swfobject.embedSWF("/column2.swf", "subMainSwf", "100%", "100%", "9.0.0","/flash/expressInstall.swf", flashvars, params, attribute);
	},
	writeAnnonce002:function(){
		var flashvars={xmlsrc:"/data/column5.xml"};
		var attribute={	};
		var params ={allowFullScreen:'true',allowScriptAccess:'always',quality:'high',wmode:'Transparent'}
		swfobject.embedSWF("/column2.swf", "subMainSwf", "100%", "100%", "9.0.0","/flash/expressInstall.swf", flashvars, params, attribute);
	},
	writeAnnonce003:function(){
		var flashvars={xmlsrc:"/data/column6.xml"};
		var attribute={	align:'middle'};
		var params ={allowFullScreen:'true',allowScriptAccess:'always',quality:'high',wmode:'Transparent'}
		swfobject.embedSWF("/column2.swf", "subMainSwf", "100%", "100%", "9.0.0","/flash/expressInstall.swf", flashvars, params, attribute);
	},
	print_top:function(){
	},
	locationQQ:function(qq){
		window.open("http://wpa.qq.com/msgrd?V=1&Uin="+qq,"_blank");
 	},
	video_linkbar:function(ulname,size,$inline_pre,currObj){
		var $currStr=$(currObj).html();
 		for($i=0; $i< size; $i++){
			var $tmpHtml=$("ul."+ulname+" li:eq("+$i+")").html();
			if($currStr != $tmpHtml){
				$("ul."+ulname+" li:eq("+$i+")").removeClass();
				$("ul."+ulname+" li:eq("+$i+")").addClass("off");
				$("#"+$inline_pre+$i).hide();
			}else{
				$(currObj).removeClass();
				$(currObj).addClass("on");
				$("#"+$inline_pre+$i).show();
			}
		}
	},
	normal_linkbar:function(count,curr,tpre,type){
		if(type == "one"){
			for(var $i=0; $i< count; $i++){
				if ($i == curr){
					$("#"+tpre+curr).fadeIn("slow");
				}else{
					$("#"+tpre+$i).fadeOut();
				}
			}
		}else if(type == "all"){
			for(var $i=0; $i< count; $i++){
				$("#"+tpre+$i).fadeIn("slow");
			}
		}
	},
	linkus_swf_02:function(){
		this.msg.call(this,"<iframe width=\"600\" height=\"265\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"http://ditu.google.com/maps/ms?hl=zh-CN&amp;ie=UTF8&amp;msa=0&amp;msid=111523857040370219581.0004913c7aa69da5a3e1e&amp;brcurrent=3,0x35f1aa4d8ba1a119:0x6445662450a2c4b6,0,0x35f1abee23736947:0xd7bb8b3026d0813a%3B5,0,0&amp;ll=39.971332,116.422119&amp;spn=0.069724,0.20565&amp;z=12&amp;output=embed\"></iframe><br /><small>在较大的地图中查看<a href=\"http://ditu.google.com/maps/ms?hl=zh-CN&amp;ie=UTF8&amp;msa=0&amp;msid=111523857040370219581.0004913c7aa69da5a3e1e&amp;brcurrent=3,0x35f1aa4d8ba1a119:0x6445662450a2c4b6,0,0x35f1abee23736947:0xd7bb8b3026d0813a%3B5,0,0&amp;ll=39.971332,116.422119&amp;spn=0.069724,0.20565&amp;z=12&amp;source=embed\">北京观止网络技术有限公司</a></small>");
	},
	getParam:function(){ //get param
		var url = location.search; 
 		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i ++) {
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
			}
		}
 		return theRequest;
	},
	getfileName:function(){ //get fileName
		var fileArr=(window.location.pathname).split("/");
 		return fileArr[fileArr.length -1];
	},
	writeVideoForparam:function(){
		
		var numberReg=/^(\d)+$/;
		var vNumber=this.getParam.call(this,null)["v"]; //param
 		var fileName=this.getfileName.call(this,null); //filename
		var fileName_base=$.array.indexOf(fileName,gzEdu.videoBase);
		 
 		if(fileName_base == -1){ 
			alert("提示：文件名错误！");
			window.history.go(-1);
		}
		 
		if(numberReg.exec(parseInt(vNumber)) == false){ //正常参数
			alert("提示：参数错误！");
 			window.history.go(-1);
		}
 		 
   		if(vNumber < 0 || vNumber > (gzEdu.videos[fileName_base].length) ){ //制定范围
			alert("提示：超过范围！");
			window.history.go(-1);
		}

		var reallyParam=gzEdu.videos[fileName_base][vNumber];
		if(fileName_base == 1){
			var conts="<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'  width='400' height='301'  align='middle'>";
				conts+="<param name='allowScriptAccess' value='sameDomain' />";
				conts+="<param name='movie' value='http://player.youku.com/player.php/Type/Folder/Fid/4845449/Ob/1/Pt/"+reallyParam+"/v.swf' />";
				conts+="<param name='quality' value='high' />";
				conts+="<param name='wmode' value='Opaque' />";
				conts+="<embed";
				conts+=" src='http://player.youku.com/player.php/Type/Folder/Fid/4845449/Ob/1/Pt/"+reallyParam+"/v.swf'";
				conts+=" width=400";
				conts+=" height=301";
				conts+=" quality='high'";
				conts+=" swLiveConnect=true";
				conts+=" align='middle'";
				conts+=" allowScriptAccess='sameDomain'";
				conts+=" type='application/x-shockwave-flash'";
				conts+=" pluginspage='http://www.macromedia.com/go/getflashplayer' />";
			conts+="</object>";
 		}else{
 			var conts="<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0' width='400' height='301'  align='middle'>";
				conts+="<param name=\"allowScriptAccess\" value='sameDomain' />";
				conts+="<param name='movie' value='http://player.youku.com/player.php/sid/"+reallyParam+"/v.swf' />";
				conts+="<param name='quality' value='high' />";
				conts+="<param name='wmode' value='Opaque' />";
				conts+="<embed ";
				conts+=" src='http://player.youku.com/player.php/sid/"+reallyParam+"/v.swf'";
				conts+=" width='400'";
				conts+=" height='301'";
				conts+=" quality='high'";
				conts+=" swLiveConnect=true";
				conts+=" align='middle'";
				conts+=" allowScriptAccess='sameDomain'";
				conts+=" type='application/x-shockwave-flash'";
				conts+=" pluginspage='http://www.macromedia.com/go/getflashplayer' />";
			conts+="</object>";
		}
		
 		//print
		var old=document.title;
		var addStr="视频："+gzEdu.v_tpre[fileName_base]+gzEdu.v_titls[fileName_base][vNumber];
		
		$("#videoTitls").html(addStr);
		document.title=addStr +" - "+ old;
  		this.msg.call(this,conts);
		
		
	},
	writev_list:function(){ //video_list
		
		try{
			var vNumber=this.getParam.call(this,null)["v"]; //param
			var fileName=this.getfileName.call(this,null); //filename
			 
			var fileName_base=$.array.indexOf(fileName,gzEdu.videoBase);
			var videolist_str="";
			for(var $i=0; $i<gzEdu.videos[fileName_base].length; $i++){
				var videolist_title=gzEdu.v_titls[fileName_base][$i];
				var v_class=($i == vNumber) ? "video_hovera" : "video_defauta";
				var url="/"+fileName+"?v="+$i;
				videolist_str +="<a href='"+url+"' class='"+v_class+"' title='"+videolist_title+"'>"+parseInt($i+1)+"</a>";
			}
			$("#v_titls").html(videolist_str);
		}catch(e){
			$("#v_titls").html("<img src='/images/loader.gif' align='middle' alt='' /> 正在加载播放列表...");
		}
 	},
	loadImg:function(obj){
		var imgArr=new Array(); 
		if(typeof(arguments[0])=="string")
		imgArr[0]=arguments[0]; 
		if(typeof(arguments[0])=="object"){
			for(var i=0;i<arguments[0].length;i++){   
			  imgArr[i]=arguments[0][i]   
			}  
		}
		var img=new Array();
		 for(var i=0;i<imgArr.length;i++){   
			img[i]=new Image();   
			img[i].src=imgArr[i];   
		 } 
	},
	Doanimate:function(obj){
		var $randomNumber=Math.floor(Math.random()*1000);
		if($randomNumber % 2 ==0){
			$(obj).animate({left:'+=50'},500);
			$(obj).animate({left:'+=-50'},500);
			$(obj).animate({left:'+=40'},600);
			$(obj).animate({left:'+=-40'},600);
			$(obj).animate({left:'+=30'},700);
			$(obj).animate({left:'+=-30'},700);
			$(obj).animate({left:'+=20'},800);
			$(obj).animate({left:'+=-20'},800);
			$(obj).animate({left:'+=10'},900);
			$(obj).animate({left:'+=-10'},900);
		}else if($randomNumber % 3 ==0){
			$(obj).animate({top:'-=50'},500);
			$(obj).animate({top:'+=50'},500);
			$(obj).animate({top:'-=40'},600);
			$(obj).animate({top:'+=40'},600);
			$(obj).animate({top:'-=35'},700);
			$(obj).animate({top:'+=35'},700);
			$(obj).animate({top:'-=20'},800);
			$(obj).animate({top:'+=20'},800);
			$(obj).animate({top:'-=10'},900);
			$(obj).animate({top:'+=10'},900);
			$(obj).animate({top:'-=5'},940);
			$(obj).animate({top:'+=5'},940);
			$(obj).animate({top:'-=5'},980);
		}
	},
	getaDate:function(){
		var timer0 = null;
		var week = new Array( "日", "一", "二", "三", "四", "五", "六" );
		   dt = new Date();
		   var weekday = week[dt.getDay()];
		   var tp = document.getElementById("timePlace");
		   result = dt.toLocaleDateString()+"，星期"+weekday+"，";
		  this.msg.call(this,result);
	},
	msg:function(str){
		document.writeln(str);
	}
}

var $gzEdu=new gzEdu();
