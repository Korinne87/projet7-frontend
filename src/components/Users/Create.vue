<template>
  <div>
    
    <b-card class="mt-3" header="Inscription">
       <b-link href="/" style="float:right;margin-top:-60px;">J'ai déjà un compte</b-link>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Psuedo:"
        label-for="input-1"
        description="Veuillez saisir un pseudo unique"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Entrer votre pseudo"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Mot de Passe:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.password"
          type="password"
          placeholder="Entrer votre mot de passe"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Noms:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstname"
          placeholder="Entrer votre Nom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Prénoms:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          placeholder="Entrer votre Prénom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Adresse Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Entrer votre adresse email"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group label="Genre" v-slot="{ ariaDescribedby }">
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="sexe" value="H">Masculin</b-form-radio>
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="sexe" value="F">Feminin</b-form-radio>
      </b-form-group>
      <b-form-group label="Biographie:">

        <b-form-textarea
      id="textarea"
      v-model="form.bio"
      placeholder="Entrer une bref description de vous"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>
       

      <b-form-group id="input-group-3" label="Role:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.role"
          :options="roles"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Créer</b-button>
      <b-button type="reset" variant="danger">Effacer</b-button>
    </b-form>
    </b-card>
  </div>
</template>



<script>

  
  export default {
    data() {
      return {
        form: {
          email: '',
          firstname: '',
          lastname: '',
          bio:'',
          password: '',
          username: '',
          role: null
        },
        roles: [{ text: 'Selectionner', value: null }, 'Administrateur', 'Employé'],
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        const user = {
          username: this.form.username,
          password: this.form.password,
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          sexe: this.form.sexe == 'H' ? 1 : 0, // 1 = masculin et 0 = feminin
          bio: this.form.bio,
          email: this.form.email,
          isAdmin:this.form.role == 'Administrateur' ? true: false
        }
        let url = 'http://localhost:3000/user'
        this.createUser(url,user)
        .then(data => {
          console.log(data);
           if(data.success == true) {
             alert(data.message);
              this.form.email = ''
              this.form.firstname = ''
              this.form.username = ''
              this.form.password = ''
              this.form.bio = ''
              this.form.lastname = ''
              this.form.role = null
           }
        })
        .catch(err => {
          alert(err.message);
        });
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.firstname = ''
        this.form.username = ''
        this.form.password = ''
        this.form.bio = ''
        this.form.lastname = ''

        this.form.role = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async createUser(url = '', user = {}) {
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) 
          });
          return response.json(); 
      }
    }
  }
</script>

