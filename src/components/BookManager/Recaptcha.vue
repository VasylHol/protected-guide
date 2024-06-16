<template>
  <div>
    <div ref="recaptcha" class="g-recaptcha" :data-sitekey="siteKey"></div>
  </div>
</template>

<script>
import { SITE_KEY } from "@/utils";
export default {
  data() {
    return {
      siteKey: SITE_KEY, // YOUR SITE_KEY FROM GOOGLE,
    };
  },
  mounted() {
    const renderRecaptcha = () => {
      if (typeof grecaptcha !== "undefined") {
        grecaptcha.render(this.$refs.recaptcha, {
          sitekey: this.siteKey,
        });
      } else {
        setTimeout(renderRecaptcha, 100);
      }
    };
    this.$nextTick(renderRecaptcha);
  },
};
</script>
