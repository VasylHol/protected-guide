<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <a-image :width="400" style="margin-top: 4px" :src="imageLink" />
    <a-typography-text
      ><b>{{ imageCaption }}</b></a-typography-text
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "image-with-caption",
  props: {
    imageLink: { type: String, default: "" },
    imageCaption: { type: String, default: "" },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
