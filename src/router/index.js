import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: () => import('../components/common/Home.vue'),
      meta: {
        title: '自述文件',
      },
      children: [
        {
          path: 'dashboard',
          component: () => import('../components/page/Dashboard.vue'),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: 'tabs',
          component: () => import('../components/page/Tabs.vue'),
          meta: {
            title: 'tab选项卡'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../components/page/Login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/demo',
      component: () => import('../components/page/EleDemo.vue'),
    }
  ]
});
