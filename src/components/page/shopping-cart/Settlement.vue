<template>
  <div class="settlement">
    <header>
      <router-link tag="span" :to="{name:'ShoppingCart'}" class="settlemnt-return">&lt;</router-link>
      结算中心
      </header>
     <main>
        <section>
          <h3 class="settlement-title">商品信息确认</h3>
          <div class="shoppInfo">
            <div class="price-info">
              <h4 class="price-info-title">价格信息</h4>
              <span class="set-price-info">
                <p class="set-price-info-p">
                  <span>商品总价：</span><label>￥{{price}}</label>
                </p>
                <p class="set-price-info-p">
                  <span>运送费：</span><label>￥{{freight}}</label>
                  </p>
                <p class="set-price-info-p">
                  <span>订单信息：</span><label>￥{{totalprice}}</label>
                  </p>
              </span>
            </div>
            <div class="receipt-info">
              <h4 class="price-info-title">收货信息</h4>
              <p class="set-price-info-p">
                <label>收货地址：</label>
                <span>{{ address }}</span>
              </p>
              <p class="set-price-info-p">
                <label>收货人：</label>
                <span>{{ username }}</span>
              </p>
              <p class="set-price-info-p">
                <label>邮编：</label>
                <span></span>
              </p>
              <p class="set-price-info-p">
                <label>电话：</label>
                <span>{{ phone }}</span> 
              </p>
              <p class="set-price-info-p set-price-info-address">
                <span>修改地址</span><i class="set-price-info-address-i">&gt;</i>
              </p>
              <p class="set-price-info-p set-price-info-address">
                <span>新增地址</span><i class="set-price-info-address-i">&gt;</i>
              </p>
            </div>
          </div>
      </section>
      <section>
        <h3 class="settlement-title">选择支付方式</h3>
        <ul class="payment">
          <li class="payment-li">
            <label class="payment-label-one fa fa-weixin fa-lg payment-label"></label><span>微信支付</span><i class="payment-li-i">&gt;</i>
          </li>
          <li class="payment-li">
            <label class="payment-label-two fa fa-paypal fa-lg payment-label"></label><span>支付宝</span><i class="payment-li-i">&gt;</i>
          </li>
          <li class="payment-li">
            <label class="payment-label-three fa fa-credit-card fa-lg payment-label"></label><span>银行卡</span><i class="payment-li-i">&gt;</i>
          </li>
          <li class="payment-li">
            <label class="payment-label-four fa fa-credit-card-alt fa-lg payment-label"></label><span>信用卡</span><i class="payment-li-i">&gt;</i>
          </li>
          <li class="payment-li">
            <label class="payment-label-five fa fa-cc-visa fa-lg payment-label"></label><span>VISA</span><i class="payment-li-i">&gt;</i>
          </li>
        </ul>
      </section>
     </main>
  </div>
</template>

<script>
export default {
  name: 'Settlement',
  data () {
    return {
       price:null,
       totalprice:null,
        username:"",
        phone:"",
        address:"",
        freight:"10"
    }
  },
  methods:{
    calculation(){
      let price = localStorage.getItem("price");
      let useraddress = JSON.parse(localStorage.getItem("useraddress"))
      console.log(useraddress)
      if(!price){
        return
      }else{
        this.price=price;
        this.totalprice = Number(this.freight) +  Number(price);
        
          this.username = useraddress[0].username;
          this.phone = useraddress[0].phone;
          this.address = useraddress[0].address; 
        
      }
    }
  },
  created(){
    this.calculation();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 @import '../../common/common.scss';
 @import './settlement.scss';
</style>
