<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import Service from "../services/api";
export default {
  data() {
    return {
      form: {
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
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
    },
    getUser() {
      Service.getUserInfo(this.$route.params.id).then((res) => {
        this.form.firstName = res.data.firstName;
        this.form.lastName = res.data.lastName;
        this.form.email = res.data.email;
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>