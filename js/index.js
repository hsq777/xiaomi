var login=(function () {
    return{
        init:function () {
            this.event();
        },
        event:function () {
            var _this=this;
            var $login=$(".login");
            var $register=$(".register");
            $login.on('click',function () {
                location.href='login.html';
            });
            $register.on('click',function () {
                location.href='register.html';
            })

        }
    }
}());


