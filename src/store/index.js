import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import {apiCallToken} from '../axios'

let userInfo = JSON.parse(localStorage.getItem('userInfo'));

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    userId: '',
    admin: 0,
    //section post
    allPosts: [],
    myPosts: [],
    postId: '',
    postContent: "",
    postUrl: "",
    updatePost: "",
		updateUrl: "",
    //section commentaire
    allComments: [],
    commentContent: "",
   
  },
  mutations: {
    CHANGE_LOG(state) {
      if(localStorage.getItem('userInfo') !== null) {
        state.loggedIn = true;
      } else {
        state.loggedIn = false;
      }
    },
    GET_USER_BY_ID(state, data) {
      state.userId = data.userId;
      state.admin = data.admin;
      console.log(state.userId);
    },
    //section post
    GET_ALL_POSTS(state, data) {
      state.allPosts = data;
    },
    SEND_POST(state, payload) {
      state.postContent = payload.post;
      state.postUrl = payload.postUrl;
    },
    GET_MY_POSTS(state, data) {
      state.myPosts = data;
			console.log(state.myPosts);
    },
    GET_ONE_POST(state, data) {
      state.postId = data;
    },
    UPDATE_POST(state, payload) {
      state.updatePost = payload.updatePost;
      state.updateUrl = payload.updateUrl;
    },
    //section commentaire
    GET_ALL_COMMENTS(state, data) {
      state.allComments = data;
    },
    SEND_COMMENT(state, payload) {
      state.commentContent = payload;
    },  
  },
  actions: {
    //section user
    getUserId({commit}) {
      apiCallToken.get(`/${userInfo.token}`)
      .then((res) => {
        commit('GET_USER_BY_ID', res.data);
      })
      .catch((error) => console.log(error));
    },
    deleteUser() {
      apiCallToken.delete(`/${userInfo.token}`)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => console.log(error));
      localStorage.removeItem("userInfo");
      window.location = "http://localhost:8080/";
    },
    //section post
    getAllPosts(context) {
      apiCallToken.get('/')
      .then((res) => {
        context.commit('GET_ALL_POSTS', res.data)
      })
      .catch((error) => console.log(error));
    },
    sendPost(context) {
      apiCallToken.post("/", {
        userId: context.state.userId,
        postName: userInfo.name,
        postContent: context.state.postContent,
        postUrl: context.state.postUrl,
      })
        .then((resp) => {
          console.log(resp);
          document.location.reload();
        })
        .catch((error) => console.log(error));
    },
    getMyPosts(context) {
      apiCallToken.get(`/${userInfo.token}`)
      .then((res) => {
        let userId = res.data.userId;
        apiCallToken.get(`/${userId}/post`)
          .then((res) => {
            context.commit('GET_MY_POSTS', res.data)
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    },
    getOnePost({commit, state}) {
      apiCallToken.get(`/post/${state.postId}`)
      .then((res) => {
        commit('SINGLE_POST', res.data);
      })
      .catch((error) => console.log(error));
    },
    deletePost(context) {
      apiCallToken.delete(`/post/${context.state.postId}`)
      .then((resp) => {
        console.log(resp);
        router.push("/home");
      })
      .catch((error) => console.log(error));
    },
    sendUpdatePost(context) {
      console.log(context.state.updateUrl);
        apiCallToken.put(`/post/${context.state.postId}`, {
          postContent: context.state.updatePost,
          postUrl: context.state.updateUrl
        })
        .then((resp) => {
          console.log(resp);
          document.location.reload();
        })
        .catch((error) => console.log(error));
    },
    //section commentaire
    getAllComments(context) {
      apiCallToken.get(`/comment/${context.state.postId}`)
        .then((res) => {
          context.commit('GET_ALL_COMMENTS', res.data)
        })
        .catch((error) => console.log(error));
    },
    sendComment(context) {
      apiCallToken.post("/comment", {
        userId: context.state.userId,
        commentName: userInfo.name,
        postId: context.state.postId,
        commentContent: context.state.commentContent
      })
      .then((resp) => {
        console.log(resp);
        document.location.reload();
      })
      .catch((error) => console.log(error)); 
    },
    deleteComment(context, commentId) {
      console.log(context);
      apiCallToken.delete(`/comment/${commentId}`)
        .then((resp) => {
          console.log(resp);
          document.location.reload();
        })
        .catch((error) => console.log(error));
    },
    
  },
})
