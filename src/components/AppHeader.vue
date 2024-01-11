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
  <div class="container-fluid d-flex justify-content-between pt-3">
    <div class="logo">BOOLFLIX</div>
    <div>
      <AppSearch @search="getMovies()" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  height: 200px;
  background-color: black;
  .logo {
    font-size: large;
    font-weight: bold;
    color: red;
  }
}
</style>
