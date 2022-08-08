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
        },
        {
          path: 'table',
          component: () => import('../components/page/BaseTable.vue'),
          meta: {
            title: '基础表格'
          }
        },
        {
          path: 'drag',
          component: () => import('../components/page/DragList.vue'),
          meta: {
            title: '拖拽列表'
          }
        },
        {
          path: 'dialog',
          component: () => import('../components/page/DragDialog.vue'),
          meta: {
            title: '拖拽弹框'
          }
        },
        {
          path: 'charts',
          component: () => import('../components/page/BaseCharts.vue'),
          meta: {
            title: 'schart图表'
          }
        },
        {
          path: 'upload',
          component: () => import('../components/page/Upload.vue'),
          meta: {
            title: '文件上传'
          }
        },
        {
          path: 'editor',
          component: () => import('../components/page/VueEditor.vue'),
          meta: {
            title: '富文本编辑器'
          }
        },
        {
          path: 'markdown',
          component: () => import('../components/page/MarkDown.vue'),
          meta: {
            title: 'markdown编辑器'
          }
        },
        {
          path: 'i18n',
          component: () => import('../components/page/I18n.vue'),
          meta: {
            title: '国际化'
          }
        },
        {
          path: 'permission',
          component: () => import('../components/page/Permission.vue'),
          meta: {
            title: '权限测试',
            permission: true
          }
        },
        {
          path: '403',
          component: () => import('../components/page/403.vue'),
          meta: {
            title: '403'
          }
        },
        {
          path: '404',
          component: () => import('../components/page/404.vue'),
          meta: {
            title: '404'
          }
        },
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
