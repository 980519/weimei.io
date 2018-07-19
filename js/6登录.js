/**
 * Created by Administrator on 2018/6/7.
 */

window.onload=function () {
    //用户名input框
    var user_box=document.getElementsByClassName("user_box")[0];
    var input1=user_box.getElementsByTagName("input")[0];

    var pwd_box=document.getElementsByClassName("pwd_box")[0];
    var input2=user_box.getElementsByTagName("input")[0];

    input1.onfocus=function () {
        if(input1.value ==="  手机号/邮箱/用户名"){
            input1.value = "";
        }
    }
    input1.onblur = function () {
        if(input1.value === ""){
            input1.value = "  手机号/邮箱/用户名";
        }
    }

    //密码input框


    input2.onfocus=function () {
        if(input2.value ==="  密码"){
            input2.value = "";
        }
    }
    input2.onblur = function () {
        if(input2.value === ""){
            input2.value = "  密码";
        }
    }
}

/*$(".user_box imput").focus(function () {
    alert(1);
    if($(this).val()=="  手机号/邮箱/用户名"){

        $(this).val("");
    }
    if($(this).val()==""){
        $(this).val("  手机号/邮箱/用户名");
    }
})*/

//ajax
$(function(){
    $.ajax({
        url:"http://192.168.1.173/GUser/getGUser/1",
        type:"post",
        dataType:"json",
        success:function(result){
            //收货地址
            //姓名
            var name=result.userInfo.GUserById.name;
            $(".user_box>input").val(name);
            //手机号
            var phone=result.userInfo.GUserById.phone;
            $(".pwd_box>input").val(phone);
        }
    });
});





