<template>
  <a-input v-model:value="userInfo"></a-input>
  <div style="display: flex; justify-content: center">
    <a-button @click="addTextWithFormat" style="margin-top: 8px"
      >Додати елемент</a-button
    >
  </div>

  <div v-html="formattedText"></div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "vunarable-stored",
  setup() {
    return {};
  },
  data() {
    return {
      userInfo: "",
      formattedText: "",
    };
  },
  methods: {
    addTextWithFormat() {
      this.formattedText = `<h6>${this.userInfo}</h6>`;
    },
  },
});
</script>

<style scoped></style>
