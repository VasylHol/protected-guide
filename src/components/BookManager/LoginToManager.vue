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
    <a-form-item>
      <div style="display: flex; justify-content: center">
        <Recaptcha />
      </div>
    </a-form-item>
    <a-form-item>
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
import { notification } from "ant-design-vue";
import Cookies from "js-cookie";
import { login } from "@/api/main.js";
import Recaptcha from "./Recaptcha.vue";
const formState = reactive({
  username: "",
  password: "",
});
const onFinish = async (values) => {
  try {
    const recaptchaToken = grecaptcha.getResponse();
    const token = await login(
      formState.username,
      formState.password,
      recaptchaToken
    );
    Cookies.set("jwt", token.data.token, { expires: 1 });
    notification.success({ message: "Успішна авторизація" });
  } catch (e) {
    console.log(e)
    notification.warning({ message: e.message });
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style scoped>
.login-form {
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px 2px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
