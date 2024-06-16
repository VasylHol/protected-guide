<template>
  <div>
    <div class="attack-info">
      <span
        ><b>Об'єкт атаки</b>: Endpoint серверу</span
      >
      <span
        ><b>Flow</b>: Створюється великий потік запитів для навантаження серверу
      </span>
    </div>
    <pre style="min-width: 300px; font-size: 12px; display: flex">
        <code class="language-javascript">{{apiExample}}</code>
      </pre>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default defineComponent({
  name: "ddos-attack-example",
  setup() {
    const apiExample = `
const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 хвилин
  max: 100 // обмежити кожен IP до 100 запитів за вказаний проміжок часу
});
app.use(‘/api/’, apiLimiter);
`;
    return {
      apiExample,
    };
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  },
});
</script>

<style scoped lang="scss">
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
