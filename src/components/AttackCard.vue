<template>
  <a-card hoverable style="width: 200px" @click="$router.push(cardLink)">
    <template #cover>
      <img alt="example" :src="cardImage" height="120px" />
    </template>
    <a-card-meta :title="cardTitle">
    </a-card-meta>
  </a-card>
</template>

<script>
import { defineComponent } from "vue";
import { CheckCircleTwoTone } from "@ant-design/icons-vue";
export default defineComponent({
  name: "attack-card",
  components: {
    CheckCircleTwoTone,
  },
  props: {
    cardLink: {type: String, default: ""},
    cardTitle: { type: String, default: "" },
    cardImage: {type: String , default: ""},
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
