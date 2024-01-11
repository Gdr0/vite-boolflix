import { reactive } from "vue";

export const store = reactive({
  MoviesList: [],

  apiURL:
    "https://api.themoviedb.org/3/search/movie?api_key=1831b973eee08390ec2b5a9f650db9f5&query=",
  FindMovie: "",
});
