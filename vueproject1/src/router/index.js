import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: ()=>import('../components/HelloWorld.vue'),
      children:[
        {
          path:'aic',
          component:()=>import('../components/Aic')
        }
      ]
    },
    {
      path:'/child/:uid',
      name:'ChildrenCon',
      component:()=>import('../components/ChildrenCom.vue')
    }
  ],
  mode:'history',
})

