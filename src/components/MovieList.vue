<script>
import SingleMovie from "./SingleMovie.vue";
import { store } from "../store";
export default {
  name: "MovieList",
  components: {
    SingleMovie,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="container-fluid">
    <div class="row">
      <div v-for="movie in store.tutto" class="col-4 my-3">
        <SingleMovie :info="movie" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container-fluid {
  height: 100vw;
  background-color: #141414;
  .row {
    background-color: #141414;
  }
}
</style>
