<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import MovieList from "./components/MovieList.vue";
import { store } from "./store";
export default {
  components: {
    AppHeader,
    MovieList,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovies() {
      let myUrl = `${store.apiURL}${store.FindMovie}`;
      console.log(myUrl);
      axios
        .get(myUrl)
        .then((res) => {
          store.MoviesList = res.data.results;
          console.log(store.MoviesList);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
      let TvmyUrl = `${store.tvApiURL}${store.FindMovie}`;
      console.log(TvmyUrl);
      axios
        .get(TvmyUrl)
        .then((res) => {
          store.SeriesList = res.data.results;
          console.log(store.SeriesList);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
      store.tutto = [...store.MoviesList, ...store.SeriesList];
      console.log(store.MoviesList);
    },
    // },
    created() {
      this.getMovies();
    },
  },
};
</script>

<template>
  <AppHeader @search="getMovies()" />
  <MovieList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
