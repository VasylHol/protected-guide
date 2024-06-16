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
          content: "JWTBaseInfo",
        },
        {
          title: "Впровадження в додаток",
          content: "JWTIntoProject",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
