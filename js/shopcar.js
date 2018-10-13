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
    insertData(carShopList);
};
//把购物车添加到页面中
function insertData(data) {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        //通过名字获取商品
        var shop;
        for (var j = 0; j < shopList.length; j++) {
            if (shopList[j].name == data[i].name) {
                shop = shopList[j];
                break;
            }
        }
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
                            <a href="javascript:;">
                                <img src="images/sp1.jpg" alt=""> 
                            </a>
                        </div>
                    </li>
                    <li class="list_con text_name"> 
                        <div class="list_text">
                            <a href="javascript:;">${shop.name}</a> 
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
        // var $total_price = $('.sum_price').html();//获取总价格
        //点击全选框子选框一起变化（默认是选中的）
        $chooseAll.on('click',function(){
            if($(this).is('.border_icon')){
                $btnAll.removeClass('border_icon');
                //
                $(this).mouseover(function(){
                    $right.css('color','#666');
                }).mouseout(function(){
                    $right.css('color','#fff');
                })
                //统计商品件数
                $carttotalNum.html('');
                $('.selTotalNum').html('');
                //统计总价
                $('.cartTotalPrice').html('');
            }else{
                $btnAll.addClass('border_icon');
                $right.css('color','#fff');
                $(this).mouseover(function(){
                    $right.css('color','#fff');
                }).mouseout(function(){
                    $right.css('color','#fff');
                })
                //统计商品件数
                $carttotalNum.html($totalSum);
                $('.selTotalNum').html($totalSum);
                //统计总价
                $('.cartTotalPrice').html($totalPrice);
            }  
        })
        $sonCheck.each(function(){
            $(this).click(function(){
                if($(this).is('.border_icon')){
                    //遍历子按钮
                    var len = $sonCheck.length;
                    var num = 0;
                    $sonCheck.each(function () {
                        if ($(this).is('.border_icon')) {
                            $(this).removeClass('border_icon');
                            $(this).mouseover(function(){
                                $right.css('color','#666');
                            }).mouseout(function(){
                                $right.css('color','#fff');
                            })
                            num++;
                        }
                    });
                    //如果所有的子按钮都没有选中则移除全选按钮
                    if(num == len){
                        if($chooseAll.is('.border_icon')){
                            $chooseAll.removeClass('border_icon');
                            $carttotalNum.html('');
                            $('.selTotalNum').html('');
                            $('.cartTotalPrice').html('');
                        }    
                    } 
                }else{
                    //遍历子按钮
                    var len = $sonCheck.length;
                    var num = 0;
                    $sonCheck.each(function () {
                        if ($(this).is('.border_icon') == false) {
                            $(this).addClass('border_icon');
                            $right.css('color','#fff');
                            $(this).mouseover(function(){
                                $right.css('color','#fff');
                            }).mouseout(function(){
                                $right.css('color','#fff');
                            })
                            //选中子商品总计要显示
                            totalMoney();
                            num++;
                        }
                    });
                    //如果所有的子按钮都被选中则添加全选按钮
                    if(num == len){
                        if($chooseAll.is('.border_icon') == false){
                            $chooseAll.addClass('border_icon');
                            $right.css('color','#fff');
                            totalMoney();
                        }    
                    }
                }
            })
        })
        //当全选框被选中时统计价格商品件数
        $plus.on('click',function(){
            $totalSum = Number($('.sum').val())+1;
            $('.sum').val($totalSum);
            $totalPrice = ($price-0)*$totalSum;//计算价格
            $('.sum_price').html($totalPrice)//小计
            if($btnAll.is('.border_icon')){
                $carttotalNum.html($totalSum);
                $('.selTotalNum').html($totalSum);
                $('.cartTotalPrice').html($totalPrice);
            }else{
                $carttotalNum.html('');
                $('.selTotalNum').html('');
                $('.cartTotalPrice').html('');
            }
        })
        $reduce.on('click',function(){
            if($totalSum > 1){
                $totalSum = Number($('.sum').val())-1;
                $('.sum').val($totalSum);
                $totalPrice = ($price-0)*$totalSum;
                $('.sum_price').html($totalPrice)//小计
                if($btnAll.is('.border_icon')){
                    $carttotalNum.html($totalSum);
                    $('.selTotalNum').html($totalSum);
                    $('.cartTotalPrice').html($totalPrice);
                }else{
                    $carttotalNum.html('');
                    $('.selTotalNum').html('');
                    $('.cartTotalPrice').html('');
                }
            }
        })
        //默认有件数和总价
        if($btnAll.is('.border_icon')){
            $carttotalNum.html($totalSum);
            $('.selTotalNum').html($totalSum);
            $('.cartTotalPrice').html($totalPrice);
        }else{
            $carttotalNum.html('');
            $('.selTotalNum').html('');
            $('.cartTotalPrice').html('');
        }
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
            if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
                //上下都没有商品了，移除整个商品区
                $order_content.parents('.cartBox').remove();
            }
            //移除后关闭
            closeM();
            
            //重新计算总价
            totalMoney();
        })
        function totalMoney(){
            var total_money = 0;
            var total_count = 0;
            $sonCheck.each(function(){
                if($(this).is('.border_icon')){
                    var goods = Number($totalPrice);//小计
                    var num = Number($totalSum);//件数
                    total_money += goods;
                    total_count += num;
                }
            });
            $carttotalNum.html(total_count);
            $('.selTotalNum').html(total_count);
            $('.cartTotalPrice').html(total_money);
        }
    })


};
    
    