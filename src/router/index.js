import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingFormInput from '../views/DataBindingFormInput.vue'
import DataBindingFormNumber from '../views/DataBindingFormNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheck from '../views/DataBindingCheck.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingImg from '../views/DataBindingImg.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingClass2 from '../views/DataBindingClass2.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingStyle2 from '../views/DataBindingStyle2.vue'
import DataBindingList from '../views/DataBindingList.vue'
import DataBindingIf from '../views/DataBindingIf.vue'
import DataBindingShow from '../views/DataBindingShow.vue'
import EventOn from '../views/EventOn.vue'
import EventChange from '../views/EventChange.vue'
import EventKey from '../views/EventKey.vue'
import DataComputed from '../views/DataComputed.vue'
import DataWatch from '../views/DataWatch.vue'
import DataBindingList2 from '../views/DataBindingList2'

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
    component: DataBinding
  },
  {
    path: '/dataBindingHtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/dataBindingFormInput',
    name: 'DataBindingFormInput',
    component: DataBindingFormInput
  },
  {
    path: '/dataBindingFormNumber',
    name: 'DataBindingFormNumber',
    component: DataBindingFormNumber
  },
  {
    path: '/dataBindingTextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/dataBindingSelect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/dataBindingCheck',
    name: 'DataBindingCheck',
    component: DataBindingCheck
  },
  {
    path: '/dataBindingRadio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/dataBindingImg',
    name: 'DataBindingImg',
    component: DataBindingImg
  },
  {
    path: '/dataBindingClass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/dataBindingClass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/dataBindingButton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/dataBindingStyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/dataBindingStyle2',
    name: 'DataBindingStyle2',
    component: DataBindingStyle2
  },
  {
    path: '/dataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/dataBindingIf',
    name: 'DataBindingIf',
    component: DataBindingIf
  },
  {
    path: '/dataBindingShow',
    name: 'DataBindingShow',
    component: DataBindingShow
  },
  {
    path: '/eventOn',
    name: 'EventOn',
    component: EventOn
  },
  {
    path: '/eventChange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/eventKey',
    name: 'EventKey',
    component: EventKey
  },
  {
    path: '/dataComputed',
    name: 'DataComputed',
    component: DataComputed
  },
  {
    path: '/dataWatch',
    name: 'DataWatch',
    component: DataWatch
  },
  {
    path: '/dataBindingList2',
    name: 'DataBindingList2',
    component: DataBindingList2
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
