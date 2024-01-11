<script>
import SingleMovie from "./SingleMovie.vue";
export default {
  name: "MovieList",
  components: {
    SingleMovie,
  },
};
</script>

<template>
  <section class="conteiner-fluid">
    <div class="row">
      <div class="col-6 col-md-4 col-lg-2 mb-5">
        <SingleMovie />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
