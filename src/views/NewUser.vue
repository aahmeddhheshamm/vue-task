<template>
  <div class="home">
    <AddUser /> 
  </div>
</template>

<script>
import AddUser from '../components/AddUser.vue'
export default {
  name: "Home",
  components: {
    AddUser,
  },
};
</script>
