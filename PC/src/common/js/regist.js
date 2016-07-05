///上传注册头像/
function uploadIcon(){
	if(typeof FileReader==='undefined'){ 
		alert("抱歉，你的浏览器不支持预览图像");
	}
	else{
		var file=document.getElementById("file").files[0];
		var fn=document.getElementById("filename");
		var icon=document.getElementById("icon");
		if(!/image\/\w+/.test(file.type)){ 
	    	alert("文件必须为图片！"); 
	    }
		else{
			fn.innerText=file.name;
			var fr=new FileReader();
			fr.readAsDataURL(file);
			fr.onload=function(){
				icon.src=this.result;
			}
		}
	}	
}

//显示提示信息
