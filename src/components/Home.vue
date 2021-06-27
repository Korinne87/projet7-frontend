<template>
  <div>
      <NavBar :isAdmin="isAdmin" :user="user"/>
      <b-card header="Listes de sujets"></b-card>
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