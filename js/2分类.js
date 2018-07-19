/**
 * Created by Administrator on 2018/6/6.
 */
$(function () {
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