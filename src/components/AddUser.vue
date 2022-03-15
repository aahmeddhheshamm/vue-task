<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-2" label="Your Title:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.title"
          placeholder="Enter Title"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Your First Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.firstName"
          placeholder="Enter first name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Your Last Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          placeholder="Enter last name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import Service from "../services/api";
export default {
  data() {
    return {
      form: {
        title: "",
        firstName: "",
        lastName: "",
        email: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.addUser();
    },
    addUser() {
      Service.addUser(this.form).then((res) => {
          console.log(res)
        this.$router.push({name: "Home"});
        this.$swal('Add successful');
      });
    },
  },
};
</script>