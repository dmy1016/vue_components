<template>
  <div class="textmessage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <div class="message_item">
          <div class="message_title" @click="btnshow">
            <i class="el-icon-arrow-right"></i>
            <span class="title">背书待签收</span>
            <span class="count">12</span>
          </div>
          <collapse-transition>
            <ul class="item_ul" v-show="isshow">
              <li>
                <i :class={dot:true,dotbg:dotbg} @click="dothandle"></i>
                <span>收到背书转让1999999条未读</span>
              </li>
              <li>
                <i class="dot"></i>
                <span>收到背书转让1999999条未读</span>
              </li>
              <li>
                <i class="dot"></i>
                <span>收到背书转让1999999条未读</span>
              </li>
              <li>
                <i class="dot"></i>
                <span>收到背书转让1999999条未读</span>
              </li>
              <li>
                <i class="dot"></i>
                <span>收到背书转让1999999条未读</span>
              </li>
              <li>
                <i class="dot"></i>
                <span>收到背书转让1999999条未读</span>
              </li>
              <li>
                <i class="dot"></i>
                <span>收到背书转让1999999条未读</span>
              </li>
            </ul>
          </collapse-transition>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CollaspesTransition from './collasepes'
export default {
  name: 'HelloWorld',
  components: {
    'collapse-transition': CollaspesTransition,
  },
  data() {
    return {
      isshow: false,
      activeName: 'first',
      dotbg: false
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    dothandle() {
      this.dotbg = !this.dotbg
    },
    btnshow(){
      this.isshow = !this.isshow
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../styles/textmessage.css";
</style>
