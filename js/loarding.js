var login=(function(){
	return{
		init:function(){
			this.$loginBtn=document.querySelector('#login-btn');
			this.$inpU=document.querySelector('#inputEmail3');
			this.$psw=document.querySelector('#inputPassword3');
			this.event();
		},
		event:function(){
			var _this=this;
			this.$inpU.onfocus=function () {
			    _this.$inpU.placeholder='请输入用户名';
			};
			this.$psw.onfocus=function () {
			    _this.$psw.placeholder='请输入密码';
			};
			this.$loginBtn.onclick=function(){
				//发送ajax，验证用户名和密码
				var params = {
					method: 'post',
					data:{
						username:_this.$inpU.value,
						password:_this.$psw.value
					},
					success:function(data){
						data = JSON.parse(data);
						_this.loginSuccess(data);
					}
				}
				sendAjax('http://localhost:8081/project/loarding/php/login.php',params);
			}
		},
		loginSuccess:function(data){
			if(data.code == 200){
				// document.cookie = "token=" + data.data.token;
     				//document.cookie = "user-id=" + data.data.id;
				location.href = 'manager.html';
			}else{
				alert(data.msg);
			}
		}
	}
}())

