<template>
  <div class="hello">
    <header>首页</header>
    <div class="header"></div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg:'111111'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../common/common.scss'
</style>
