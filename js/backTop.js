var $box=document.querySelector('.bar-totop');
window.onscroll=function () {
    var top=document.documentElement.scrollTop;
    if (top<=1000){
        $box.style.display='none';
    }else {
        $box.style.display='block';
    }
};
$box.onclick=function () {
    document.documentElement.scrollTop=0;
    // var time=setInterval(function () {
    //     document.documentElement.scrollTop-=20;
    //     if (document.documentElement.scrollTop<=0){
    //         clearInterval(time);
    //     }
    // },20)
};