<template>
  <div>
    <div style="display: flex; justify-content: center;">
      <b
        >Є 3 основні види XSS атак (Натисніть на один з видів для детального
        ознайомлення):
      </b>
    </div>
    <div class="xss-type-cards">
      <attack-card
        v-for="card in attackCards"
        :key="card.cardTitle"
        :cardTitle="card.cardTitle"
        :cardImage="card.cardImage"
        :cardLink="card.cardLink"
      />
    </div>
    <p style="margin-top: 14px">
      XSS (Cross Site Scripting) – це тип вразливості безпеки, що дозволяє
      зловмиснику вставляти злоякісний код у веб-сторінки, який потім
      виконуються у браузері інших користувачів
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AttackCard from "../AttackCard.vue";

export default defineComponent({
  name: "main-info-about-xss",
  components: {
    AttackCard,
  },
  setup() {
    return {};
  },
  data() {
    return {
      attackCards: [
        {
          cardTitle: "Reflected XSS",
          cardImage:
            "https://assets-global.website-files.com/5ff66329429d880392f6cba2/613afbf22ae9a2e291c42ce6_Reflected%20XSS.png",
          cardLink: "/xss-attacks/reflected-xss",
        },
        {
          cardTitle: "Stored XSS",
          cardImage:
            "https://assets-global.website-files.com/5ff66329429d880392f6cba2/613afbd23a32f5d2fc2b924e_Stored(Persistent)%20XSS.png",
          cardLink: "/xss-attacks/stored-xss",
        },
        {
          cardTitle: "DOM-based XSS",
          cardImage:
            "https://assets-global.website-files.com/5ff66329429d880392f6cba2/60b35d9d49c3ceace71aa233_DOM%20(Document%20Object%20Model)%20based%20XSS%20attacks.png",
          cardLink: "/xss-attacks/dom-based-xss",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.xss-type-cards {
  display: flex;
  justify-content: space-around;
  padding-top: 24px;
}
</style>
