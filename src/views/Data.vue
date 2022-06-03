<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>ЗДАРОВА АТЕЦ</strong>
      </h3>
    </header>
    <table v-if="!errored" class="table">
      <thead>
        <tr>
          <th scope="col">Модель</th>
          <th scope="col">Год</th>
          <th scope="col">Стоимость</th>
          <th scope="col">ID</th>
          <th scope="col">Марка</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in content" :key="car.id">
          <th scope="row">{{car.id}}</th>
          <td>{{car.Author}}</td>
          <td>{{car.Publisher}}</td>
          <td>{{car.name}}</td>
          <td>{{car.book_prize}}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p>сервер упал</p>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Data",
  data() {
    return {
      content: null,
      errored: false
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    UserService.getBooks().then(
      (response) => {
        this.content = response.data.list_of_books;
      },
      () => {
        this.errored = true;
      }
    );
  },
};
</script>