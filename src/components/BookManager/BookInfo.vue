<template>
  <!-- <div v-html="$route.query.name"></div> -->
  <div>{{}}</div>
</template>

<script>
import { defineComponent } from "vue";
// import DOMPurify from "dompurify";
export default defineComponent({
  name: "book-info",
  setup() {
    return {};
  },
  data() {
    return {
      decodedPayload: "",
    };
  },
  methods: {},

});
</script>

<style scoped></style>
