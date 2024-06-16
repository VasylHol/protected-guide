<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>Елементи захисту</a-typography-title>
      <a-typography-paragraph>
        Коли ж необхідно, щоб користувачі могли створити певний HTML, розробники
        можуть дозволити користувачам змінювати стиль або структуру вмісту в
        редакторі WYSIWYG. Кодування виводу в цьому випадку буде перешкоджати
        XSS, але це порушить передбачувану функціональність програми. Стиль не
        буде виконаний. У цих випадках слід використовувати знезараження HTML.
        Ця процедура видалить небезпечні елементи й поверне безпечний рядок.
        Бібліотека
        <a-typography-text code>DOMPurify</a-typography-text> рекомендується
        багатьма спеціалістами для цих потреб.
        <pre style="font-size: 14px; display: flex; justify-content: center">
        <code class="language-javascript">npm i DOMPurify</code>
        </pre>
        <a-typography-paragraph>
          Дана бібліотека має словник небезпечних атрибутів, тегів, елементів,
          які можуть зашкодити додатку. Під час перевірки функція визначає всі
          ці небезпечні елементи, видаляє їх і передає уже безпечний HTML на
          подальшу обробку. Але
          слід зауважити, що потрібно регулярно оновлювати й перевіряти
          бібліотеки для знезараження HTML, які використовуються у додатку.
          Браузери регулярно змінюють функціонал і злочинці можуть знайти
          вразливість у цих змінах.
        </a-typography-paragraph>
        <a-typography-title :level="3">Захищений компонент</a-typography-title>
      </a-typography-paragraph>
      <pre style="font-size: 14px; display: flex">
        <code class="language-markup">{{code}}</code>
        </pre>
      <a-typography-title :level="3"
        >Відтворіть атаку ще раз (<a-typography-text code
          >&lt;img src="x" onerror="alert(2)"/&gt;</a-typography-text
        >)</a-typography-title
      >
      <non-vunarable-stored />
    </a-typography>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import NonVunarableStored from "@/components/NonVunarableStored.vue";
export default defineComponent({
  name: "stored-xss-attack-protection",
  components: {
    NonVunarableStored,
  },
  setup() {
    const code = `<template>
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
import DOMPurify from "dompurify";
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
      this.formattedText = \`<h6>\${DOMPurify.sanitaze(this.userInfo)}</h6>\`;
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
