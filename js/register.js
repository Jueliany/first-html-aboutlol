window.onload =function(){
	         
				var sub=document.getElementById('submit');
				var email=document.getElementById('email');
				var et=document.getElementById('emailt');
				var user=document.getElementById("user");
				var password1=document.getElementById("password1");
				var password2=document.getElementById("password2");
				var usert=document.getElementById("usert");
				var p1=document.getElementById("p1");
				var p2=document.getElementById("p2");
				var reg=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
				
				sub.onclick = function(){
					
					if(user.value==null||user.value==""){
						alert("用户名为空");
						
					}else if(password1.value==null||password1.value==""){
						
						alert("密码为空");
					}else if(password1.value!=password2.value){
						alert("两次输入密码不一致");
						
					}else if(!reg.test(email.value)){
						
						alert("邮箱输入错误");
					}else{
						
						SetCookie("xuser",user.value,30);
						SetCookie("xpassword",password1.value,30);
						var user0=ReadCookie("xuser");
			            var password0=ReadCookie("xpassword");
			           
						alert("注册完成进入下一页面");
						window.open('login.html')
					}
					
				}
				
				function SetCookie(cookieName,cookieValue,nDays) {  
 				   /*当前日期*/  
   				 var today = new Date();  
   				 /*Cookie过期时间*/  
  				  var expire = new Date();  
   				 /*如果未设置nDays参数或者nDays为0，取默认值1*/  
   				 if(nDays == null || nDays == 0) nDays = 1;  
   				 /*计算Cookie过期时间*/  
   				 expire.setTime(today.getTime() + 3600000 * 24 * nDays);  
   				 /*设置Cookie值*/  
   				 document.cookie = cookieName + "=" + escape(cookieValue)  
    				    + ";expires=" + expire.toGMTString();  
				}  
				
				
				function ReadCookie(cookieName) {  
                var theCookie = "" + document.cookie;  
                var ind = theCookie.indexOf(cookieName);  
 				   if(ind==-1 || cookieName=="") return "";  
 				   var ind1 = theCookie.indexOf(';',ind);  
 				  if(ind1==-1) ind1 = theCookie.length;  

  				  return unescape(theCookie.substring(ind+cookieName.length+1,ind1));  
				}  

			}
        