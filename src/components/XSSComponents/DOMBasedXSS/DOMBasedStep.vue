<template>
  <div>
    <DefaultStep :attack-steps="steps" />
  </div>
</template>

<script>
import DefaultStep from "@/components/DefaultStep.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "stored-step",
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
          content: "StoredXSSAttackExample",
        },
        {
          title: "Захист",
          content: "StoredXSSAttackProtection",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
