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
import NestedComponent from '../views/NestedComponent'
import ParentComponent from '../views/ParentComponent'
import ParentComponent2 from '../views/ParentComponent2'
import ParentComponent3 from '../views/ParentComponent3'
import ParentComponent4 from '../views/ParentComponent4'
import ParentComponent5 from '../views/ParentComponent5'
import SlotUseModalLayout from '../views/SlotUseModalLayout'
import ProvideInject from '../views/ProvideInject'
import Calculator from '../views/Calculator'
import CompositionAPI from '../views/CompositionAPI'
import CompositionAPI2 from '../views/CompositionAPI2'
import CompositionAPI3 from '../views/CompositionAPI3'
import CompositionAPI4 from '../views/CompositionAPI4'
import CompositionAPIProvide from '../views/CompositionAPIProvide'
import CustomDirective from '../views/CustomDirective'
import MyPlugins from '../views/MyPlugins'

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
  },
  {
    path: '/NestedComponent',
    name: 'NestedCOmponent',
    component: NestedComponent
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/ParentComponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/ParentComponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/ParentComponent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },
  {
    path: '/ParentComponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  },
  {
    path: '/SlotUseModalLayout',
    name: 'SlotUseModalLayout',
    component: SlotUseModalLayout
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/CompositionAPI',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/CompositionAPI2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/CompositionAPI3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  },
  {
    path: '/CompositionAPI4',
    name: 'CompositionAPI4',
    component: CompositionAPI4
  },
  {
    path: '/CompositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: CompositionAPIProvide
  },
  {
    path: '/CustomDirective',
    name: 'CustomDirective',
    component: CustomDirective
  },
  {
    path: '/MyPlugins',
    name: 'MyPlugins',
    component: MyPlugins
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
