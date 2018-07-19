/**
 * Created by Administrator on 2018/6/7.
 */

window.onload=function () {
    var province = document.getElementsByClassName("province")[0];
    var city = document.getElementsByClassName("city")[0];
    var area = document.getElementsByClassName("area")[0];
    city.disabled = true;
    area.disabled = true;
    for (var i =0;i<provinceList.length;i++){
        var provinceOption = document.createElement("option");
        provinceOption.innerText = provinceList[i].name;
        provinceOption.value = i ;
        province.appendChild(provinceOption);

    }
    province.onchange = function () {
        city.disabled = false;
        var val = province.options[province.selectedIndex].value;
        var cityArr =provinceList[val].cityList;
        for (var j =0;j<cityArr.length;j++){
            var cityOption = document.createElement("option");
            cityOption.innerText = cityArr[j].name;
            cityOption.value = j ;
            city.appendChild(cityOption);
        }
    }
    city.onchange =function () {
        area.disabled = false;
        var val = province.options[province.selectedIndex].value;
        var val2 = city.options[city.selectedIndex].value;
        var areaArr = provinceList[val].cityList[val2].areaList;
        for (var h =0;h< areaArr.length;h++){
            var areaOption = document.createElement("option");
            areaOption.innerText = areaArr[h];
            areaOption.value = h ;
            area.appendChild(areaOption);
        }
    }
}


$(function () {
   /* $(".give_way_from_img1>img").click(function () {
        $(this).attr({src:"img/5-提交订单_round_03.jpg"}).not(this).attr({src:"img/5-提交订单_round_06.jpg"});
        $(this).attr({src:"img/5-提交订单_round_06.jpg"}).not(this).attr({src:"img/5-提交订单_round_03.jpg"});
    })*/
    $(".give_way_from_img1>img").click(function () {
        if($(this).attr("src","img/5-提交订单_round_03.jpg")){
            $(this).attr("src","img/5-提交订单_round_06.jpg");
        }
        else if($(this).attr("src","img/5-提交订单_round_06.jpg")){
            $(this).attr("src","img/5-提交订单_round_03.jpg");
        }
    })

})



//ajax
//收货地址
$(function(){
    $.ajax({
        url:"http://192.168.1.173/GUser/getGUser/1",
        type:"post",
        dataType:"json",
        success:function(result){
            //姓名
            var name=result.userInfo.GUserById.name;
            $(".name>p").text(name);
            //手机号
            var phone=result.userInfo.GUserById.phone;
            $(".phone>p").text(phone);

        }
    });
});
$(function(){
    $.ajax({
        url:"http://192.168.1.173/GAddress/getGAddress/1",
        type:"post",
        dataType:"json",
        success:function(result){
            //收货地址
            //地址
            var area=result.userInfo.GAddressById.area;
            var detailAddress=result.userInfo.GAddressById.detailAddress;
            $(".adress_con>p").text(area+detailAddress);
        }
    });
});

//剩余
$(function(){
    $.ajax({
        url:"http://192.168.1.173/GUser/getGUser/1",
        type:"post",
        dataType:"json",
        success:function(result){
            //账户余额
            var balance=result.userInfo.GAddressById.balance;
            $(".use_surplus_1>p span").last().text(balance);
            //剩余优惠券
            var discountCoupon=result.userInfo.GAddressById.discountCoupon;
            $(".discountCoupon").text(discountCoupon);
        }
    });
});












