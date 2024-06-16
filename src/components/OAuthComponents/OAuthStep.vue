<template>
  <div>
    <DefaultStep :attackSteps="steps" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DefaultStep from "@/components/DefaultStep.vue";
export default defineComponent({
  components: { DefaultStep },
  setup() {
    return {};
  },
  data() {
    return {
      steps: [
        {
          title: "Загальна інформація",
          content: "OAuthBaseInfo",
        },
        {
          title: "Впровадження в додаток",
          content: "OAuthIntoProject",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
