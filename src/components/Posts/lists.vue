<template>
  <div class="about">
    <div v-for="post in Posts" :key="post.id" class="eachPost">
          <Post
          @show-post="$emit('show-post')" 
          :post="post"/>
        </div>
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  name:'home',
  data() {
    return {
      Posts:Array
    }
  },
  components:{
    Post,
  },
  created() {
    this.GetAllPosts();
  },
  methods:{
    async GetAllPosts() {
      let { data } = await fetch('http://localhost:3000/Posts',
      {
        headers:{'Content-Type':'Application/json'},
        methods:'Get'
      })
      .then(response => response.json())
      .then(data => data)

      this.Posts = data;
    }
  }
}
</script>

<style scoped lang="scss">
.home_container {
  display: flex;
  justify-content: center;
  .flex {
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .title_name {
    text-transform: capitalize;
  }
  #username {
    padding: 15px 0 5px 0;
    font-size: 1.2rem;
    font-weight: bolder;
    @media (min-width: 1024px) {
      font-size: 1.5rem;
      width: 200px;
    }
  }
  .sendPost {
    margin: 30px 0;
    @media (min-width: 1024px) {
    }
  }
  .eachPost {
    width: 90vw;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
    box-shadow: 1px 0px 10px 4px lightgray;
    transition: 0.5s;
    @media (min-width: 768px) {
      width: 60vw;
    }
    .post_header {
      border-bottom: solid 2px #d7d7ff;
      .post_name {
        text-transform: capitalize;
        color: #7a49a5;
        font-weight: bolder;
      }
    }
    .post_body {
      padding: 20px 0;
    }

    .postContent {
      font-size: 1.2rem;
      word-break: break-word;
    }
    .postUrl {
      color: #00458b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 2px 10px;
      @media (min-width: 768px) {
        margin: 2px 60px;
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
