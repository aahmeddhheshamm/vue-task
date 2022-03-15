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
          class="w-25"
          :src="
            data.item.picture
              ? data.item.picture
              : 'https://tse4.mm.bing.net/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&pid=Api&P=0&w=167&h=167'
          "
          rounded="circle"
          alt="Circle image"
        ></b-img>
      </template>
      <template #cell(actions)="data">
        <b-button @click="goEdit(data.item.id)" variant="success"
          >Edit</b-button
        >
        <b-button @click="deleteUser(data.item.id)" variant="danger"
          >Delete</b-button
        >
      </template>
    </b-table>
    <div class="pagin">
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
    deleteUser(id) {
      this.$swal({
        title: "Are you sure?",
        text: "Are you sure that you want to leave this page?",
        icon: "warning",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          Service.deleteUser(id).then(() => {
            this.$swal(
              "Deleted!",
              "Your imaginary file has been deleted!",
              "success"
            );
            this.getAllUsers();
          });
        }
      });
    },
  },
  created() {
    this.getAllUsers();
  },
};
</script>
<style scoped>
.pagin {
  margin: auto;
  width: 50%;
  margin-bottom: 50px;
  margin-top: 30px;
}
</style>