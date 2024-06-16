<template>
  <a-typography style="text-align: left; margin-top: 4px">
    <a-typography-title>Елементи захисту</a-typography-title>
    <a-typography-paragraph>
      Розглянемо, як можна реалізувати обмеження кількості запитів для
      ендпоінта, що повертає список книг, використовуючи Express.js. У цьому
      прикладі ми створимо контролер для отримання списку книг та додамо
      механізм обмеження запитів (rate limiting) для всіх ендпоінтів, які
      починаються з /books.
    </a-typography-paragraph>
    <a-typography-title :level="3"
      >Заватаження необхідних бібліотек</a-typography-title
    >
    <pre style="font-size: 14px; display: flex; justify-content: center">
        <code class="language-git">npm i express-rate-limit</code>
        </pre>
    <a-typography-title :level="3"
      >Розглянемо endpoint отримання списку книг, на який здійснюється
      навантаження</a-typography-title
    >
    <pre style="min-width: 300px; font-size: 14px; display: flex">
        <code class="language-javascript">{{code}}
</code>
        </pre>
    <a-typography-title :level="3"
      >Додавання ліміта запитів, до всіх
      <a-typography-text code>enpoints</a-typography-text>, які починаються з
      <a-typography-text code>books</a-typography-text></a-typography-title
    >
    <pre> <code class="language-javascript">const rateLimit = require('express-rate-limit');
 const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 хвилин
  max: 100 // обмежити кожен IP до 100 запитів за вказаний проміжок часу
});
app.use(‘/books/’, apiLimiter);
</code></pre>
  </a-typography>
  <!-- <book-search :goToMovieData="codeMethod" /> -->
</template>

<script>
import { defineComponent, ref } from "vue";
import { basicSetup } from "codemirror";
import { Codemirror } from "vue-codemirror";
import { vue } from "@codemirror/lang-vue";
import { javascript } from "@codemirror/lang-javascript";
import { encode } from "html-entities";
import { message } from "ant-design-vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default defineComponent({
  name: "reflected-xss-protection",
  components: {
    Codemirror,
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
class booksController {
  async getBooks(req, res) {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}`,
      codeMethod: ``,
    };
  },
  methods: {
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
