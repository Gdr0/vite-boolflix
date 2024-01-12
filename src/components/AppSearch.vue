<script>
import { store } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
  methods: {
    handleSearch() {
      this.$emit("search");
    },

    onEnterKey(event) {
      if (event.key === "Enter") {
        this.handleSearch();
      }
    },
  },
};
</script>
<template>
  <form class="d-flex">
    <input
      class="me-2 rounded"
      type="search"
      placeholder=""
      aria-label="Search"
      v-model="store.FindMovie"
      @keyup="onEnterKey"
    />
    <button @click.prevent="handleSearch()" class="btn" type="submit">
      SEARCH
    </button>
  </form>
</template>

<style lang="scss" scoped>
.btn {
  background-color: red;
}
</style>
