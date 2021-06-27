<template>
  <div>
    
    <b-card class="mt-3" header="Inscription">
       <b-link href="/" style="float:right;margin-top:-60px;">J'ai déjà un compte</b-link>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Identifiant:"
        label-for="input-1"
        description="Veuillez saisir un identifiant unique"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Entrer votre identifiant"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Noms:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Entrer votre Nom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Prénoms:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.surname"
          placeholder="Entrer votre Prénom"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group label="Genre" v-slot="{ ariaDescribedby }">
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="sexe" value="H">Masculin</b-form-radio>
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="sexe" value="F">Feminin</b-form-radio>
      </b-form-group>

      <b-form-group id="input-group-3" label="Role:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.role"
          :options="roles"
          required
        ></b-form-select>
      </b-form-group>

      <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

     

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
          name: '',
          surname: '',
          role: null,
          checked: []
        },
        roles: [{ text: 'Selectionner', value: null }, 'Administrateur', 'Employé'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

