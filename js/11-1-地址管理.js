/**
 * Created by Administrator on 2018/6/7.
 */
$(function(){
    $.ajax({
        url:"http://192.168.1.177/GAddress/getGAddress/1",
        type:"post",
        dataType:"json",
        success:function(result){
            //地址
            var area=result.userInfo.GAddressById.area;
            var detailAddress=result.userInfo.GAddressById.detailAddress;
            $(".adress_detail_iadress>p").text(area + detailAddress);

        }
    });
});
$(function(){
    $.ajax({
        url:"http://192.168.1.177/GUser/getGUser/1",
        type:"post",
        dataType:"json",
        success:function(result){
            //姓名
            var name=result.userInfo.GUserById.name;
            $(".adress_detail_inform_p1").text(name);
            //电话
            var phone=result.userInfo.GUserById.phone;
            $(".adress_detail_inform_p2").text(phone);

        }
    });
});
