<script>
import { store } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <form class="d-flex">
    <input
      class="me-2 rounded"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="store.FindMovie"
    />
    <button @click.prevent="$emit('search')" class="btn" type="submit">
      Search
    </button>
  </form>
</template>

<style lang="scss" scoped>
.btn {
  background-color: red;
}
</style>
