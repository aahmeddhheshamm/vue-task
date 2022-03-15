<template>
  <div>
    <b-table striped hover :items="allUsers" :fields="fields" :busy="isBusy">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(picture)="data">
        <b-img
          :src="data.item.picture"
          rounded="circle"
          alt="Circle image"
        ></b-img>
      </template>
      <template #cell(actions)="data">
        <b-button @click="goEdit(data.item.id)" variant="success">Edit</b-button>
        <b-button variant="danger">Delete</b-button
        >
      </template>
    </b-table>
    
    <b-pagination
      v-model="page"
      :total-rows="totalRows"
      :per-page="perPage"
      align="fill"
      size="sm"
      class="my-0"
      @input="getAllUsers"
    ></b-pagination>
  </div>
</template>

<script>
import Service from "../services/api";
export default {
  data() {
    return {
      page: 1,
      totalRows: "",
      perPage: "",
      isBusy: false,
      allUsers: [],
      fields: [
        {
          key: "picture",
        },
        {
          key: "title",
        },
        {
          key: "firstName",
        },
        {
          key: "lastName",
        },
        {
          key: "actions",
        },
      ],
    };
  },
  methods: {
    getAllUsers() {
      this.isBusy = true;
      Service.getUsers(this.page)
        .then((res) => {
          this.allUsers = res.data.data;
          this.page = res.data.page;
          this.perPage = res.data.limit;
          this.totalRows = res.data.total;
        })
        .finally(() => {
          this.isBusy = false;
        });
    },
    goEdit(userId) {
      this.$router.push({ name: "Edit", params: { id: userId } });
    },
    // deleteUser() {
    //   Service.deleteUser(this.$route.params.id).then((res) => {
    //     res.data.id
    //       this.getAllUsers();
    //     })
    // },
  },
  created() {
    this.getAllUsers();
  },
};
</script>