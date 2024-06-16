<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>Reflected XSS</a-typography-title>
      <a-typography-paragraph>
        <a-typography-text mark><b>Reflected XSS</b></a-typography-text>
        - Вид атаки, при якому зловмисний скрипт передається через запит
        користувача і відображається у відповіді веб-сервера. На відміну від
        Stored XSS атаки, де код зберігається на сервері і може впливати на всіх
        користувачів, які переглядають зазначений контенти, даний тип впливає
        лише на користувача, який переходить за підготовленим зловмисником
        посиланням або подає спеціально сформований запит.
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-title :level="4">Принцип роботи</a-typography-title>
        <a-typography-text
          >Зловмисник створює URL або форму, що містить шкідливий скрипт. -
          Користувач переходить за цим URL або надсилає форму. - Сервер обробляє
          запит та включає шкідливий скрипт у відповідь HTML-сторінки. - Браузер
          користувача виконує шкідливий скрипт, що може призвести до крадіжки
          cookies, сесій або інших небажаних дій.</a-typography-text
        >
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-title :level="4"
          >Сценарії атаки: - Фішинг</a-typography-title
        >
        <a-typography-text
          >Зловмисник надсилає жертві електронний лист або повідомлення з
          посиланням на веб-сайт, що містить шкідливий скрипт. Соціальна
          інженерія: Жертва обманом спонукається натиснути на шкідливе посилання
          або виконати дію, яка запускає скрипт.</a-typography-text
        >
      </a-typography-paragraph>
    </a-typography>

    <div style="display: flex; flex-direction: column; align-items: center">
      <a-image
        :width="400"
        style="margin-top: 4px"
        src="https://assets-global.website-files.com/5ff66329429d880392f6cba2/613afbf22ae9a2e291c42ce6_Reflected%20XSS.png"
      />
      <a-typography-text><b>Ілюстрація атаки</b></a-typography-text>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "reflected-xss-base-info",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 1600px) {
  .base-info {
    font-size: 32px;
  }
}
</style>
