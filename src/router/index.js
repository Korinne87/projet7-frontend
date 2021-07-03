import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Create from '../components/Users/Create.vue'
import Profile from '../components/Profile.vue'
import Posts from '../components/Posts/lists.vue'
import Home from '../components/Home.vue'
import Multimedia from '../components/Multimedia.vue'
import Texte from '../components/Texte.vue'
import Users from '../components/Users.vue'
import Comment from '../components/comment.vue'




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
    name: 'Profile',
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
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/comment',
    name: 'comment',
    component: Comment
  },

  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
