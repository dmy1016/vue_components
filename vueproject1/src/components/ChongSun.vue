<template>
<div>
  <h1>我是孙子{{this.msg}}</h1>
</div>
</template>

<script>
export default {
  name: "ChongSun",
  props:{
    msg:{
      type:String
    },
    info:{
    }
  },
}
</script>

<style scoped>

</style>
