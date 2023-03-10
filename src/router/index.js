import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: () => import('../views/DataBinding.vue')
  },
  {
    path: '/dataBindingHtml',
    name: 'DataBindingHtml',
    component: () => import('../views/DataBindingHtml.vue')
  },
  {
    path: '/dataBindingFormInput',
    name: 'DataBindingFormInput',
    component: () => import('../views/DataBindingFormInput.vue')
  },
  {
    path: '/dataBindingFormNumber',
    name: 'DataBindingFormNumber',
    component: () => import('../views/DataBindingFormNumber.vue')
  },
  {
    path: '/dataBindingTextarea',
    name: 'DataBindingTextarea',
    component: () => import('../views/DataBindingTextarea.vue')
  },
  {
    path: '/dataBindingSelect',
    name: 'DataBindingSelect',
    component: () => import('../views/DataBindingSelect.vue')
  },
  {
    path: '/dataBindingCheck',
    name: 'DataBindingCheck',
    component: () => import('../views/DataBindingCheck.vue')
  },
  {
    path: '/dataBindingRadio',
    name: 'DataBindingRadio',
    component: () => import('../views/DataBindingRadio.vue')
  },
  {
    path: '/dataBindingImg',
    name: 'DataBindingImg',
    component: () => import('../views/DataBindingImg.vue')
  },
  {
    path: '/dataBindingClass',
    name: 'DataBindingClass',
    component: () => import('../views/DataBindingClass.vue')
  },
  {
    path: '/dataBindingClass2',
    name: 'DataBindingClass2',
    component: () => import('../views/DataBindingClass2.vue')
    
  },
  {
    path: '/dataBindingButton',
    name: 'DataBindingButton',
    component: () => import('../views/DataBindingButton.vue')
  },
  {
    path: '/dataBindingStyle',
    name: 'DataBindingStyle',
    component: () => import('../views/DataBindingStyle.vue')
  },
  {
    path: '/dataBindingStyle2',
    name: 'DataBindingStyle2',
    component: () => import('../views/DataBindingStyle2.vue')
  },
  {
    path: '/dataBindingList',
    name: 'DataBindingList',
    component: () => import('../views/DataBindingList.vue')
  },
  {
    path: '/dataBindingIf',
    name: 'DataBindingIf',
    component: () => import('../views/DataBindingIf.vue')
  },
  {
    path: '/dataBindingShow',
    name: 'DataBindingShow',
    component: () => import('../views/DataBindingShow.vue')
  },
  {
    path: '/eventOn',
    name: 'EventOn',
    component: () => import('../views/EventOn.vue')
  },
  {
    path: '/eventChange',
    name: 'EventChange',
    component: () => import('../views/EventChange.vue')
  },
  {
    path: '/eventKey',
    name: 'EventKey',
    component: () => import('../views/EventKey.vue')
  },
  {
    path: '/dataComputed',
    name: 'DataComputed',
    component: () => import('../views/DataComputed.vue')
  },
  {
    path: '/dataWatch',
    name: 'DataWatch',
    component: () => import('../views/DataWatch.vue')
  },
  {
    path: '/dataBindingList2',
    name: 'DataBindingList2',
    component: () => import('../views/DataBindingList2')
  },
  {
    path: '/NestedComponent',
    name: 'NestedCOmponent',
    component: () => import('../views/NestedComponent')
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: () => import('../views/ParentComponent')
  },
  {
    path: '/ParentComponent2',
    name: 'ParentComponent2',
    component: () => import('../views/ParentComponent2')
  },
  {
    path: '/ParentComponent3',
    name: 'ParentComponent3',
    component: () => import('../views/ParentComponent3')
  },
  {
    path: '/ParentComponent4',
    name: 'ParentComponent4',
    component: () => import('../views/ParentComponent4')
  },
  {
    path: '/ParentComponent5',
    name: 'ParentComponent5',
    component: () => import('../views/ParentComponent5')
  },
  {
    path: '/SlotUseModalLayout',
    name: 'SlotUseModalLayout',
    component: () => import('../views/SlotUseModalLayout')
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: () => import('../views/ProvideInject')
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    component: () => import('../views/Calculator')
  },
  {
    path: '/CompositionAPI',
    name: 'CompositionAPI',
    component: () => import('../views/CompositionAPI')
  },
  {
    path: '/CompositionAPI2',
    name: 'CompositionAPI2',
    component: () => import('../views/CompositionAPI2')
  },
  {
    path: '/CompositionAPI3',
    name: 'CompositionAPI3',
    component: () => import('../views/CompositionAPI3')
  },
  {
    path: '/CompositionAPI4',
    name: 'CompositionAPI4',
    component: () => import('../views/CompositionAPI4')
  },
  {
    path: '/CompositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: () => import('../views/CompositionAPIProvide')
  },
  {
    path: '/CustomDirective',
    name: 'CustomDirective',
    component: () => import('../views/CustomDirective')
  },
  {
    path: '/MyPlugins',
    name: 'MyPlugins',
    component: () => import('../views/MyPlugins')
  },
  {
    path: '/StoreAccess',
    name: 'StoreAccess',
    component: () => import('../views/StoreAccess')
  },
  {
    path: '/login',
    name: 'KakoLogin',
    component: () => import('../views/KakaoLogin.vue')
  },
  {
    path: '/naverlogin',
    name: 'NaverLogin',
    component: () => import('../views/NaverLogin.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
