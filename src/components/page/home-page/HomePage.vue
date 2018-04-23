<template>
  <div class="hello">
    <header>掌上书城</header>
    <div class="header"></div>
    <main>
      <!-- 轮播 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/flash-01.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/flash-02.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/flash-03.png" alt="">
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
   <span class="broadcast">
      <i class="fa fa-bell-o fa-lg broadcast-i"></i>
      双12全场图书低至1折，更有隐藏神秘惊喜
    </span>
    <!-- 新书上架 -->
    <section class="main-book">
      <h3>新书上架</h3>
      <ul>
        <li v-for="(newbook,index) in newBook" :key="newbook.id" @click="clickBook(index)">
          <img class="book-img" :src='newbook.cover' alt="">
          <p class="book-name">{{ newbook.name }}</p>
          <p class="book-price">￥&nbsp;{{ newbook.price }}</p>
        </li>
      </ul>
    </section>
    <!-- 编辑推荐 -->
    <section class="main-book">
      <h3>编辑推荐</h3>
      <ul>
        <li v-for="(hotbook,index) in hotBook" :key="hotbook.id" @click="clickBook(index)">
          <img class="book-img" :src='hotbook.cover' alt="">
          <p class="book-name">{{ hotbook.name }}</p>
          <p class="book-price">￥&nbsp;{{ hotbook.price }}</p>
        </li>
      </ul>
    </section>
    <!-- 热门新书 -->
    <section class="main-book">
      <h3>热门新书</h3>
      <ul>
        <li v-for="(groombook,index) in groomBook" :key="groombook.id" @click="clickBook(index)">
           <img class="book-img" :src='groombook.cover' alt="">
          <p class="book-name">{{ groombook.name }}</p>
          <p class="book-price">￥&nbsp;{{ groombook.price }}</p>
        </li>
      </ul>
    </section>
      <section class="shoppingmask" v-show="showmask">
        <div>
         <p>还没有登录，是否登录？</p>
         <router-link tag="button" 
         :to="{name:'PersonalPage'}"
         @click.native="maskbtn">确认</router-link>
        <button @click="maskbtn">取消</button>              
        </div> 
    </section>
    </main>
    <!-- 弹出框信息 -->
    <section class="mask" v-show="mask">
      <!-- 关闭按钮 -->
        <div class="close"><i class="fa fa-times fa-lg" @click="close()"></i></div>
        <!-- 图书信息 -->
        <div class="book-info">
          <!-- 图书头部信息 -->
          <div class="book-info-top">
           <img :src="obtainInfo.cover" alt="">
            <span class="bit-content">
              <label for="">作者</label><br>
              <label for="">页数</label> <br> 
              <label for="">书号</label> <br> 
              <label for="">出版日期</label>                                
            </span>  
            <span class="bit-right">
              <label for="">{{obtainInfo.author}}</label><br>
              <label for="">730</label><br> 
              <label for="">B00CBBJS5Y</label><br>  
              <label for="">2012年3月1日</label>  
            </span>
            <span class="bit-bottom">详情&nbsp;&gt;</span>
          </div>
          <!-- 书名 -->
          <p class="book-title">{{ obtainInfo.name }}</p>
          <!-- 图书介绍 -->
          <p class="book-content" >{{ obtainInfo.describe }}</p>  
        </div> 
        <!-- 价格与数量 -->
        <p class="price-number">
          <span class="frist">单价：￥&nbsp;{{obtainInfo.price}}</span>
          <span class="scend">
            <select class="select" 
            style="width:100%;height:80%;border:none;
             outline:none;appearance:
             none;font-size:20px;padding-left:30px;">
              <option>1本</option>
              <option>2本</option>
              <option>3本</option>
              <option>4本</option>
              <option>5本</option>
            </select>
          </span>
        </p>
        <!-- 购买与加入购物车 -->
        <div class="book-btn">
          <router-link tag="button" :to="{name:'ShoppingCart'}"><span @click="clickShopping">加入购物车</span></router-link>       
          <router-link tag="button" :to="{name:'ShoppingCart'}"  @click.native="clickShopping">立即购买</router-link>               
        </div>
    </section>
  </div>
</template>

<script src="./home-page.js"></script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../common/common.scss';
  @import './home-page.scss';
</style>
