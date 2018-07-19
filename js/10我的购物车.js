/**
 * Created by Administrator on 2018/6/7.
 */
$(function () {
    var num=parseInt($(".content_list1_text_num2>p").text()) ;
    var price=parseInt($(".pay_price>p>span").text()) ;
    $(".content_list1_text_num1>p").click(function () {
        if(num<1){
            num=0;
            price=num*29.9;

        }
        else {
            num--;
            price=num*29.9;
        }
        $(".content_list1_text_num2>p").text(function () {
            return num;
        });
        $(".pay_price>p>span").text(function () {
            return  price.toFixed(1);
        });
    })
    $(".content_list1_text_num3>p").click(function () {

        if(num>=0){
            num++;
            price=num*29.9;
        }
        else {
            num=8;
            price=num*29.9;

        }
        $(".content_list1_text_num2>p").text(function () {
            return num;
        });
        $(".pay_price>p>span").text(function () {
            return price.toFixed(1);
        });
    })

    $(".nav_add_car>a").click(function () {

    })


})


