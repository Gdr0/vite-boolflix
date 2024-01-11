<script>
// import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import MovieList from "./components/MovieList.vue";

export default {
  components: {
    AppHeader,
    MovieList,
  },
};
</script>

<template>
  <AppHeader />
  <MovieList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
