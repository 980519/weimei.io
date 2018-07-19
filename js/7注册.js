/**
 * Created by Administrator on 2018/6/7.
 */
$(function(){
    $.ajax({
        url:"http://192.168.1.177/GUser/insertGUser",//getGUser/1
        type:"post",
        dataType:"json",
        success:function(result){
            $(".login_btn").click(function () {

            })

        }
    });
});
