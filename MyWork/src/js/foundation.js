//活动基金
var conn=[];
conn=$(".L-foundation").find("p.result");
$.each(conn,function(n,value){
		var con =conn[n].innerHTML;
		if(con=='放款中'){
			$(this).css('color','#ea5504');
		}
		else if(con=='已放款'){
			$(this).css('color','#58bef5');
			$(this).before("<p>放款金额：<span>¥ 500</span></p>");
		}
});
//创业基金
var conn2=[];
conn2=$(".L-workfoundation").find("p.result");
$.each(conn2,function(n,value){
		var con2 =conn2[n].innerHTML;
		if(con2=='放款中'){
			$(this).css('color','#ea5504');
		}
		else if(con2=='已放款'){
			$(this).css('color','#58bef5');
			$(this).before("<p>放款金额：<span>¥ 500</span></p>");
		}
});
//初始化
document.getElementById("L-foundation").style.display = 'block' ;
document.getElementById("L-workfoundation").style.display = 'none' ;
function change_div(id){
  if (id == 'cyjijin' )
  {
     document.getElementById("L-foundation").style.display = 'none' ;
     document.getElementById("L-workfoundation").style.display = 'block' ;
  }
  else
  {
     document.getElementById("L-foundation").style.display = 'block' ;
     document.getElementById("L-workfoundation").style.display = 'none' ;
  }
}
//按钮选择
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
btn1.addEventListener("click",toHuo);
btn2.addEventListener("click",toWork);
function toHuo(){
	document.getElementById("btn1").style.color="#FFFFFF";
	document.getElementById("btn2").style.color="#ea5504";
	document.getElementById("btn2").style.border="1px solid #FFFFFF";
	document.getElementById("btn1").style.border="1px solid #ea5504";
	document.getElementById("btn2").style.backgroundColor="#FFFFFF";
	document.getElementById("btn1").style.backgroundColor="#ea5504";
}
function toWork(){
	document.getElementById("btn2").style.color="#FFFFFF";
	document.getElementById("btn1").style.color="#ea5504";
	document.getElementById("btn1").style.border="1px solid #FFFFFF";
	document.getElementById("btn2").style.border="1px solid #ea5504";
	document.getElementById("btn1").style.backgroundColor="#FFFFFF";
	document.getElementById("btn2").style.backgroundColor="#ea5504";
}