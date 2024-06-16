<template>
  <div>
    <a-input v-model:value="searchName" placeholder="Введіть назву фільму" />
    Знайти книгу: <a-button @click="goToBookPage">Знайти книгу</a-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { encode } from "html-entities";
export default defineComponent({
  name: "book-search",
  props: {
    goToMovieData: {
      type: String,
      default: `this.$router.push({
        name: "moviePage",
        params: { movieName: this.searchName },
      })`,
    },
  },
  setup(props) {
    const searchName = ref("");
    return {
      searchName,
      encode,
    };
  },
  methods: {
    goToMoviePage() {
      eval(this.goToMovieData);
    },
  },
});
</script>

<style scoped></style>
