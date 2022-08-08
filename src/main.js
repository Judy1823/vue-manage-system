import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/icon.css';
import './assets/css/Icon-css/iconfont.css';
import './utils/directive'; // 拖拽组件
import VueI18n from 'vue-i18n';
import { messages } from './utils/i18n'; // 引入国际化插件设定的不同语言的文本
import 'babel-polyfill'; // 加载语法编辑器

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 实例化国际化插件
const i18n = new VueI18n({
  locale: 'zh',
  messages,
});

// 设置全局前置守卫
/**
 * 这个守卫方法会接受三个参数：
 * to: Route 即将要去往的路由对象，通过这个参数来设置路由的去处
 * from：Route 当前导航正要离开的路由，通过这个参数来设置路由的出发处
 * next：Function 必须要调用的方法，通过这个参数来resolve这个钩子函数
 * next() 进行下一个钩子，也就是下一个应该去跳转的路由
 * next(false) 中断当前导航
 * next('/') 跳转到一个不同的地址，当前导航中断，进行新的导航
 * next(error) 终止该导航，并将错误传递给router.onError()注册的回调
 */

router.beforeEach((to, from, next) => {
  // 对页面的标题进行设置，获取路由元信息中的title
  document.title = `${to.meta.title} | vue-manage-system`;
  // 获取本地存储的用户名
  const role = localStorage.getItem('ms_username');
  // 判断是否存在用户名以及下一个钩子是否跳转到 '/login'
  if (!role && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
