<script>
export default {
  name: "SingleMovie",
  props: {
    info: Object,
  },
};
</script>

<template>
  <div>
    <h2>{{ info.title }}</h2>
    <div>{{ info.original_title }}</div>
    <div class="lingua originale">{{ info.original_language }}</div>
    <div>{{ info.vote_average }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
