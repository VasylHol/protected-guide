<template>
  <div>
    <DefaultStep :attack-steps="steps" />
  </div>
</template>

<script>
import DefaultStep from "@/components/DefaultStep.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "brute-force-step",
  components: {
    DefaultStep,
  },
  setup() {
    return {};
  },
  data() {
    return {
      steps: [
        {
          title: "Загальна інформація",
          content: "BruteForceBaseInfo",
        },
        {
          title: "Приклад атаки",
          content: "BruteForceAttackExample",
        },
        {
          title: "Впровадження в додаток",
          content: "BruteForceProtection",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
