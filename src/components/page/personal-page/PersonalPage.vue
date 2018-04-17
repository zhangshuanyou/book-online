<template>
  <div class="hello">
    <header>个人</header>
    <div class="header"></div>
      {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Personal',
  data () {
    return {
       msg:'444444'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../common/common.scss'
</style>
