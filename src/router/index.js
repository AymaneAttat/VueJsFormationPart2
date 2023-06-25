import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/blog/index.vue'
import Show from '../views/blog/Show.vue'
import Create from '../views/blog/Create.vue'
import Edit from '../views/blog/Edit.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id/:slug',
    name: 'post-show',
    component: Show,
    props: true
  },
  {
    path: '/posts',
    redirect: '/blog'
  },
  {
    path: '/post/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/post/edit/:id',
    name: 'Edit',
    component: Edit,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
