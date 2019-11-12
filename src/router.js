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
    path: '/login',
    name: 'login',
    component: () => import('./views/login'),
    meta: {
      title: 'login',
      isShowFooter: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./views/home/index'),
    meta: {
      title: 'home',
      isShowFooter: true
    }
  },
  {
    path: '/scan',
    name: 'scan',
    component: () => import('./views/scan/index.vue'),
    meta: {
      title: 'scan',
      isShowFooter: false
    }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('./views/work/index.vue'),
    meta: {
      title: 'work',
      isShowFooter: false
    }
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('./views/task/index.vue'),
    meta: {
      title: 'task',
      isShowFooter: true
    }
  },
  {
    path: '/taskSub',
    name: 'taskSub',
    component: () => import('./views/task/subpage.vue'),
    children: [
      {
        path: 'inspectionList',
        name: 'inspectionList',
        component: () => import('./views/task/inspection/list.vue'),
        meta: {
          title: 'inspectionList',
          isShowFooter: false
        }
      },
      {
        path: 'inspectionDetail',
        name: 'inspectionDetail',
        component: () => import('./views/task/inspection/detail.vue'),
        meta: {
          title: 'inspectionDetail',
          isShowFooter: false
        }
      },
      {
        path: 'inspectionTodo',
        name: 'inspectionTodo',
        component: () => import('./views/task/inspection/todo.vue'),
        meta: {
          title: 'inspectionTodo',
          isShowFooter: false
        }
      },
      {
        path: 'inspectionTodoDetail',
        name: 'inspectionTodoDetail',
        component: () => import('./views/task/inspection/tododetail.vue'),
        meta: {
          title: 'inspectionTodoDetail',
          isShowFooter: false
        }
      },
      {
        path: 'inspectionFeedback',
        name: 'inspectionFeedback',
        component: () => import('./views/task/inspection/feedback.vue'),
        meta: {
          title: 'inspectionFeedback',
          isShowFooter: false
        }
      },
      {
        path: 'repairList',
        name: 'repairList',
        component: () => import('./views/task/repair/list.vue'),
        meta: {
          title: 'repairList',
          isShowFooter: false
        }
      },
      {
        path: 'repairDetail',
        name: 'repairDetail',
        component: () => import('./views/task/repair/detail.vue'),
        meta: {
          title: 'repairDetail',
          isShowFooter: false
        }
      },
      {
        path: 'repairFeedback',
        name: 'repairFeedback',
        component: () => import('./views/task/repair/feedback.vue'),
        meta: {
          title: 'repairFeedback',
          isShowFooter: false
        }
      },
    ],
    meta: {
      title: 'taskSub',
      isShowFooter: true
    }
  },
  {
    path: '/message',
    component: () => import('./views/message/index.vue'),
    children: [
      {
        path: '',
        name: 'messageHome',
        component: () => import('./views/message/home/index.vue'),
        meta: {
          title: 'messageHome',
          isShowFooter: false
        }
      },
      {
        path: 'messageAlarm',
        name: 'messageAlarm',
        component: () => import('./views/message/alarm/list.vue'),
        meta: {
          title: 'messageAlarm',
          isShowFooter: false
        }
      },
      {
        path: 'messageAlarmDetail',
        name: 'messageAlarmDetail',
        component: () => import('./views/message/alarm/detail.vue'),
        meta: {
          title: 'messageAlarmDetail',
          isShowFooter: false
        }
      },
      {
        path: 'messageNotice',
        name: 'messageNotice',
        component: () => import('./views/message/notice/list.vue'),
        meta: {
          title: 'messageNotice',
          isShowFooter: false
        }
      },
      {
        path: 'messageNoticeDetail',
        name: 'messageNoticeDetail',
        component: () => import('./views/message/notice/detail.vue'),
        meta: {
          title: 'messageNoticeDetail',
          isShowFooter: false
        }
      }
    ],
    meta: {
      title: 'message',
      isShowFooter: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('./views/user/index.vue'),
    meta: {
      title: 'user',
      isShowFooter: true
    }
  },
  {
    path: '/basicUser',
    name: 'basicUser',
    component: () => import('./views/user/basicUser.vue'),
    meta: {
      title: 'basicUser',
      isShowFooter: false
    }
  },
  {
    path: '/passwordModify',
    name: 'passwordModify',
    component: () => import('./views/user/passwordModify.vue'),
    meta: {
      title: 'passwordModify',
      isShowFooter: false
    }
  },
  {
    path: '/taskQuery',
    name: 'taskQuery',
    component: () => import('./views/taskQuery/index.vue'),
    meta: {
      title: 'taskQuery',
      isShowFooter: false
    }
  },
  {
    path: '/taskQueryList',
    name: 'taskQueryList',
    component: () => import('./views/taskQuery/list.vue'),
    meta: {
      title: 'taskQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/alarmQuery',
    name: 'alarmQuery',
    component: () => import('./views/alarmQuery/index.vue'),
    meta: {
      title: 'alarmQuery',
      isShowFooter: false
    }
  },
  {
    path: '/alarmQueryList',
    name: 'alarmQueryList',
    component: () => import('./views/alarmQuery/list.vue'),
    meta: {
      title: 'alarmQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/pipeQuery',
    name: 'pipeQuery',
    component: () => import('./views/pipeQuery/index.vue'),
    meta: {
      title: 'pipeQuery',
      isShowFooter: false
    }
  },
  {
    path: '/pipeQueryList',
    name: 'pipeQueryList',
    component: () => import('./views/pipeQuery/list.vue'),
    meta: {
      title: 'pipeQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/pipelineQuery',
    name: 'pipelineQuery',
    component: () => import('./views/pipelineQuery/index.vue'),
    meta: {
      title: 'pipelineQuery',
      isShowFooter: false
    }
  },
  {
    path: '/pipelineQueryList',
    name: 'pipelineQueryList',
    component: () => import('./views/pipelineQuery/list.vue'),
    meta: {
      title: 'pipelineQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/deviceQuery',
    name: 'deviceQuery',
    component: () => import('./views/deviceQuery/index.vue'),
    meta: {
      title: 'deviceQuery',
      isShowFooter: false
    }
  },
  {
    path: '/deviceQueryList',
    name: 'deviceQueryList',
    component: () => import('./views/deviceQuery/list.vue'),
    meta: {
      title: 'deviceQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/environmentalMonitoring',
    name: 'environmentalMonitoring',
    component: () => import('./views/environmentalMonitoring/index.vue'),
    meta: {
      title: 'environmentalMonitoring',
      isShowFooter: false
    }
  },
  {
    path: '/environmentalMonitoringList',
    name: 'environmentalMonitoringList',
    component: () => import('./views/environmentalMonitoring/list.vue'),
    meta: {
      title: 'environmentalMonitoringList',
      isShowFooter: false
    }
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: () => import('./views/statistic/index.vue'),
    meta: {
      title: 'statistic',
      isShowFooter: false
    }
  },
];

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new VueRouter({ 
  // mode: 'history',
  routes: routes,
  //滚动行为。这个功能只在支持 history.pushState 的浏览器中可用
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
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

