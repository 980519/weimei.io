/**
 * Created by Administrator on 2018/6/5.
 */


$(function () {
    //轮播
    var i=0;
    var j=setInterval(move,2000);
    function  move() {
        i++;
        if (i>5) {
            i = 0;
        }
        $(".top_banner>ul>li").eq(i).css({'background-color': '#734605'}).siblings().css({'background': '#fff'});
        $(".top_banner>img").eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    $(".top_banner>ul>li").click(function () {
        $(this).css({'background-color': '#734605' }).siblings().css({'background':'#fff'});
        var i=$(this).index();
        $(".top_banner>img").eq(i).fadeIn(500).siblings().fadeOut(500);
    });

    //点击跳转事件
    $(".top_select_order>a").click(function () {
        this.href="9我的订单.html";
    })
    $(".nav_box_page>a").click(function () {
        this.href="index.html";
    })
    $(".nav_box_classification>a").click(function () {
        this.href="2分类.html";
    })
    $(".nav_box_my>a").click(function () {
        this.href="8我的唯美.html";
    })
    $(".nav_box_shopping_cart>a").click(function () {
        this.href="10我的购物车.html";
    })
})

