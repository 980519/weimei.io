/*
var top=document.getElementsByClassName("top")[0];
var top_banner=document.getElementsByClassName("top_banner")[0];
var   imgs=top_banner.getElementsByTagName("li");
var btn=document.getElementsByClassName("btn")[0];
var btns = btn.getElementsByTagName("li");


var t=setInterval(move,2000);
var  num=1;
var flag=true;
function move(){
    if(flag){
        flag = false;
        num++;
        if(num>btns.length){
            animate(imgs,{left:-num*90},function(){
                num=1;
                imgs.style.left="-100px";
                flag=true;
            })
            for(var i=0;i<btns.length;i++){
                btns[i].style.background="#c4c4c4";
            }
            btns[0].style.background="#88d549"
        }else if(num<=0){
            animate(imgs,{left:-num*90},function(){
                num=btns.length;
                imgs.style.left="-400px";
                flag=true;
            })
            for(var i=0;i<btns.length;i++){
                btns[i].style.background="#c4c4c4";
            }
            btns[btns.length-1].style.background="#88d549";
        }else{
            animate(imgs,{left:-num*90},function(){
                flag=true;
            })
            for(var i=0;i<btns.length;i++){
                btns[i].style.background="#c4c4c4";
            }
            btns[num-1].style.background="#88d549";
        }

    }
}*/
window.onload=function () {
    var btn = $(".btn>ul>li");
    var wimg = $(".top_banner>li").width();

//按钮点击事件
    $(btn[0]).addClass("current");
    btn.click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        var num = $(this).index();
        $(".banner_ul").animate({left:-num * 6.4+"rem" },500);
    });
//轮播
    var t = setInterval(move,2000);
    function move(){
        var num;
        btn.each(function(){
            if($(this).hasClass("current")){
                num = $(this).index()+1;
                $(".top_banner").animate({left:-num * 90+"vw"},500);
                if(num === btn.length){
                    $(".top_banner").animate({left:"0"},0);
                    num=0;
                }
            }
        });
        $(btn[num]).addClass("current").siblings().removeClass("current");
    }
}





$(function () {
    var num=parseInt($(".con_title_number_num>p").text()) ;
    $(".con_title_number_reduce>img").click(function () {
        if(num<0){
            num=0;
        }
        if(num>0){
            num = num-1;
        }
        $(".con_title_number_num>p").text(function () {
            return num;
        });
    })
    $(".con_title_number_increase>img").click(function () {
        if(num>8){
            num=8;
        }
        if(num>=0){
            num=num+1;
        }
        $(".con_title_number_num>p").text(function () {
            return num;
        });
    })
    
    $(".nav_add_car>a").click(function () {

    })

    
})


$(function () {
    $(".con_title_size>li").click(function () {
        $(this).css({'color':'white','background-color': '#88d549'}).siblings().css({'color':'#000','background-color': '#fff'})
    })
})





/*$(function(){
    $.ajax({
        url:"http://192.168.1.173/GUser/getGUser/1",
        type:"post",
        dataType:"json",
        success:function(result){
            var info=result.userInfo.GUserById.name;

        }
    });
});*/




