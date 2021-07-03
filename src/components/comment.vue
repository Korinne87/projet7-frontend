<template>
  <div>
    <NavBar  :isAdmin="isAdmin" :user="user" />
    <b-card header="commentaires"></b-card>
  
  <b-card>
    <b-avatar src="https://placekitten.com/300/300"></b-avatar>  
        <b-card-text>
        commentaire 1
    </b-card-text>
  </b-card>


  <b-card>
    <b-avatar src="https://placekitten.com/300/300"></b-avatar>  
        <b-card-text>
      commentaire 2
    </b-card-text>
  </b-card>
</div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  data() {
    return {
      isAdmin:false,
      user:Object
    }
  },
  components: {
    NavBar,
  },

  created() {
    if(!this.$session.exists()) {
      this.$router.push('/');
    }
  
    this.user = this.$session.get('user')[0]; // prend les infos du user connecte dans la session
    this.isAdmin = this.user.IsAdmin == 1 ? true : false; // regarde sa propriétét isadmin pour savoir si il est admin ou pas
  }
}
</script>