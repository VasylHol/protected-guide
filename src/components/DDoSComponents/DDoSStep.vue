<template>
  <div>
    <DefaultStep :attack-steps="steps" />
  </div>
</template>

<script>
import DefaultStep from "@/components/DefaultStep.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ddos-step",
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
          content: "DDoSBaseInfo",
        },
        {
          title: "Захист",
          content: "DDoSAttackProtection",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
