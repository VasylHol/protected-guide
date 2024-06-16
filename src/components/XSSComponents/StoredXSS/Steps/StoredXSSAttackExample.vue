<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title :level="3"
        ><b>Об'єкт атаки:</b> Поле вводу користувача</a-typography-title
      >
      <a-typography-title :level="4"
        ><b>Flow:</b> Поле використовується для відображення впровадженого
        тексту у DOM-дереві з певним форматуванням</a-typography-title
      >
      <a-typography-paragraph
        >Розглянемо вразливий компонент</a-typography-paragraph
      >
      <pre style="min-width: 300px; font-size: 14px">
        <code class="language-markup">{{code}}</code>
        </pre>
      <a-typography-text style="font-size: 16px" strong>
        <a-typography-title :level="3">Відтворення атаки</a-typography-title>
        Вітворіть атаку, вписавши в
        <a-typography-text code>input</a-typography-text> такий
        елемент<a-typography-text code
          >&lt;img src="x" onerror="alert(2)"/&gt;</a-typography-text
        >
      </a-typography-text>
      <vunarable-stored />
    </a-typography>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Prism from "prismjs";
import "prismjs/components/prism-git";
import "prismjs/themes/prism.css";
import VunarableStored from "@/components/VunarableStored.vue";
export default defineComponent({
  name: "stored-xss-attack-example",
  components: { VunarableStored },
  setup() {
    const code = `
<template>
  <a-input v-model:value="userInfo"></a-input>
  <a-button @click="addTextWithFormat">Додати елемент</a-button>
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
        this.formattedText = \`<h6>\${this.userInfo}</h6>\`;
    },
  },
});
</\script>
`;
    return {
      code,
    };
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  },
});
</script>

<style scoped></style>
