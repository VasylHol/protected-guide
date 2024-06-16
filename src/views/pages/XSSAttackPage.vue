<template>
  <div>
    <MainInfoAboutXSS/>
  </div>
</template>

<script>
import MainInfoAboutXSS from "@/components/XSSComponents/MainInfoAboutXSS.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "xss-attack-page",
  setup() {
    return {};
  },
  components: {
    MainInfoAboutXSS
  }
});
</script>

<style lang="scss" scoped></style>
