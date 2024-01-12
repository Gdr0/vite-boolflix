<script>
import AppSearch from "./AppSearch.vue";
export default {
  name: "AppHeader",
  components: {
    AppSearch,
  },
  methods: {
    getMovies() {
      this.$emit("search");
    },
  },
};
</script>

<template>
  <div
    class="container-fluid d-flex justify-content-between align-items-center"
  >
    <div class="logo">BOOLFLIX</div>
    <div><i class="fa-solid fa-star"></i></div>
    <div>
      <AppSearch @search="getMovies()" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  height: 70px;
  background-color: black;
  .logo {
    font-size: large;
    font-weight: bold;
    color: red;
  }
}
</style>
