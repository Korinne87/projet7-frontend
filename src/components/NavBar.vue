<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/index">Acceuil</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/multimedia">Multimedia</b-nav-item>
        <b-nav-item href="/texte">Texte</b-nav-item>
         <b-nav-item href="/users" v-if="isAdmin">Utilisateurs</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Recherche"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FR</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ fullname }}</em>
          </template>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="logOut">Deconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
   props: ['isAdmin','user'],
   computed: {
     fullname:{
       get(){
          return this.user.firstname + ' ' + this.user.lastname
       }    
     }
   },
    methods: {
      logOut() {
        // quand on click sur se deconnecter je supprime toutes les sessions et je renvoie le user a la page de login
        this.$session.destroy();
        this.$router.push('/');
      }
    }
}
</script>