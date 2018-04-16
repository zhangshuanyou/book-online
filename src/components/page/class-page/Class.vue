<template>
  <div class="hello">
    <header>分类</header>
    <div class="header"></div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'ClassIficaton',
  data () {
    return {
       msg:'222222'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../common/common.sass'
</style>
