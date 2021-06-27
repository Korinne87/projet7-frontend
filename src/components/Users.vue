<template>
  <div>
    <NavBar :isAdmin="isAdmin" :user="user" />
    <b-card header="Liste des utilisateurs">
        <b-table striped hover :items="items" v-if="isAdmin"></b-table>
    </b-card>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  data() {
    return {
      items:[],
      user:null,
      isAdmin:false
    }
  },
  components: {
    NavBar
  },
  async created(){
    // cette methiode est executer a chaque fois que le composant si est afficher
    // verifie si la session existe, si elle n'existe pas renvoie l'utilisateur a la page de connexion
    if(!this.$session.exists()) {
      this.$router.push('/')
    }
    fetch('http://localhost:3000/user',{
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
    .then(data => {
      console.log(data);
      this.items = data.data;
    });

    this.user = this.$session.get('user')[0];
    this.isAdmin = this.user.IsAdmin == 1 ? true : false;
  }
}
</script>