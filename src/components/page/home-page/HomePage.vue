<template>
  <div class="hello">
    <header>掌上书城</header>
    <div class="header"></div>
    <main>
      <!-- 轮播 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/flash-01.png" alt="好书提前囤">
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/flash-02.png" alt="好书提前囤">
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/flash-03.png" alt="好书提前囤">
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
   <span class="broadcast">
      <i class="fa fa-bell fa-lg broadcast-i"></i>
      双12全场图书低至1折，更有隐藏神秘惊喜
    </span>
    </main>
    
  </div>
</template>

<script src="./home-page.js"></script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../common/common.scss';
  @import './home-page.scss';
</style>
