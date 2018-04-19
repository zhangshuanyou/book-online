<template>
  <div class="Details">
    <header>
        <router-link tag="i" :to="{name:'HomePage'}" class="home-page">&lt;</router-link>
        图书详情
    </header>
    <!-- <div class="header"></div> -->
    <section>
        <!-- 图书信息 -->
        <div class="book-info">
          <!-- 图书头部信息 -->
          <div class="book-info-top">
           <img :src="book.cover" alt="">
            <span class="bit-content">
              <label for="">作者</label><br>
              <label for="">页数</label> <br> 
              <label for="">书号</label> <br> 
              <label for="">出版日期</label>                                
            </span>  
            <span class="bit-right">
              <label for="">{{book.author}}</label><br>
              <label for="">730</label><br> 
              <label for="">B00CBBJS5Y</label><br>  
              <label for="">2012年3月1日</label>  
            </span>
          </div>
          <!-- 书名 -->
          <p class="book-title">{{ book.name }}</p>  
        </div> 
      <div class="book-btn">
          <router-link tag="button" :to="{name:'ShoppingCart'}">加入购物车</router-link>
          <router-link tag="button" :to="{name:'Settlement'}">立即购买</router-link>
      </div>
      <div class="book-blank"></div>
      <div class="info-class">
        <fieldset>
          <legend>内容概要</legend>
          <div class="content-info">
            {{ book.describe}} 
            </div> 
        </fieldset> 
        <fieldset>
          <legend>内容概要</legend>
          <div class="content-info">
            {{ book.describe}} 
            </div> 
        </fieldset>
        <fieldset>
          <legend>作者简介</legend>
          <div class="content-info">
            {{ book.describe}} 
            </div> 
        </fieldset>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    let bookInfo = this.$route.params
    return {
      book:bookInfo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../common/common.scss';
@import './details.scss'
</style>