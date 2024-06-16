<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>DOM-based XSS</a-typography-title>
      <a-typography-paragraph>
        <a-typography-text mark><b>DOM-based XSS</b></a-typography-text>
        - Злочинець використовує вразливість в сторінці для внесення змін в
        DOM-дерево. DOM-based XSS, або Cross-Site Scripting на основі Document
        Object Model, де вразливість знаходиться у клієнтському коді, а не на
        сервері. Такий тип атаки відбувається, коли скрипт на стороні клієнта
        читає дані з DOM і неналежним чином обробляє ці дані, виконуючи їх як
        код. Відмінною особливістю DOM-based XSS є те, що атака відбувається
        виключно на стороні клієнта, без будь-яких змін даних на сервері.
        DOM-based XSS атаки використовують JavaScript у веббраузері жертви для
        зміни сторінки таким чином, що коли сторінка обробляється, шкідливий код
        виконується. Наприклад, атакувальник може помістити шкідливий JavaScript
        код в URL, сподіваючись, що користувач перейде по ньому. Коли користувач
        переходить за таким посиланням, JavaScript виконується в межах їхнього
        браузера. Використовується схожий принцип з Reflected XSS, але
        використовується інший тип вразливості для вставки шкідливого коду.
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-title :level="4"
          >Основні характеристики DOM-based XSS:</a-typography-title
        >
        <a-typography-text>
          <ul>
            <li>
              <a-typography-text strong
                >Механізм вразливості:</a-typography-text
              >
              Замість впровадження шкідливого коду в базу даних або інші
              серверні сховища, DOM-based XSS використовує маніпуляції з DOM на
              стороні клієнта. Це означає, що атака відбувається у браузері
              користувача, коли шкідливий код модифікує структуру HTML-сторінки.
            </li>
            <li>
              <a-typography-text strong>Джерела ін'єкцій:</a-typography-text>
              Найбільш поширеними джерелами для DOM-based XSS є URL, фрагменти
              URL (hash), або дані, отримані через JavaScript API
            </li>
          </ul>
        </a-typography-text>
      </a-typography-paragraph>
    </a-typography>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center">
    <a-image
      :width="400"
      style="margin-top: 4px"
      src="https://assets-global.website-files.com/5ff66329429d880392f6cba2/60b35d9d49c3ceace71aa233_DOM%20(Document%20Object%20Model)%20based%20XSS%20attacks.png"
    />
    <a-typography-text><b>Ілюстрація роботи DOM-based XSS</b></a-typography-text>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "dom-based-xss-base-info",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
