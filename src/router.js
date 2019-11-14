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
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('./views/Login'),
    meta: {
      title: 'Login',
      isShowFooter: false
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('./views/Home/Index'),
    meta: {
      title: 'Home',
      isShowFooter: true
    }
  },
  {
    path: '/Scan',
    name: 'Scan',
    component: () => import('./views/Scan/Index.vue'),
    meta: {
      title: 'Scan',
      isShowFooter: false
    }
  },
  {
    path: '/Work',
    name: 'Work',
    component: () => import('./views/Work/Index.vue'),
    meta: {
      title: 'Work',
      isShowFooter: false
    }
  },
  {
    path: '/Task',
    name: 'Task',
    component: () => import('./views/Task/Index.vue'),
    meta: {
      title: 'Task',
      isShowFooter: true
    }
  },
  {
    path: '/TaskSub',
    name: 'TaskSub',
    component: () => import('./views/Task/Subpage.vue'),
    children: [
      {
        path: 'InspectionList',
        name: 'InspectionList',
        component: () => import('./views/Task/Inspection/List.vue'),
        meta: {
          title: 'IinspectionList',
          isShowFooter: false
        }
      },
      {
        path: 'InspectionDetail',
        name: 'InspectionDetail',
        component: () => import('./views/Task/Inspection/Detail.vue'),
        meta: {
          title: 'InspectionDetail',
          isShowFooter: false
        }
      },
      {
        path: 'InspectionTodo',
        name: 'InspectionTodo',
        component: () => import('./views/Task/Inspection/Todo.vue'),
        meta: {
          title: 'InspectionTodo',
          isShowFooter: false
        }
      },
      {
        path: 'InspectionTodoDetail',
        name: 'InspectionTodoDetail',
        component: () => import('./views/Task/Inspection/TodoDetail.vue'),
        meta: {
          title: 'InspectionTodoDetail',
          isShowFooter: false
        }
      },
      {
        path: 'InspectionFeedback',
        name: 'InspectionFeedback',
        component: () => import('./views/Task/Inspection/Feedback.vue'),
        meta: {
          title: 'InspectionFeedback',
          isShowFooter: false
        }
      },
      {
        path: 'RepairList',
        name: 'RepairList',
        component: () => import('./views/Task/Repair/List.vue'),
        meta: {
          title: 'RepairList',
          isShowFooter: false
        }
      },
      {
        path: 'RepairDetail',
        name: 'RepairDetail',
        component: () => import('./views/Task/Repair/Detail.vue'),
        meta: {
          title: 'RepairDetail',
          isShowFooter: false
        }
      },
      {
        path: 'RepairFeedback',
        name: 'RepairFeedback',
        component: () => import('./views/Task/Repair/Feedback.vue'),
        meta: {
          title: 'RepairFeedback',
          isShowFooter: false
        }
      },
    ],
    meta: {
      title: 'TaskSub',
      isShowFooter: true
    }
  },
  {
    path: '/Message',
    component: () => import('./views/Message/Index.vue'),
    children: [
      {
        path: '',
        name: 'MessageHome',
        component: () => import('./views/Message/Home/Index.vue'),
        meta: {
          title: 'MessageHome',
          isShowFooter: false
        }
      },
      {
        path: 'MessageAlarm',
        name: 'MessageAlarm',
        component: () => import('./views/Message/Alarm/List.vue'),
        meta: {
          title: 'MessageAlarm',
          isShowFooter: false
        }
      },
      {
        path: 'MessageAlarmDetail',
        name: 'MessageAlarmDetail',
        component: () => import('./views/Message/Alarm/Detail.vue'),
        meta: {
          title: 'MessageAlarmDetail',
          isShowFooter: false
        }
      },
      {
        path: 'MessageNotice',
        name: 'MessageNotice',
        component: () => import('./views/Message/Notice/List.vue'),
        meta: {
          title: 'MessageNotice',
          isShowFooter: false
        }
      },
      {
        path: 'MessageNoticeDetail',
        name: 'MessageNoticeDetail',
        component: () => import('./views/Message/Notice/Detail.vue'),
        meta: {
          title: 'MessageNoticeDetail',
          isShowFooter: false
        }
      }
    ],
    meta: {
      title: 'Message',
      isShowFooter: true
    }
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('./views/User/Index.vue'),
    meta: {
      title: 'User',
      isShowFooter: true
    }
  },
  {
    path: '/BasicUser',
    name: 'BasicUser',
    component: () => import('./views/User/BasicUser.vue'),
    meta: {
      title: 'BasicUser',
      isShowFooter: false
    }
  },
  {
    path: '/PasswordModify',
    name: 'PsswordModify',
    component: () => import('./views/User/PasswordModify.vue'),
    meta: {
      title: 'PasswordModify',
      isShowFooter: false
    }
  },
  {
    path: '/TaskQuery',
    name: 'TaskQuery',
    component: () => import('./views/TaskQuery/Index.vue'),
    meta: {
      title: 'TaskQuery',
      isShowFooter: false
    }
  },
  {
    path: '/TaskQueryList',
    name: 'TaskQueryList',
    component: () => import('./views/TaskQuery/List.vue'),
    meta: {
      title: 'TaskQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/AlarmQuery',
    name: 'AlarmQuery',
    component: () => import('./views/AlarmQuery/Index.vue'),
    meta: {
      title: 'AlarmQuery',
      isShowFooter: false
    }
  },
  {
    path: '/AlarmQueryList',
    name: 'AlarmQueryList',
    component: () => import('./views/AlarmQuery/List.vue'),
    meta: {
      title: 'AlarmQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/PipeQuery',
    name: 'PipeQuery',
    component: () => import('./views/PipeQuery/Index.vue'),
    meta: {
      title: 'PipeQuery',
      isShowFooter: false
    }
  },
  {
    path: '/PipeQueryList',
    name: 'PipeQueryList',
    component: () => import('./views/PipeQuery/List.vue'),
    meta: {
      title: 'PipeQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/PipeLineQuery',
    name: 'PipeLineQuery',
    component: () => import('./views/PipeLineQuery/Index.vue'),
    meta: {
      title: 'PipeLineQuery',
      isShowFooter: false
    }
  },
  {
    path: '/PipeLineQueryList',
    name: 'PipeLineQueryList',
    component: () => import('./views/PipeLineQuery/List.vue'),
    meta: {
      title: 'PipeLineQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/DeviceQuery',
    name: 'DeviceQuery',
    component: () => import('./views/DeviceQuery/Index.vue'),
    meta: {
      title: 'DeviceQuery',
      isShowFooter: false
    }
  },
  {
    path: '/DeviceQueryList',
    name: 'DeviceQueryList',
    component: () => import('./views/DeviceQuery/List.vue'),
    meta: {
      title: 'DeviceQueryList',
      isShowFooter: false
    }
  },
  {
    path: '/EnvironmentalMonitoring',
    name: 'EnvironmentalMonitoring',
    component: () => import('./views/EnvironmentalMonitoring/Index.vue'),
    meta: {
      title: 'EnvironmentalMonitoring',
      isShowFooter: false
    }
  },
  {
    path: '/EnvironmentalMonitoringList',
    name: 'EnvironmentalMonitoringList',
    component: () => import('./views/EnvironmentalMonitoring/List.vue'),
    meta: {
      title: 'EnvironmentalMonitoringList',
      isShowFooter: false
    }
  },
  {
    path: '/Statistic',
    name: 'Statistic',
    component: () => import('./views/Statistic/Index.vue'),
    meta: {
      title: 'Statistic',
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

