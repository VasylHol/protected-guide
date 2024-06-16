<template>
  <div>
    <div style="display: flex; align-items: center; margin-top: 24px">
      <a-button
        :icon="h(CaretLeftOutlined)"
        shape="circle"
        style="margin-right: 8px"
        @click="goToLeft"
        :disabled="current === 0"
      />
      <div class="steps-content">
        <component :is="attackSteps[current].content" />
      </div>
      <a-button
        :icon="h(CaretRightOutlined)"
        shape="circle"
        style="margin-left: 8px"
        @click="goToRight"
        :disabled="current === attackSteps.length - 1"
      />
    </div>
    <a-steps
      :current="current"
      :items="items"
      style="margin-top: 36px"
    ></a-steps>
    <div
      style="
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 16px;
      "
    >
      <a-button
        style="margin-left: 64px"
        v-if="current === attackSteps.length - 1"
        @click="$router.push('/')"
        >Завершити з даним елементом</a-button
      >
    </div>
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import ReflectedXSSBaseInfo from "./XSSComponents/ReflectedXSS/Steps/ReflectedXSSBaseInfo.vue";
import ReflectedXSSAttackExample from "./XSSComponents/ReflectedXSS/Steps/ReflectedXSSAttackExample.vue";
import ReflectedXSSProtection from "./XSSComponents/ReflectedXSS/Steps/ReflectedXSSProtection.vue";

import DOMBasedXSSBaseInfo from "./XSSComponents/DOMBasedXSS/Steps/DOMBasedXSSBaseInfo.vue";
import DOMBasedXSSAttackExample from "./XSSComponents/DOMBasedXSS/Steps/DOMBasedXSSAttackExample.vue";
import DOMBasedXSSProtection from "./XSSComponents/DOMBasedXSS/Steps/DOMBasedXSSProtection.vue";

import StoredXSSBaseInfo from "./XSSComponents/StoredXSS/Steps/StoredXSSBaseInfo.vue";
import StoredXSSAttackExample from "./XSSComponents/StoredXSS/Steps/StoredXSSAttackExample.vue";
import StoredXSSAttackProtection from "./XSSComponents/StoredXSS/Steps/StoredXSSAttackProtection.vue";

import DDoSBaseInfo from "./DDoSComponents/Steps/DDoSBaseInfo.vue";
import DDoSAttackExample from "./DDoSComponents/Steps/DDoSAttackExample.vue";
import DDoSAttackProtection from "./DDoSComponents/Steps/DDoSAttackProtection.vue";

import JWTBaseInfo from "./JWTComponents/Steps/JWTBaseInfo.vue";
import JWTIntoProject from "./JWTComponents/Steps/JWTIntoProject.vue";

import OAuthIntoProject from "./OAuthComponents/Steps/OAuthIntoProject.vue";
import OAuthBaseInfo from "./OAuthComponents/Steps/OAuthBaseInfo.vue";

import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons-vue";
import BruteForceBaseInfo from "./BruteForceComponents/Steps/BruteForceBaseInfo.vue";
import BruteForceAttackExample from "@/components/BruteForceComponents/Steps/BruteForceAttackExample.vue";
import BruteForceProtection from "./BruteForceComponents/Steps/BruteForceProtection.vue";
export default defineComponent({
  name: "reflected-step",
  components: {
    ReflectedXSSBaseInfo,
    ReflectedXSSAttackExample,
    ReflectedXSSProtection,
    DOMBasedXSSBaseInfo,
    DOMBasedXSSAttackExample,
    DOMBasedXSSProtection,
    StoredXSSBaseInfo,
    StoredXSSAttackExample,
    StoredXSSAttackProtection,
    DDoSBaseInfo,
    DDoSAttackExample,
    DDoSAttackProtection,
    JWTBaseInfo,
    JWTIntoProject,
    OAuthIntoProject,
    OAuthBaseInfo,
    BruteForceBaseInfo,
    BruteForceAttackExample,
    BruteForceProtection,
    CaretRightOutlined,
    CaretLeftOutlined,
  },
  props: {
    attackSteps: { type: Array, default: () => [] },
  },
  setup() {
    return {
      h,
      CaretRightOutlined,
      CaretLeftOutlined,
    };
  },
  data() {
    return {
      current: 0,
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
  computed: {
    items() {
      return this.attackSteps.map((item) => ({
        key: item.title,
        title: item.title,
      }));
    },
  },
});
</script>

<style lang="scss" scoped>
.steps-content {
  min-height: 70vh;
  padding: 8px;
  max-height: 70vh;
  overflow-y: scroll;
  width: 95%;
  background-color: #fafafa;
}
</style>
