<template>
  <div class="hello">
    <header>购物车</header>
    <div class="header"></div>
      {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data () {
    return {
       msg:'3333333'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import '../../common/common.scss'
</style>
