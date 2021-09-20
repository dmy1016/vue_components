<template>
  <div class="main">
    <div>{{ drag ? "拖拽中" : "拖拽停止" }}</div>
    <!--使用draggable组件-->
    <draggable
      chosenClass="chosen"
      forceFallback="true"
      group="people"
      animation="1000"
      @start="onStart"
      @end="onEnd"
      @sort="onUpdate"
    >
      <transition-group>
        <div class="blockA" :key="1" :style='{top:buttonTop +"px"}'></div>
      </transition-group>
    </draggable>
  </div>
</template>
<style scoped>
/*被拖拽对象的样式*/
.item {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}
/*选中样式*/
.chosen {
  border: solid 2px #3089dc !important;
}
.blockA {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  position: absolute;
}
</style>
<script>
//导入draggable组件
import draggable from "vuedraggable";
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      buttonTop:200,
      drag: false,
      //定义要被拖拽对象的数组
      myArray: [
        { people: "cn", id: 1, name: "www.itxst.com" },
        { people: "cn", id: 2, name: "www.baidu.com" },
        { people: "cn", id: 3, name: "www.taobao.com" },
        { people: "us", id: 4, name: "www.google.com" },
      ],
    };
  },
  methods: {
    //开始拖拽事件
    onStart() {
      console.log('刚开始')
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      console.log('刚结束')
      this.drag = false;
    },
    onUpdate(){
      console.log('开始拖拽了')
    }
  },
};
</script>