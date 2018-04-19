<template>
  <div id="app">

    <router-view/>
    <ul class="footer">
      <router-link tag="li" :to="{name:'HomePage'}" exact>
        <span class="page-btn-img fa fa-home fa-2x"></span>
        <p>首页</p>
        </router-link>
      <router-link tag="li" :to="{name:'Class'}">
        <span class="page-btn-img fa fa-share-alt fa-2x"></span>
        <p>分类</p>
        </router-link>
      <router-link tag="li" :to="{name:'ShoppingCart'}">
        <span class="page-btn-img fa fa-shopping-cart fa-2x"></span>
        <p>购物车</p>
        </router-link>
      <router-link tag="li" :to="{name:'PersonalPage'}">
        <span class="page-btn-img fa fa-user fa-2x"></span>
        <p>个人</p>
        </router-link>      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html,body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  width: 100%;
  height: 100%;
}
#app{
    height: 100%;
    
}
.footer{
  width: 100%;
  height: 70px;
  list-style: none;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;  
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  text-align: center;
  border-top: 1px solid rgb(219, 218, 218);
  padding-top:5px;
  margin: 0;
  & > li{
    width: calc(100% /4);
    text-align: center;
    &> span{
      display: inline-block;
      
    }
    & > p{
      margin: 0;
      font-size: 14px;
    }
  }
}
ul .active{
    color: green;
}
.blank{
  height: 70px;
  margin: 0;
}
</style>
