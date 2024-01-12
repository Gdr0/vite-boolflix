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
      let PosterUrl = `https://image.tmdb.org/t/p/w342/${poster}`;
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
  <div class="container">
    <div class="card-movie">
      <div class="copertina">
        <img :src="getPoster(info.poster_path)" alt="" />
      </div>
      <div class="descrizione d-flex flex-column">
        <h5>{{ info.title || info.name }}</h5>
        <div class="lingua originale">{{ info.original_language }}</div>
        <div class="stars">
          <span v-for="stars in scoreAverege(info.vote_average)">
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
        <div class="sinossi">{{ info.overview }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// div {

// }
.card-movie {
  width: 342px;
  color: white;
  position: relative;
  display: inline-block;
}
.copertina {
  position: relative;
}
.descrizione {
  height: 513px;
  background-color: black;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 342px;
  transition: opacity 0.3s ease;
  padding: 5px;
}
.card-movie:hover .descrizione {
  opacity: 1;
}
i {
  color: gold;
}
</style>
