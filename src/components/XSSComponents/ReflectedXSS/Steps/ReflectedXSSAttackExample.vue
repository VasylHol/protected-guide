<template>
  <div>
    <div style="display: flex; flex-direction: column; align-items: center">
      <div class="attack-info">
        <span
          ><b>Об'єкт атаки</b>: Cторінка відображення детальної інформації про
          книгу</span
        >
        <span
          ><b>Flow</b>: id фільму передається через URL параметр і повертає
          певну інфомацію
        </span>
      </div>
      <span><b>Компонент пошуку фільму</b></span>
      <div style="display: flex; justify-content: space-around; width: 100%">
        <pre style="min-width: 300px; font-size: 12px">
        <code class="language-markup">{{apiExample}}</code>
        </pre>
        <pre style="min-width: 300px; font-size: 12px">
        <code class="language-markup">{{apiExample}}</code>
        </pre>
      </div>

      <span
        >Відтворіть атаку самостійно (Вставте певний злоякісний код у параметр
        URL)</span
      >
      <!-- <a-input v-model:value="dynamicUrl" /> -->
      <!-- <iframe
        :src="dynamicUrl"
        style="width: 100%; height: 300px; border: 1px solid black"
        frameborder="0"
      ></iframe> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default defineComponent({
  name: "reflected-xss-attack-example",
  setup() {
    const code = `
<template>
  <div id="app">
    <h1>Movie Details</h1>
    <div v-if="movieId">
      <h2>Movie ID: {{ movieId }}</h2>
      <div v-html="movieDetails"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movieId: null,
      movieDetails: ''
    };
  },
  created() {
    this.movieId = this.$route.query.id;
    this.fetchMovieDetails();
  },
  methods: {
    async fetchMovieDetails() {
      try {
        const response = await axios.get(\`http://localhost:3000/api/movie\`, {
          params: { id: this.movieId }
        });
        this.movieDetails = response.data;
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
  }
};
</\script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
`;
    const apiExample = `
<template>
  <div>
    <a-input v-model:value="searchName" placeholder="Введіть назву фільму"/>
    Знайти книгу: <a-button @click="">Test</a-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "book-search",
  props: { dataElement: { type: String, required: true } },
  setup(props) {
    const searchName = ref("");
    return {
        searchName
    };
  },
  methods: {
  goToMoviePage() {
      this.$router.push({
        name: "moviePage",
        params: { movieName: this.searchName },
      });
    },
  }
});
</\script>`;
    return {
      code,
      apiExample,
    };
  },
  data() {
    return {
      dynamicUrl: "http://localhost:8080/xss-attacks",
    };
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  },
});
</script>

<style lang="scss" scoped>
.attack-info {
  display: flex;
  flex-direction: column;
  padding: 12px;
  align-self: flex-start;
  span {
    text-align: left;
  }
}
</style>
