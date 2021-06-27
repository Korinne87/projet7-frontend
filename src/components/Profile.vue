<template>
  <div>
    <NavBar  :isAdmin="isAdmin" :user="user" />
    <b-row>
      <b-col cols="3" style="padding-right:0px;">
        <b-card
          :title="form.username"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;padding-right:0;"
          class="mb-2"
        >
        <b-card-text>
        {{ user.Bio }}
        </b-card-text>
      </b-card>
      </b-col>
      <b-col style="padding-left:0px;">
         <b-card header="PROFILE :: Informations Générales">
             <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="input-group-2" label="Noms:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="user.firstname"
                  placeholder="Entrer votre Nom"
                  disabled
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Prénoms:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="user.lastname"
                  placeholder="Entrer votre Prénom"
                  disabled
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Genre" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="user.sexe" :aria-describedby="ariaDescribedby" name="sexe" value="1">Masculin</b-form-radio>
                <b-form-radio v-model="user.sexe" :aria-describedby="ariaDescribedby" name="sexe" value="0">Feminin</b-form-radio>
              </b-form-group>

              <b-form-group id="input-group-3" label="Role:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="role"
                  :options="roles"
                  disabled
                ></b-form-select>
              </b-form-group>
            </b-form>
         </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import NavBar from './NavBar.vue'
export default {
  data() {
    return {
      form: {
        surname:'',
        name:'',
        email:'',
        bio:'',
        sexe: 'F',
        username:'DOCTORE',
        role: ''
      },
      roles: [{ text: 'Selectionner', value: null }, 'Administrateur', 'Employé'],
      show:true,
      isAdmin:false,
      user:Object
    }
  },
  components: {
    NavBar,
  },

  computed: {
    role: {
      get() {
        return this.user.IsAdmin == 1 ? 'Administrateur' : 'Employé';
      }
    }
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

