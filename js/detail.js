$(".guanbi").on('click', function () {
    $('#login-notic').css('display', 'none');
});
$(".btn-wrap-buy").on('click', function () {
    //获取商品名字以及价格
    var name = $('.pro-title').text() +" "+ $('.name-color').find('a').text();
    // var price = $('.pro-price').text();
    var count = 1;
    // console.log(name,price,count);
    addCar(name,count);
});

//将商品加入到购物车
function  addCar(name,count) {
    //从本地中取出来使用
    var shopList = localStorage.shopList || '[]';
    shopList = JSON.parse(shopList);
    for (var j = 0;j<shopList.length;j++){
        if(shopList[j].name === name){
            //证明商品已经存在
            //累计即可
            shopList[j].count = Number(shopList[j].count) + Number(count)-1;
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
