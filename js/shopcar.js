//获取商品数据
function getShopList() {
    var params = {
        url: 'json/shop.json',
        success: function (data) {
            shopList = data.data;
            // console.log(shopList);
            getData();
        }
    };
    sendAjax(params);
};
//获取购物车数据
function getData() {
    carShopList = JSON.parse(localStorage.shopList || '[]');
    // console.log(carShopList);
    insertData(carShopList);
};
//把购物车添加到页面中
function insertData(data) {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        //通过名字获取商品
        var shop;
        for (var j = 0; j < shopList.length; j++) {
            // console.log(shopList[j]);
            if (shopList[j].name == data[i].name) {
                shop = shopList[j];
                console.log(shopList[j]);
                break;
            }
        }
        // console.log(shop);
        arr.push(
            `<div class="order_content">
                <ul class="order_lists">
                    <li class="list_chk">
                        <span class="border_icon borser_origin btn_all son_check">
                            <i class="iconfont icon-dagou1"></i>
                        </span>
                    </li>
                    <li class="list_img">
                        <div class="list_img">
                            <a href="detail.html">
                                <img src="${shop.img}" alt=""> 
                            </a>
                        </div>
                    </li>
                    <li class="list_con text_name"> 
                        <div class="list_text">
                            <a href="detail.html">${shop.name}</a> 
                        </div>
                    </li>
                    <li class="list_price">
                        <span class="price">${shop.price}</span>
                        <span>元</span>
                    </li>
                    <!--数量-->
                    <li class="list_amount">
                        <div class="amount_box">
                            <a href="javascript:;" class="reduce reSty">-</a>
                            <input type="text" value="${data[i].count}" class="sum">
                            <a href="javascript:;" class="plus">+</a>
                        </div>
                    </li>
                    <!--小计-->
                    <li class="list_sum">
                        <span class="sum_price">${shop.price*data[i].count}</span>
                        <span>元</span>
                    </li>
                    <!--操作-->
                    <li class="list_op">
                        <a href="javascript:;" class="delBtn">
                            <i class="iconfont icon-guanbi"></i>
                        </a>
                    </li>
                </ul>
            </div>`
            )
            
    }
    var $carMain = document.querySelector('.cartBox');
    $carMain.innerHTML = arr.join('');
    var $total = document.querySelector('.bar-wrapper');
    $total.innerHTML = '<div class="section_left"><a href="javascript:;" class="backShop">继续购物</a><span class="cart_total">共<i class="carttotalNum"></i>件商品，已选择<i class="selTotalNum"></i>件</span></div><a href="javascript:;" class="btn_primary">去结算</a><span class="total_price">合计：<em class="cartTotalPrice"></em>元</span>'
    //按钮功能
    $(document).ready(function(){
        var $chooseAll = $('.btn_border');//全选按钮
        var $sonCheck = $('.son_check');//子按钮
        var $btnAll = $('.btn_all');//所有按钮
        var $right = $('.icon-dagou1');//打勾iconfont
        var $totalSum = $('.sum').val();//获取件数
        var $price = $('.price').html()//获取单价
        var $totalPrice = $('.sum_price').html()//获取小计
        var $carttotalNum = $('.carttotalNum');
        var $reduce = $('.reduce');//获取减号
        var $plus = $('.plus');//获取加号
        //点击全选框子选框一起变化（默认是选中的）
        //统计商品件数和总价格
        function totalAll(){
            //共几件商品
            var sum=0;
            $.each($('.sum'),function(index,item){
                sum+= parseInt($.trim($(item).val()));
            })
            $('.carttotalNum').text(sum);
            var sum_check = 0;
            //已添加几件商品
            $.each($('.sum'),function(index,item){
                if($(this).parents('.order_lists').find('.list_chk').find('span').is('.border_icon')){
                    sum_check+= parseInt($.trim($(item).val()));
                }
            })
            $('.selTotalNum').text(sum_check);
            //总价格
            var total_sum = 0;
            $.each($('.sum_price'),function(index,item){
                if($(this).parents('.order_lists').find('.list_chk').find('span').is('.border_icon')){
                    total_sum+= parseInt($.trim($(item).text()))
                }
            })
                $('.cartTotalPrice').text(total_sum);
        }
        $chooseAll.on('click',function(){
            if($(this).is('.border_icon')){
                $btnAll.removeClass('border_icon');
                //
                $(this).mouseover(function(){
                    $right.css('color','#666');
                }).mouseout(function(){
                    $right.css('color','#fff');
                })
                //统计商品件数总价
                totalAll();
            }else{
                $btnAll.addClass('border_icon');
                $right.css('color','#fff');
                $(this).mouseover(function(){
                    $right.css('color','#fff');
                }).mouseout(function(){
                    $right.css('color','#fff');
                })
                //统计商品件数总价
                totalAll();
            }  
        })
        $sonCheck.click(function(){
            if($(this).is('.border_icon')){
                $(this).removeClass('border_icon');
                $(this).mouseover(function(){
                    $right.css('color','#666');
                }).mouseout(function(){
                    $right.css('color','#fff');
                })
                totalAll();
                if($sonCheck.is('.border_icon')==false){
                    if($chooseAll.is('.border_icon')){
                        $chooseAll.removeClass('border_icon');
                    }
                }
            }else{
                if ($(this).is('.border_icon') == false) {
                    $(this).addClass('border_icon');
                    $right.css('color','#fff');
                    $(this).mouseover(function(){
                        $right.css('color','#fff');
                    }).mouseout(function(){
                        $right.css('color','#fff');
                    })
                    totalAll();
                    //选中子商品总计要显示
                    totalMoney();
                    //添加全选框????
                    var num=0;
                    $.each($sonCheck,function(index){
                        if($(this).is('.border_icon')){
                            num++;
                            if(num==$sonCheck.length){
                                if($chooseAll.is('.border_icon'==false)){
                                    $chooseAll.addClass('border_icon');
                                }
                            }
                        }
                    
                    })
                }
                
            }
        })
        //当全选框被选中时统计价格商品件数
        $plus.click(function(){
            $totalSum = Number($(this).parents('.amount_box').find('.sum').val())+1;
            $(this).parents('.amount_box').find('.sum').val($totalSum);
            $price = $(this).parents('.order_lists').find('.list_price').find('.price').text();
            $totalPrice = ($price-0)*$totalSum;//计算价格
            $(this).parents('.order_lists').find('.list_sum').find('.sum_price').html($totalPrice)//小计
            totalAll();
        })
        $reduce.click(function(){
            if($(this).parents('.amount_box').find('.sum').val() > 1){
                $totalSum = Number($(this).parents('.amount_box').find('.sum').val())-1;
                $(this).parents('.amount_box').find('.sum').val($totalSum);
                $price = $(this).parents('.order_lists').find('.list_price').find('.price').text();
                $totalPrice = ($price-0)*$totalSum;//计算价格
                $(this).parents('.order_lists').find('.list_sum').find('.sum_price').html($totalPrice)//小计
                totalAll();
            }
        })
        //默认有件数和总价
        totalAll();
        //删除商品
        var $order_lists = null;
        var $order_content = '';
        //点击删除键时
        $('.delBtn').click(function () {
            $order_lists = $(this).parents('.order_lists');//要删除的那一栏的ul
            $order_content = $order_lists.parents('.order_content');//ul的上一级
            $('.model_bg').fadeIn(300);
            $('.my_model').fadeIn(300);
        });
        //点击×时关闭
        $('.closeModel').click(function () {
            closeM();
        });
        //点击取消时关闭
        $('.dialog-close').click(function () {
            closeM();
        });
        function closeM() {
            $('.model_bg').fadeOut(300);
            $('.my_model').fadeOut(300);
        }
        //点击确定按钮
        $('.dialog-sure').click(function () {
            $order_lists.remove();//移除ul
            $order_content.remove();
            // localStorage.removeItem("name");????怎么在本地删除
            console.log($('.cartBox').find('.order_content')[0]);
            if ($('.cartBox').find('.order_content')[0]==undefined) {
                //上下都没有商品了，移除整个商品区
                $('.cartBox').prev().remove();
                $('.cartBox').next().remove()
                $('.car_empty').css('display','block');
            }
            //移除后关闭
            closeM();
            
            //重新计算总价
            totalAll();
        })
    })
    
    
};
// 渲染推荐商品
// 获取数据
function getLikeData() {
    var params = {
        url: 'json/shop.json',
        success:function (data) {
            insertLike(data);
        }
    };
    sendAjax(params);
};
//将数据渲染到页面中
function insertLike(data) {
    data = data.data;
    var arr = [];
    for (var i=0;i<data.length;i++){
        arr.push(`<li class="guss_list">
                    <dl>
                        <dt class="guss_img">
                            <a href="detail.html">
                                <img src="${data[i].img}" alt="小米路由器Pro">
                            </a>
                        </dt>
                        <dd class="guss_name">
                            <a href="detail.html">${data[i].name}</a>
                        </dd>
                        <dd class="guss_price">
                            ${data[i].price}
                            <span>元</span>
                        </dd>
                        <dd class="guss_tips">
                            7185人好评
                            <a href="javascript:;" class="btn_add">加入购物车</a>
                        </dd>
                    </dl>
                </li>`)
    }
    var $like = document.querySelector('.guss_row');
    $like.innerHTML = arr.join('');
    //点击加入购物车
    $('.btn_add').click(function(){
        // 获取商品名字
        var name = $(this).parents('dl').find('.guss_name').find('a').text();
        // 获取商品数量
        var count = 1;
        addCar(name,count);
        count++;
        location.reload(1);
    })
};
function addCar(name,count){
        //从本地中取出来使用
        var shopList = localStorage.shopList || '[]';
        shopList = JSON.parse(shopList);
        for (var j = 0;j<shopList.length;j++){
            if(shopList[j].name === name){
                //证明商品已经存在
                //累计即可
                shopList[j].count = Number(shopList[j].count) + Number(count);
                break;
            }
        }
        if(j === shopList.length){
            //商品存在添加一条新数据
            shopList.push({name: name, count: count});
        }
        //再保存到本地
        localStorage.shopList = JSON.stringify(shopList);
    
}
