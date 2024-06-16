<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>Елементи захисту</a-typography-title>
      <a-typography-paragraph>
        На сьогоднішній день, фреймворк і браузер займаються екранізацією
        небезпечних елементів у URL. Однак, якщо ви хочете додатково
        переконатись у безпечності елементів, які передаються користувачем то
        можна провести додаткову екранізацію перед відправкою запиту. Для цієї
        задачі можна використати бібліотеку
        <a-typography-text code>html-entities</a-typography-text> і за допомогою
        методу <a-typography-text code>encode</a-typography-text> виконати
        екранізацію
      </a-typography-paragraph>
      <a-typography-title :level="3">Завантаження пакетів</a-typography-title>
      <pre style="font-size: 14px; display: flex; justify-content: center">
        <code class="language-javascript">npm i html-entities</code>
        </pre>
      <a-typography-paragraph
        >Розглянемо компонент пошуку книги, у який користувач, через пошуковик
        вводить назву фільму і переходить на нову сторінку з параметрами у
        URL</a-typography-paragraph
      >
      <pre style="min-width: 300px; font-size: 14px">
        <code class="language-markup">{{code}}</code>
        </pre>
      <a-typography-title :level="4">
        Як можна побачити в, метод goToBook не робить ніякої додаткової обробки
        інформації, що передає користувач. Додайте екранізацію вмісту перед її
        відправкою:</a-typography-title
      >
    </a-typography>
  </div>
  <codemirror
    ref="editor"
    v-model="codeMethod"
    placeholder="Code goes here..."
    :style="{ textAlign: 'left' }"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensionsForMethod"
  />
  <a-button @click="checkAnswer">Перевірити вирішення</a-button>
</template>

<script>
import { defineComponent, createVNode, render, ref } from "vue";
import { basicSetup } from "codemirror";
import { Codemirror } from "vue-codemirror";
import { vue } from "@codemirror/lang-vue";
import { javascript } from "@codemirror/lang-javascript";
import { htmlTemplateTrimmer } from "@/utils";
import { encode } from "html-entities";
import { message, notification } from "ant-design-vue";
import Prism from "prismjs";
import "prismjs/components/prism-git";
import "prismjs/themes/prism.css";
import BookSearch from "@/components/BookManager/BookSearch.vue";
export default defineComponent({
  name: "reflected-xss-protection",
  components: {
    Codemirror,
    BookSearch,
  },
  setup() {
    const extensions = [vue(), basicSetup];
    const extensionsForMethod = [javascript()];
    const editor = ref(null);
    return {
      extensions,
      editor,
      extensionsForMethod,
      encode,
    };
  },
  data() {
    return {
      code: `
<template>
  <div>
    <a-input v-model:value="searchName" placeholder="Введіть назву фільму" />
    Знайти книгу: <a-button @click="goToBookPage">Знайти</a-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { encode } from "html-entities";
export default defineComponent({
  name: "book-search",

  setup(props) {
    const searchName = ref("");
    return {
      searchName,
    };
  },
  methods: {
    goToBookPage() {
      this.$router.push({
        name: "book-info",
        query: { name: this.searchName },
      });
    },
  },
});
</\script>
`,
      codeMethod: `goToBookPage() {
      this.$router.push({
        name: "book-info",
        query: { name: this.searchName },
      });
    },`,
    };
  },
  methods: {
    async runCode() {
      try {
        const trimmedTemplate = htmlTemplateTrimmer(this.code);
        // data: eval(dataTrimmer(this.code)),
        // dataTrimmer()
        const passedComponent = defineComponent({
          name: "passed-component",
          template: trimmedTemplate,
          data() {
            return {
              test: 12,
            };
          },
          computed: {
            test_test2: new Function("return this.test + 12"),
          },
        });
        const vnode = createVNode(passedComponent);
        render(vnode, this.$refs.dynamicComponent);
      } catch (e) {
        console.log(e);
      }
    },
    checkAnswer() {
      if (this.codeMethod.includes("encode(this.searchName)")) {
        try {
          message.success(`Метод змінено успішно`);
        } catch (e) {
          message.error(e);
        }
      } else {
        message.warning(`Зміни не відповідають безпечному стандарту`);
      }
    },
    changeSome(whatIGet, view) {
      console.log("change====", whatIGet);
      console.log("view====", view);
    },
    readySome(whatIGet, view) {
      console.log("readySome====", whatIGet);
    },
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  },
});
</script>

<style lang="scss" scoped>
.codeMirror-test {
  &:deep(.cm-gutterElement) {
    opacity: 0 !important;
  }
}
</style>
