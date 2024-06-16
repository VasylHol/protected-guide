<template>
  <div>
    <DefaultStep :attack-steps="steps" />
  </div>
</template>

<script>
import DefaultStep from "@/components/DefaultStep.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sql-injections-step",
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
          content: "DOMBasedXSSBaseInfo",
        },
        {
          title: "Приклад атаки",
          content: "DOMBasedXSSAttackExample",
        },
        {
          title: "Захист",
          content: "DOMBasedXSSProtection",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
