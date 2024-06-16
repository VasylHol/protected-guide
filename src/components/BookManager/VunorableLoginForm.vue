<template>
  <div style="display: flex; align-items: center; flex-direction: column">
    <a-button @click="startAttack" style="margin-bottom: 8px"
      >Розпочати атаку</a-button
    >
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
  </div>
</template>
<script setup>
// import { useAuth0 } from "@auth0/auth0-vue";
import { reactive, computed, defineEmits } from "vue";
import Cookies from "js-cookie";
import { login } from "@/api/main.js";
const formState = reactive({
  username: "",
  password: "",
});
const emit = defineEmits(["getAttackLog"]);
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
const startAttack = async () => {
  formState.username = "testUser";
  const passwords = [
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
    "test",
    "test2",
    "test5",
  ];
  for (let i = 0; i < passwords.length; i++) {
    formState.password = passwords[i];
    onFinish();
    await delay(2000);
    emit("getAttackLog", `log${i + 1}`);
  }
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>
<style scoped lang="scss">
.login-form {
  padding: 8px;
  border-radius: 12px;
  border: 1px solid black;
  width: 400px;
}
</style>
