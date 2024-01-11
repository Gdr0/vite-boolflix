import { reactive } from "vue";

export const store = reactive({
  MoviesList: [],
  SeriesList: [],
  tutto: [],

  apiURL:
    "https://api.themoviedb.org/3/search/movie?api_key=1831b973eee08390ec2b5a9f650db9f5&query=",
  tvApiURL:
    "https://api.themoviedb.org/3/search/tv?api_key=1831b973eee08390ec2b5a9f650db9f5&language=it_IT&query=",
  FindMovie: "",
});
