var login=(function () {
    return{
        init:function () {
            // this.$list=document.querySelector(".row-list");
            this.event();
            // this.getData();
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
            $(".btn-r").on('click',function () {
                $(".wrapper-list").css("left","-758px");
                $(".icon-xiangyou").css("color","#e8e3e0");
                $(".icon-xiangzuo").css("color","#b0b0b0")
            });
            $(".btn-l").on('click',function () {
                $(".wrapper-list").css("left","0");
                $(".icon-xiangyou").css("color","#b0b0b0");
                $(".icon-xiangzuo").css("color","#e8e3e0")
            })
        },
        //获取数据
        // getData:function () {
        //     var _this = this;
        //     var params = {
        //         url: 'json/shop.json',
        //         success:function (data) {
        //             console.log(data);
        //             _this.insertData(data);
        //         }
        //     };
        //     sendAjax(params);
        // },
        // //将数据渲染到页面中
        // insertData:function (data) {
        //     data = data.data;
        //     var arr = [];
        //     for (var i=0;i<data.length;i++){
        //         arr.push(`<li>
        //                     <a href="javascript:;">
        //                         <img src="${data[i].img}">
        //                         <h2>${data[i].h2}</h2>
        //                         <p>${data[i].p}</p>
        //                         <span>${data[i].span}</span>
        //                     </a>
			// 		    </li>`)
        //     }
        //     this.$list.innerHTML = arr.join('');
        // }


    }
}());


