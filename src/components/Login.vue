<template>
  <div>
    <b-card class="mt-3" header="Connexion">
      <b-link href="/register" style="float:right;margin-top:-60px;">Créer un compte</b-link>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Identifiant:"
        label-for="input-1"
        description="Veuillez saisir un identifiant unique"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="email"
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
      <b-button type="reset" variant="danger">Reset</b-button>
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
        roles: [{ text: 'Selectionner', value: null }, 'Administrateur', 'Employé'],
        show: true
      }
    },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      const credential = {
        // id: Math.floor(Math.random() * 100000),
        username: this.username,
        password: this.password
      }

      this.$emit('user-login', credential)

      this.username = ''
      this.password = ''
    },
  },
}
</script>


