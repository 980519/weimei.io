/**
 * Created by Administrator on 2018/6/7.
 */


$(function(){
    $.ajax({
        url:"http://192.168.1.177/GIndent/getGIndent/1",
        type:"post",
        dataType:"json",
        success:function(result){
            //订单编号
            var indentId=result.userInfo.GIndentById.indentId;
            $(".order_details_number_con").text(indentId);
            //订单时间
            var indentDate=result.userInfo.GIndentById.indentDate;
            $(".order_details_time_con").text(indentDate);
            //配送方式
            var delivery=result.userInfo.GIndentById.delivery;
            $(".order_details_give_way_con").text(delivery);
            //支付方式
            var payment=result.userInfo.GIndentById.payment;
            $(".order_details_pay_way_con").text(payment);
            //订单状态
            var indentState=result.userInfo.GIndentById.indentState;
            $(".order_details_state_con").text(indentState);
            //商品总价
            var goodsPrice=result.userInfo.GIndentById.goodsPrice;
            $(".price_details_total_con1").text(goodsPrice);
            //运费金额
            var goodsFreight=result.userInfo.GIndentById.goodsFreight;
            $(".price_details_post_con1").text(goodsFreight);
            //合计
            var goodsTotal=result.userInfo.GIndentById.goodsTotal;
            $(".price_details_all_price_con1").text(goodsTotal);


        }
    });
});

