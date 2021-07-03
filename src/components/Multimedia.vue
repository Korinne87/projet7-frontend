<template>
  <div>
       <NavBar  :isAdmin="isAdmin" :user="user" />
      <b-card header="Forum Multimedia"></b-card>

      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-avatar src="https://placekitten.com/300/300"></b-avatar>
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        <b-button href="/comment" variant="primary">Commenter</b-button>
      </b-col>
    </b-row>
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