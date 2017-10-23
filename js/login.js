
window.onload =function(){
	
     user=ReadCookie("xuser1");
	password=ReadCookie("xpassword1");
    createCode(5);
       
			
    }
var user;
var password;


  	var na=new Array(10);//在全局定义验证码
na[0]="A";
na[1]="B";
na[2]="C";
na[3]="D";
na[4]="1";
na[5]="2";
na[6]="3";
na[7]="5";
na[8]="f";
na[9]="e";
var code= "";
function createCode(n){//参数n表示要指定的位数
  var checkCode=document.getElementById("checkCode");  
   //获取用于存放随机生成的验证码的文本框
  var m=new Array(n);
 //创建一个数组，用于存放所有候选组成验证码的字符，当然也可以用中文的
  code= "";
    for (var i=0; i<n; i++) {
//产生随机数，用来从字符串数组中选取n位字符作为验证码
    var charIndex=Math.floor(Math.random()*10);
      
    //n位字符生成验证码字符串
    code+=na[charIndex];
    
  }
  
  if (checkCode){
	 //设置或返回元素的class属性
    checkCode.className="code";
    checkCode.value=code;
  }
}

function ReadCookie(cookieName) {  
                var theCookie = "" + document.cookie;  
                var ind = theCookie.indexOf(cookieName);  
 				   if(ind==-1 || cookieName=="") return "";  
 				   var ind1 = theCookie.indexOf(';',ind);  
 				  if(ind1==-1) ind1 = theCookie.length;  

  				  return unescape(theCookie.substring(ind+cookieName.length+1,ind1));  
				}  
	
    function log(){
    		  var inputCode=document.getElementById("yzm");			
             var lo=document.getElementById("submit");
              var us=document.getElementById("user");
            var pa=document.getElementById("password");
    	     
			   
				    if(us.value==null||us.value==""){
						alert("用户名为空");
						
					}
					else if(us.value!="123"){
						alert("用户名错误");
						
					}else if(pa.value==""||pa.value==null){
						alert("密码为空");
						
					}else if(pa.value!="123"){
						
						alert("密码错误");}
					else if(inputCode.value==""||inputCode.value==null) 
 					{
 					  alert("验证码为空！");
 					  createCode(5);
					 }
 					else if(inputCode.value.toUpperCase() != code.toUpperCase()) 
 					{
 					  alert("验证码输入有误！");
 					  createCode(5);
					 }else{
						
						
						alert("登录成功 进入下一页面");
						window.open('index.html');
					
					}
				}