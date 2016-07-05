function sumPU(){
	if(document.getElementById("sum").value > 200){
		document.getElementById("L-bgPU").style.display="block";
		document.getElementById("L-memo").style.display="block";
	}
}
//【扑金是什么？】隐藏显示设置
var dom=document.getElementsByClassName("L-dom")[0];
var slide=dom.getElementsByTagName("div")[0];

dom.addEventListener("click",function(){
			if(!slide.offsetHeight){
				//显示内容
				slide.style.height="50px";
				//箭头变成向下
				var htmlstr = "∨";
				document.getElementById('a1').innerHTML=htmlstr;
				//背景色变黄,黄色背景高度，字体颜色变白
				document.getElementById("p1").style.backgroundColor="#ea5504";
				document.getElementById("p1").style.height="60px";
				document.getElementById("tag1").style.color="#ffffff";
			}else{
				//隐藏内容
				slide.style.height="0";
				//箭头变回
				var htmlstr = ">";
				document.getElementById('a1').innerHTML=htmlstr;
				//标题背景，高度，字体变回
				document.getElementById("p1").style.backgroundColor="#ffffff";
				document.getElementById("p1").style.height="5px";
				document.getElementById("tag1").style.color="black";
				document.getElementById("a1").style.color="#d2d2d2";
			}
		}
);
//【如何借款？】隐藏显示设置
var dom2=document.getElementsByClassName("L-dom")[1];
var slide2=dom2.getElementsByTagName("div")[0];
dom2.addEventListener("click",function(){

	if(!parseInt(slide2.style.height)){
		//显示内容
		slide2.style.height="50px";
		//箭头变成向下
		var htmlstr = "∨";
		document.getElementById('a2').innerHTML=htmlstr;
		//背景色变黄,黄色背景高度，字体颜色变白
		document.getElementById("p2").style.backgroundColor="#ea5504";
		document.getElementById("p2").style.height="60px";
		document.getElementById("tag2").style.color="#ffffff";
	}else{
		//隐藏内容

		slide2.style.height="0";
		//箭头变回
		var htmlstr = ">";
		document.getElementById('a2').innerHTML=htmlstr;
		//标题背景，高度，字体变回
		document.getElementById("p2").style.backgroundColor="#ffffff";
		document.getElementById("p2").style.height="5px";
		document.getElementById("tag2").style.color="black";
		document.getElementById("a2").style.color="#d2d2d2";
	}
});
//【如何还款?】隐藏显示设置
var dom3=document.getElementsByClassName("L-dom")[2];
var slide3=dom3.getElementsByTagName("div")[0];
dom3.addEventListener("click",function(){
	if(!parseInt(slide3.style.height)){
		//显示内容
		slide3.style.height="50px";
		//箭头变成向下
		var htmlstr = "∨";
		document.getElementById('a3').innerHTML=htmlstr;
		//背景色变黄,黄色背景高度，字体颜色变白
		document.getElementById("p3").style.backgroundColor="#ea5504";
		document.getElementById("p3").style.height="60px";
		document.getElementById("tag3").style.color="#ffffff";
	}else{
		//隐藏内容
		slide3.style.height="0";
		//箭头变回
		var htmlstr = ">";
		document.getElementById('a3').innerHTML=htmlstr;
		//标题背景，高度，字体变回
		document.getElementById("p3").style.backgroundColor="#ffffff";
		document.getElementById("p3").style.height="5px";
		document.getElementById("tag3").style.color="black";
		document.getElementById("a3").style.color="#d2d2d2";
	}
});
//【如何分期消费】隐藏显示设置
var dom4=document.getElementsByClassName("L-dom")[3];
var slide4=dom4.getElementsByTagName("div")[0];
dom4.addEventListener("click",function(){
	if(!parseInt(slide4.style.height)){
		//显示内容
		slide4.style.height="50px";
		//箭头变成向下
		var htmlstr = "∨";
		document.getElementById('a4').innerHTML=htmlstr;
		//背景色变黄,黄色背景高度，字体颜色变白
		document.getElementById("p4").style.backgroundColor="#ea5504";
		document.getElementById("p4").style.height="60px";
		document.getElementById("tag4").style.color="#ffffff";
	}else{
		//隐藏内容
		slide4.style.height="0";
		//箭头变回
		var htmlstr = ">";
		document.getElementById('a4').innerHTML=htmlstr;
		//标题背景，高度，字体变回
		document.getElementById("p4").style.backgroundColor="#ffffff";
		document.getElementById("p4").style.height="5px";
		document.getElementById("tag4").style.color="black";
		document.getElementById("a4").style.color="#d2d2d2";
	}
});