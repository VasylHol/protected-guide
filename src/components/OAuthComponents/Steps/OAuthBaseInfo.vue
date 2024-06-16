<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>OAuth2.0</a-typography-title>
      <a-typography-paragraph>
        <a-typography-text mark><b>OAuth 2.0</b></a-typography-text>
        - це відкрита структура для авторизації, що дозволяє додаткам отримувати
        обмежений доступ до користувацьких облікових записів на HTTP-сервісах,
        таких як Facebook, GitHub, Google тощо. Спроєктована для того, щоб
        працювати з чинними HTTP-методами та API, ця система забезпечує надійний
        і гнучкий механізм авторизації. Ідея ґрунтується на концепції
        делегування доступу, яка передбачає, що користувач надає сторонній
        програмі тимчасовий дозвіл на доступ до своїх ресурсів. Цей дозвіл
        надається у формі токена доступу, який є унікальним ідентифікатором, що
        аутентифікує програму та надає їй право на виконання певних дій. Для
        цього використовується концепція грантів (Grant types) яка визначає, як
        клієнт отримує токен доступу. Кожен grant type має певний сценарій
        використання та рівень безпеки. Є 4 основних типи які, визначають рівень
        доступу користувача:
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-text>
          <ol>
            <li>
              <a-typography-text strong
                >Authorization Code Grant.</a-typography-text
              >
              Замість впровадження шкідливого коду в базу даних або інші
              серверні сховища, DOM-based XSS використовує маніпуляції з DOM на
              стороні клієнта. Це означає, що атака відбувається у браузері
              користувача, коли шкідливий код модифікує структуру HTML-сторінки.
            </li>
            <li>
              <a-typography-text strong>Implicit Grant.</a-typography-text>
              Найбільш поширеними джерелами для DOM-based XSS є URL, фрагменти
              URL (hash), або дані, отримані через JavaScript API
            </li>
            <li>
              <a-typography-text strong
                >Resource Owner Password Credentials Grant.</a-typography-text
              >
              Цей грант вимагає, щоб Клієнт спочатку отримав облікові дані
              власника ресурсу, які передаються на сервер авторизації. Таким
              чином, доступ одержується клієнтами, яким повністю довіряють.
              Даний тип має перевагу тим, що не бере участі перенаправленні на
              сервер авторизації, тому він застосовується у випадках
              використання, коли перенаправлення є нездійсненним.
            </li>
            <li>
              <a-typography-text strong
                >Client Credentials Grant.</a-typography-text
              >Використовується для неінтерактивних додатків, наприклад,
              автоматизованих процесів, мікросервісів тощо. Додаток
              аутентифікується, використовуючи свій ідентифікатор клієнта та
              секретний токен.
            </li>
          </ol>
        </a-typography-text>
      </a-typography-paragraph>
    </a-typography>
    <div style="display: flex; flex-direction: column; align-items: center">
      <a-image
        :width="400"
        style="margin-top: 4px"
        src="https://goteleport.com/blog/_next/image/?url=%2Fblog%2F_next%2Fstatic%2Fmedia%2Feverything-you-need-to-know-about-oauth-2.27a4f189.png&w=1920&q=75"
      />
      <a-typography-text
        ><b>Ілюстрація роботи OAuth2.0</b></a-typography-text
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OAuth-base-info",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
