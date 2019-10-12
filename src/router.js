import Vue from 'vue'
import VueRouter from 'vue-router'


//如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(Router)
Vue.use(VueRouter);

//export和export default最大的区别
//就是export不限变量数 可以一直写，而export default 只输出一次 ;
//而且 export出的变量想要使用必须使用{}来盛放，而export default 不需要 只要import任意一个名字来接收对象即可。
// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

//1-路由懒加载 2- 默认页面/  404错误页面*
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    component: () => import('./views/home/index'),
    meta: {
      title: 'home',
      isShowFooter: true
    }
  },
  {
    name: 'task',
    component: () => import('./views/task/index.vue'),
    meta: {
      title: 'home',
      isShowFooter: true
    }
  },
  {
    name: 'message',
    component: () => import('./views/message/index.vue'),
    meta: {
      title: 'home',
      isShowFooter: true
    }
  },
  {
    name: 'user',
    component: () => import('./views/user/index.vue'),
    meta: {
      title: 'home',
      isShowFooter: true
    }
  },
  {
    name: 'taskQuery',
    component: () => import('./views/taskQuery/index.vue'),
    meta: {
      title: 'home',
      isShowFooter: false
    }
  },
];

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new VueRouter({ 
  routes 
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if(title) {
    document.title = title;
  }
  next();
});

export {
  router
}

