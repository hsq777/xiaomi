var login=(function () {
    return{
        init:function () {
            this.event();
            // this.getDay();
            // setInterval(getDay,1000);
        },
        event:function () {
            var _this=this;
            $(".login").on('click',function () {
                location.href='login.html';
            });
            $(".register").on('click',function () {
                location.href='register.html';
            });
            $(".btn-text").on('focus',function(){
                $(".search-list").css({"display":"block","border-color":"#ff6700","border-top":"1px #ff6700 solid"});
                $(".btn-text").css("border-color","#ff6700");
                $(".btn-sub").css("border-color","#ff6700");

            });
            $(".btn-text").on('blur',function(){
                $(".search-list").css("display","none");
                $(".btn-text").css("border-color","#e0e0e0");
                $(".btn-sub").css("border-color","#e0e0e0");
            });
        },
        // setDay:function (n) {
        //     if (n<10){
        //         return '0'+n;
        //     }else {
        //         return n;
        //     }
        // },
        // getDay:function () {
        //     var _this=this;
        //     var nowDate=new Date();
        //     var futureDate=new Date('2018/10/08/17:00');
        //     var ms=(futureDate.getTime()-nowDate.getTime())/1000;
        //     var sec=Math.floor(ms%60);
        //     var min=Math.floor(ms/60%60);
        //     var hour=Math.floor(ms/60/60%60);
        //     var timer=document.querySelector('.count-time');
        //     var timerH=timer.firstElementChild;
        //     var timerS=timer.
        //     console.log(timerH.innerHTML);
        //     // var timerH=$(".count-time li:first");
        //     timerH.innerHTML=_this.setDay(hour);
        //     // $(".count-time").innerHTML=_this.setDay(hour)+':'+_this.setDay(min)+':'+_this.setDay(sec);
        // }
    // function getDay() {
    //
    //     $timer.innerHTML='距离国庆还有'+setDay(day)+'天'+setDay(hour)+':'+setDay(min)+':'+setDay(sec);
    // }

    }
}());


