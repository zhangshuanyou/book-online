<template>
  <div class="hello">
    <header>分类</header>
    <div class="header"></div>
    <main>
      <input type="text"
       placeholder="请输入您想查找的图书名称进行搜索"
       class="class-input"
       v-model="inputVal"
       @keyup.enter="searchInfo()"
        />
      <ul class="book-info">
        <router-link tag="li" :to="{name:'Details',params:book}" v-for="book in searchBook" :key="book.id">
          <span class="book-left">
            <img :src='book.cover' alt="">
          </span>
          <span class="book-right">
            <p class="book-name">{{ book.name }}</p>
            <p>{{ book.author }}</p>
            <p class="book-price">￥&nbsp;{{ book.price }}</p>  
          </span>
          <i>&gt;</i>
        </router-link>
      </ul>
    </main>
  </div>
</template>

<script src="./class-page.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../common/common.scss';
  @import './class-page.scss';
</style>
