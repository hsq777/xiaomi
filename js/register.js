var register=(function(){
	return {
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
			this.$loginBtn.onclick = function() {
		                // 发送ajax，验证用户名和密码
		                var params = {
		                    method: 'post',
		                    data: {
		                        username: _this.$inpU.value,
		                        password: _this.$psw.value
		                    },
		                    success: function(data) {
		                        data = JSON.parse(data);
		                        _this.register(data);
		                    }
		                }
		                sendAjax('http://localhost:8081/project/loarding/php/register.php', params);
		            };
			this.$inpU. addEventListener('change', function(){
		                var params = {
		                    method: 'post',
		                    data: {
		                        username: _this.$inpU.value
		                    },
		                    success: function(data) {
		                        data = JSON.parse(data);
		                        _this.checkUsername(data);
		                    }
		                }
		                sendAjax('http://localhost:8081/project/loarding/php/check_username.php', params);
		            }, false);
		},
		checkUsername: function(data) {
		            if(data.code == 200) {
		               this.$usernameInp.className = 'inp success';
		               this.$loginBtn.disabled = '';
		            } else {
		                alert(data.msg);
		                this.$usernameInp.className = 'inp error';
		                this.$loginBtn.disabled = 'true';
		            }
        },
		register: function(data) {
		            if(data.code == 200) {
		                alert('注册成功');
		            //     location.href = 'manager.html';
		            //     document.cookie = "token=" + data.data.token;
           			// document.cookie = "user-id=" + data.data.id;
		              } 
		             else {
		                alert(data.msg);
		             }
	             }
		
	}
}())