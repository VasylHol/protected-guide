<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>Елементи захисту</a-typography-title>
      <a-typography-paragraph>
        Для впровадження OAuth2.0 до додатка, потрібно спочатку, перейти на сайт
        <a-typography-link href="https://auth0.com/">Auth</a-typography-link> і
        зареєструватись. Після, у розділі «Docs» з’являться типи додатків, до
        яких можна додати цю технологію.
      </a-typography-paragraph>
      <div style="display: flex; flex-direction: column; align-items: center">
        <a-image
          :width="500"
          style="margin-top: 4px"
          :src="require('@/assets/OAuthFirstStep.jpg')"
        />
        <a-typography-text><b>Створення додатку OAuth2.0</b></a-typography-text>
      </div>
      <a-typography-paragraph>
        За результатом цих дій, у вкладці «Aplications» з’явиться створений нами
        додаток у якому буде детальна інструкція з впровадження авторизації у
        додаток
      </a-typography-paragraph>
      <div style="display: flex; flex-direction: column; align-items: center">
        <a-image
          :width="500"
          style="margin-top: 4px"
          :src="require('@/assets/OAuthSecondStep.jpg')"
        />
        <a-typography-text
          ><b>Детальна інструкція OAuth2.0</b></a-typography-text
        >
      </div>
      <a-typography-title :level="3"
        >Для подальшого впровадження у Vue компонент потрібно
        виконати:</a-typography-title
      >
      <a-typography-title :level="4"
        >1) Встановити необхідний пакет для роботи з OAuth2.0 у Vue
        додатку</a-typography-title
      >
      <pre
        style="
          min-width: 300px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        "
      >
        <code class="language-markup" >npm install @auth0/auth0-vue</code>
        </pre>
      <a-typography-title :level="4"
        >2) Створити глобальний образ Auth в main.js</a-typography-title
      >
      <pre style="min-width: 300px; font-size: 14px; display: flex">
        <code class="language-javascript">import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as allComponents from "ant-design-vue";
import { createAuth0 } from "@auth0/auth0-vue";
const domainURL = "***" // sensitive data
const client = "***" // sensitive data

createApp(App)
  .use(router)
  .use(allComponents)
  .use(
    createAuth0({
      domain: domainURL,
      clientId: client,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    })
  )
  .mount("#app");
</code>
        </pre>
      <a-typography-title :level="4"
        >3) Додаємо цей вид входу до компоненту</a-typography-title
      >
      <pre style="min-width: 300px; font-size: 14px; display: flex">
        <code class="language-markup">{{code}}
</code>
        </pre>
    </a-typography>
  </div>
</template>

<script>
import ImageWithCaption from "@/components/ImageWithCaption.vue";
import { defineComponent } from "vue";
import Prism from "prismjs";
import "prismjs/components/prism-git";
import "prismjs/themes/prism.css";
export default defineComponent({
  name: "OAuth-into-project",
  components: {
    ImageWithCaption,
  },
  setup() {
    const code = `<template>
 ...
  <a-button @click="oAuthLogin">OAuth2 login</a-button>
  <a-button @click="oAuthLogout">Logout</a-button>
...
</template>
<script setup>
...
import { useAuth0 } from "@auth0/auth0-vue";
import { login } from "@/api/main.js";
const { loginWithRedirect, logout  } = useAuth0();
const oAuthLogin = () => {
 loginWithRedirect();
};
const oAuthLogout = () => {
logout({ logoutParams: { returnTo: window.location.origin }})
}
…
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
