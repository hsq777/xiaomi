var login=(function(){
	return{
		init:function(){
			this.$loginBtn=document.querySelector('.btn');
			this.$loginEwm=document.querySelector('.login-none');
			this.$loginClick=document.querySelector('.login-click');
			this.$ewm=document.querySelector('.login-ewm');
			this.$loginUser=document.querySelector('.login-user');
			this.$inpU=document.querySelector('.username');
			this.$psw=document.querySelector('.password');
			this.$tipError=document.querySelector('.tip-error');
			this.event();
		},
		event:function(){
			var _this=this;
			this.$loginEwm.onclick=function () {
                _this.$loginUser.style.display='none';
                _this.$ewm.style.display='block';
                _this.$loginEwm.style.color='#f56600';
                _this.$loginClick.style.color='#666';
            };
			this.$loginClick.onclick=function () {
                _this.$loginUser.style.display='block';
                _this.$ewm.style.display='none';
                _this.$loginEwm.style.color='#666';
                _this.$loginClick.style.color='#f56600';
            };
			this.$loginBtn.onclick=function(){
				//如何解决输入为空？？？？？
                var $val=JSON.stringify(_this.$inpU.value);
				if($val=""){
                    alert('请输入用户名');
                    console.log(222)
				}else {
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
                    };
                    sendAjax('http://localhost:8081/project/xiaomi/php/login.php',params);
				}
				// console.log(JSON.stringify(_this.$inpU.value));
			}
		},
		loginSuccess:function(data){
          	var _this=this;
            if(data.code == 200){
                // document.cookie = "token=" + data.data.token;
                //document.cookie = "user-id=" + data.data.id;
				location.href = 'success.html';
            }else{
                // alert(data.msg);
				_this.$tipError.style.display='block';
            }
		}
	}
}());

