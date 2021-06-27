import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Create from '../components/Users/Create.vue'
import Profile from '../components/Users/Profile.vue'
import Posts from '../components/Posts/lists.vue'
import Home from '../components/Home.vue'
import Multimedia from '../components/Multimedia.vue'
import Texte from '../components/Texte.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/posts',
    name: 'Posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Posts
  },
  {
    path: '/register',
    name: 'Register',
    component: Create
  },
  {
    path: '/profile',
    name: 'Profil',
    component: Profile
  },
  {
    path: '/Index',
    name: 'home',
    component: Home
  },
  {
    path: '/multimedia',
    name: 'multimedia',
    component: Multimedia
  },
  {
    path: '/texte',
    name: 'texte',
    component: Texte
  },


  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
