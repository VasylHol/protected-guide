<template>
  <div>
    <LoginToManager />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LoginToManager from "@/components/BookManager/LoginToManager.vue";
export default defineComponent({
  name: "login-page",
  components: {
    LoginToManager,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
