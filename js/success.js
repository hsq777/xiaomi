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
        // console.log(data[i].id)
        arr.push(
            `<li class="guss_list">
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
                        <a href="javascript:;" class="btn_add attr-id=${data[i].id}" attr-index="${i}">加入购物车</a>
                    </dd>
                </dl>
            </li>`
        )
    }
    var $like = document.querySelector('.guss_row');
    $like.innerHTML = arr.join('');
    //点击加入购物车
    $('.btn_add').click(function(){
        // 获取商品index
        var index = $(this).attr("attr-index");
        console.log(index);
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
