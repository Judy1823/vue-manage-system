import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import('../components/common/Home.vue'),
      meta: {
        title: 'Home组件',
      },
      children: [
        {
          path: 'child',
          component: () => import('../components/page/Children.vue'),
        },
        {
          path: 'child1',
          component: () => import('../components/page/Children1.vue'),
        },
        {
          path: 'child2',
          component: () => import('../components/page/Children2.vue'),
        },
        {
          path: 'child3',
          component: () => import('../components/page/Children3.vue'),
        },
        {
          path: 'first',
          component: () => import('../components/page/First.vue'),
        },
        {
          path: 'second',
          component: () => import('../components/page/Second.vue'),
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../components/common/Login.vue'),
      meta: {
        title: 'Login组件'
      }
    },
    {
      path: '/demo',
      component: () => import('../components/page/EleDemo.vue'),
    }
  ]
});
