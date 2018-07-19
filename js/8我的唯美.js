/**
 * Created by Administrator on 2018/6/7.
 */
//剩余
$(function(){
    $.ajax({
        url:"http://192.168.1.177/GUser/getGUser/1",
        type:"post",
        dataType:"json",
        success:function(result){
            //账户余额
            var balance=result.userInfo.GUserById.balance;
            $(".balance>p>span").text(balance);
            //剩余优惠券
            var discountCoupon=result.userInfo.GUserById.discountCoupon;
            $(".content_under_cheap>p>span").text(discountCoupon);
            //账户手机号
            var phone=result.userInfo.GUserById.phone;
            $(".content_banner_information1>p").text(phone);
        }
    });
});
