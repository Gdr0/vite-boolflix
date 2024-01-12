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
    <div>{{ info.vote_average }}</div>
    <div class="copertina">
      <img :src="getPoster(info.poster_path)" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
