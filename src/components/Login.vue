<template>
  <div>
    <b-card class="mt-3" header="Connexion">
      <b-link href="/register" style="float:right;margin-top:-60px;">Créer un compte</b-link>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Pseudo:"
        label-for="input-1"
        description="Veuillez saisir un identifiant unique"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Entrer votre identifiant"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Mot de passe" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Entrer votre Nom"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Connexion</b-button>
      <b-button type="reset" variant="danger">Effacer</b-button>
    </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
        form: {
          username: '',
          password: '',
        },
        show: true
      }
    },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      const credential = {
        // id: Math.floor(Math.random() * 100000),
        username: this.form.username,
        password: this.form.password
      }

      this.Login(credential).then(data => {
        console.log(data);
        if(data.exist == true) {
          // demarrer une session
          this.$session.start();
          // garder tout l'objet utilisateur dans la variable de session
          this.$session.set('user',data.user);
          // redirection vers un lien
          this.$router.push('/index');
        }
        else
          alert('Compte et/ou mot de passe incorrecte');
      })
      this.username = ''
      this.password = ''
    },

    async Login(credentials) {
      const response = await fetch('http://localhost:3000/user/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(credentials)
      });
      return response.json();
    }
  },
}
</script>


