<script>
export default {
  name: "SingleMovie",
  props: {
    info: Object,
  },
  methods: {
    getFlagPath(language) {
      let flagPath = `../assets/img/${language}.svg`;
      console.log("Flag Path:", flagPath);
      return flagPath;
    },

    getPoster(poster) {
      let PosterUrl = `https://image.tmdb.org/t/p/w200/${poster}`;
      console.log(PosterUrl);
      return PosterUrl;
    },
    scoreAverege(score) {
      let newScore = Math.floor(score / 2);
      return newScore;
    },
  },
};
</script>

<template>
  <div>
    <h2>{{ info.title || info.name }}</h2>
    <div>{{ info.original_title }}</div>
    <div class="lingua originale">{{ info.original_language }}</div>
    <img
      :src="getFlagPath(info.original_language)"
      alt="info.original_language"
    />
    <div>{{ scoreAverege(info.vote_average) }}</div>
    <span v-for="stars in scoreAverege(info.vote_average)">
      <i class="fa-solid fa-star"></i>
    </span>
    <!-- <div class="copertina">
      <img :src="getPoster(info.poster_path)" alt="" />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
div {
  i {
    color: gold;
  }
}
</style>
