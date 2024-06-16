<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title :level="3"
        ><b>Об'єкт атаки:</b> Форма авторизації користувача</a-typography-title
      >
      <a-typography-title :level="4"
        ><b>Flow:</b> У формі авторизації користувача за допомогою
        автоматизованого софту перебирається список паролів, для взлому акаунту
        користувача</a-typography-title
      >
      <a-typography-paragraph strong>
        Розглянемо форму login, яка є вразлива до brute force атак
        <pre style="min-width: 300px; font-size: 14px">
        <code class="language-markup">{{code}}</code>
        </pre>
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-text style="font-size: 16px" strong>
          <a-typography-title :level="3">Відтворення атаки</a-typography-title>
          Вітворіть атаку для нагального прикладу, натиснувши на кнопку
          "Розпочати атаку"
        </a-typography-text>
      </a-typography-paragraph>
      <div style="display: flex; justify-content: center">
        <vunorable-login-form ref="loginForm" @getAttackLog="getAttackLog" />
        <div style="width: 200px">
          LOGS:
          <div
            class="logs"
            style="
              height: 190px;
              margin-top: 14px;
              margin-left: 8px;
              overflow-y: scroll;
            "
          >
            <a-typography-text>
              <ul>
                <li v-for="el in attackLogs" :key="el">{{ el }}</li>
              </ul>
            </a-typography-text>
          </div>
        </div>
      </div>
    </a-typography>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import LoginToManager from "@/components/BookManager/LoginToManager.vue";
import VunorableLoginForm from "@/components/BookManager/VunorableLoginForm.vue";
import Prism from "prismjs";
import "prismjs/components/prism-git";
import "prismjs/themes/prism.css";
export default defineComponent({
  name: "brute-force-attack-example",
  components: {
    LoginToManager,
    VunorableLoginForm,
  },
  setup() {
    const code = `
<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item style="display: flex; justify-content: center; width: 100%">
      <a-button
        :disabled="disabled"
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive, computed } from "vue";
import Cookies from "js-cookie";
import { login } from "@/api/main.js";
const formState = reactive({
  username: "",
  password: "",
});
const onFinish = async (values) => {
  try {
    const token = await login(formState.username, formState.password);
    Cookies.set("jwt", token.data.token, { expires: 1 });
  } catch (e) {
    console.log(e);
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const disabled = computed(() => {
  return !(formState.username && formState.password);
});
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</\script>
<style scoped lang="scss">
.login-form {
  padding: 8px;
  border-radius: 12px;
  border: 1px solid black;
  width: 400px;
}
</style>
`;
    const loginForm = ref();
    return {
      code,
      loginForm,
    };
  },
  data() {
    return {
      attackLogs: [],
    };
  },
  methods: {
    getAttackLog(data) {
      this.attackLogs.push(data);
    },
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  },
});
</script>

<style scoped lang="scss">
.logs {
  background-color: gainsboro;
}
</style>
