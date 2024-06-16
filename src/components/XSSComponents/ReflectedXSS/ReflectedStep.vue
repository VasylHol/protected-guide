<template>
  <div>
    <DefaultStep :attack-steps="steps" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DefaultStep from "@/components/DefaultStep.vue";
export default defineComponent({
  name: "reflected-step",
  components: {
    DefaultStep,
  },
  setup() {
    return {};
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "Загальна інформація",
          content: "ReflectedXSSBaseInfo",
        },
        {
          title: "Захист",
          content: "ReflectedXSSProtection",
        },
      ],
    };
  },
  methods: {
    goToRight() {
      this.current++;
    },
    goToLeft() {
      this.current--;
    },
  },
});
</script>

<style lang="scss" scoped></style>
