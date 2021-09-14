<template>
  <div>
    <h2>{{ chilname }}{{this.$route.params}}</h2>
    <button @click="back">后退</button>
  </div>
</template>

<script>
import ChongSun from "./ChongSun";
export default {
  name: "ChildrenCom",
  components: {ChongSun},
  data() {
    return {
      chilname: '小王八'
    }
  },
  props:{
    name:{
      type:String
    }
  },
  methods:{
    go(){
      console.log('前进了')
      history.replaceState({},'','child')
    },
    back(){
      history.back()
    }
  }
}
</script>

<style scoped>

</style>
