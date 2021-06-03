import Vue from 'vue'
import VueRouter from 'vue-router'
import Connection from '../views/Connection.vue'
import CreateUser from '../components/CreateUser.vue'
import Profil from '../components/Profil.vue'
import Post from '../components/Post.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connection',
    component: Connection
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/createUser',
    name: 'createUser',
    component: CreateUser
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
