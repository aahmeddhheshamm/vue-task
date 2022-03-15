<template>
  <div class="home">
    <b-button @click="addPage()" variant="primary">Add New User</b-button>
    <AllUsers /> 
  </div>
</template>

<script>
import AllUsers from '../components/AllUsers.vue';
export default {
  name: "Home",
  components: {
    AllUsers,
  },
  methods:{
    addPage(){
      this.$router.push({name: "new"});
    }
  }
};
</script>
