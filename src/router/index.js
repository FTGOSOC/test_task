import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectView from "@/views/SelectView.vue";
import TooltipView from "@/views/TooltipView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/select',
    name: 'select',
    component: SelectView
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: TooltipView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
