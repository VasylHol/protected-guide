<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>Елементи захисту</a-typography-title>
      <a-typography-title :level="3">ReCAPTCHA Google</a-typography-title>
      <a-typography-paragraph>
        Для запобігання безперервного перебору паролів автоматичним експлойтом
        можна використати технологію reCAPTCHA. Це поширений метод перевірки
        того, що користувач є людиною. Для впровадження даної технології
        спочатку потрібно створити спеціальний ключ в адмінпанелі
        <a-typography-link href="https://www.google.com/recaptcha/admin/create"
          >Google</a-typography-link
        >
      </a-typography-paragraph>
      <div
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      >
        <div style="display: flex; flex-direction: column; align-items: center">
          <a-image
            :width="350"
            style="margin-top: 4px"
            :src="require('@/assets/image.png')"
          />
          <a-typography-text
            ><b>Інструкція створення ReCAPTCHA в Google</b></a-typography-text
          >
        </div>
        <div style="display: flex; flex-direction: column; align-items: center">
          <a-image
            :width="350"
            style="margin-top: 4px"
            :src="require('@/assets/recaptchaKeys.jpg')"
          />
          <a-typography-text
            ><b>Отримання необхідних ключів доступу</b></a-typography-text
          >
        </div>
      </div>

      <a-typography-paragraph>
        <a-typography-text
          >Після введення всіх даних і підтвердженні, стане доступною сторінка з
          двома ключами «Site key» і «Secret key». «Site key» потрібен для
          створення captcha на клієнті, а «Secret key» на стороні сервера для
          обміну даних з Google API та валідації правильності перевірки введеної
          користувачем. Отже, щоб додати перевірку «Я не робот» до нашого
          додатка у файлі index.html потрібно під'єднатись до Google API за
          допомогою CDN посилання</a-typography-text
        ><br />
        <a-typography-text code>{{ cdnCode }}</a-typography-text>
      </a-typography-paragraph>
      <a-typography-paragraph>
        Далі, при створенні компонента потрібно використати глобальний об’єкт
        grecaptcha, який надається «Google reCAPTCHA» за допомогою раніше
        доданого CDN. Метод render даного об’єкту використовується для
        відображення віджета. Створимо компонент ReCAPTCHA для подальшого
        впровадження в компонент.
      </a-typography-paragraph>
      <span
        style="
          width: 100%;
          display: flex;
          justify-content: center;
          font-size: 18px;
        "
        ><b>ReCAPTCHA.vue</b></span
      >
      <pre style="min-width: 300px; font-size: 12px; display: flex">
        <code class="language-markup">{{recaptchaCode}}</code>
      </pre>
      <a-typography-paragraph>
        Тепер, модифікуємо форму авторизації, яка була створена раніше, додавши
        до неї наш новостворений компонент. Також, потрібно модифікувати
        параметри, які передаються до методу «login», щоб він зміг приймати й
        передавати до сервера. Для отримання токена потрібно використати метод
        getResponse об’єкту grecaptcha.
      </a-typography-paragraph>
    </a-typography>
     <a-typography-title :level="2">Оновлена форма з компонентом ReCAPTCHA</a-typography-title>
    <div>
      <login-to-manager/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Prism from "prismjs";
import "prismjs/components/prism-git";
import "prismjs/themes/prism.css";
import LoginToManager from "@/components/BookManager/LoginToManager.vue";
export default defineComponent({
  name: "brute-force-protection",
  components: {
    LoginToManager,
  },
  setup() {
    const cdnCode = `<script src="https://www.google.com/recaptcha/api.js" async defer></\script>`;
    const recaptchaCode = `<template>
  <div>
    <div ref="recaptcha" class="g-recaptcha" :data-sitekey="siteKey"></div>
  </div>
</template>

<script>
import { SITE_KEY } from "@/utils";
export default {
  data() {
    return {
      siteKey: SITE_KEY, // YOUR SITE_KEY FROM GOOGLE,
    };
  },
  mounted() {
    const renderRecaptcha = () => {
      if (typeof grecaptcha !== "undefined") {
        grecaptcha.render(this.$refs.recaptcha, {
          sitekey: this.siteKey,
        });
      } else {
        setTimeout(renderRecaptcha, 100);
      }
    };
    this.$nextTick(renderRecaptcha);
  },
};
</\script>
`;
    return { cdnCode, recaptchaCode };
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  },
});
</script>

<style scoped></style>
