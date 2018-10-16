//将数据渲染到页面；
var index=(function () {
    return{
        init:function () {
            this.event();
            
        },
        event:function () {
            var _this=this;
            $(".login").on('click',function () {
                location.href='login.html';
            });
            $(".register").on('click',function () {
                location.href='register.html';
            });
            $(".shop-car").on('click',function(){
                location.href = 'shopcar.html';
            })
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
            $(".btn-r").on('click',function () {
                $(".wrapper-list").css({"left":"-758px","transition":"0.5s"});
                $(".wrapper-list .icon-xiangyou").css("color","#e8e3e0");
                $(".wrapper-list .icon-xiangzuo").css("color","#b0b0b0")
            });
            $(".btn-l").on('click',function () {
                $(".wrapper-list").css("left","0");
                $(".icon-xiangyou").css("color","#b0b0b0");
                $(".icon-xiangzuo").css("color","#e8e3e0")
            });
            //为你推荐按键（未完成）
            $(".recd-btn-r").on('click',function () {
                $(".recd-main-list").css({'left':'-1226px',"transition":"0.5s"});

                // if(){
                //
                // }
            });
            //购物车显示数量
            $('.shop-car').find('span').text((_this.getCount()));
            //鼠标滑过切换商品
            $('.machine-more').find('li').mouseover(function (){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            });
            $('.zhineng-more').find('li').mouseover(function (){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            });
            //nav隐藏下拉框
            // $(".nav-item").mouseover(function(){
            //     $(".nav-hidden").css('height',"234px");
            //     $(".xiaomi-phone").mousemove(function () {
            //         $(".nav-first").css({"display":"block","transition":"0.5s"});
            //     }).mouseout(function () {
            //         $(".nav-first").css({"display":"none","transition":"0.5s"});
            //         $(".nav-hidden").mousemove(function () {
            //             $(this).css("height", "234px");
            //             $('.nav-first').css("display",'block')
            //         }).mouseout(function () {
            //             $(this).css("height", "0");
            //             $('.nav-first').css("display",'none')
            //         })
            //     });
            //     $('.redmi').mousemove(function () {
            //         $('.nav-second').css("display",'block');
            //         $(".xiaomi-phone").mouseout(function () {
            //             // $(".nav-first").css({"display":"none","transition":"0.5s"});
            //         })
            //     }).mouseout(function () {
            //         $('.nav-second').css("display",'none');
            //         $(".nav-hidden").mousemove(function () {
            //             $(this).css("height", "234px");
            //             $('.nav-second').css("display",'block')
            //         }).mouseout(function () {
            //             $(this).css("height", "0");
            //             $('.nav-second').css("display",'none')
            //         })
            //     });
            //     $(".computer").mousemove(function () {
            //         $('.nav-third').css("display",'block')
            //     }).mouseout(function () {
            //         $('.nav-third').css("display", 'none')
            //     });
            //
            // }).mouseout(function(){
            //     $(".nav-hidden").css('height',"0");
            // });


        },
        getCount:function (){
            //从本地中取出来使用
            var shopList = localStorage.shopList || '[]',
                count = 0;
            shopList = JSON.parse(shopList);
            for (var j = 0;j<shopList.length;j++){
                // console.log(shopList[j].count)
                count+=shopList[j].count;
            }
            return count;
        }
    }
}());


