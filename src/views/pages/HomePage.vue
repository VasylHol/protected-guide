<template>
  <div class="home-content">
    <span
      style="
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 16px;
        margin-top: 16px;
      "
      >Безпечні концепції розробки додатків</span
    >
    <div class="attacks-type-cards">
      <attack-card
        class="attack-card"
        v-for="card in attackCards"
        :key="card.cardTitle"
        :cardTitle="card.cardTitle"
        :cardImage="card.cardImage"
        :cardLink="card.cardLink"
      />
      <attack-card
        class="attack-card"
        v-for="card in protectionCards"
        :key="card.cardTitle"
        :cardTitle="card.cardTitle"
        :cardImage="card.cardImage"
        :cardLink="card.cardLink"
      />
    </div>
    <a-typography>
      <a-typography-text strong style="font-size: 18px; text-align: left">
        У сучасному світі неможливо уявити діяльність людини без використання
        інтернету. Кожне підприємство намагається покращити свою продуктивність
        і взаємодію з клієнтами, розробляючи вебдодатки. Однак, сучасна мережа
        може нести за собою багато загроз, починаючи від фішингових сайтів, які
        намагаються поцупити ваші гроші, закінчуючи програмами, що можуть
        викрасти всі ваші дані з жорсткого диску і заблокувати операційну
        систему. Небезпека може ховатись будь-де і не всі з них можуть бути
        виявлені. Однак є певні патерни й види атак від яких вебспеціалісти
        навчились ефективно обороняти свої додатки. Розгляньте найпоширеніші з них
      </a-typography-text>
    </a-typography>
  </div>
</template>

<script>
import AttackCard from "@/components/AttackCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "home-page",
  components: {
    AttackCard,
  },
  data() {
    return {
      attackCards: [
        {
          cardTitle: "DDoS attacks",
          cardImage:
            "https://surfshark.com/wp-content/uploads/2021/11/How_to_stop_DDoS_attacks_hero.png",
          cardLink: "ddos-attacks",
        },
        {
          cardTitle: "XSS attacks",
          cardImage:
            "https://blogdetectify.cdn.triggerfish.cloud/uploads/2015/12/04174531/What-is-Cross-site-Scripting-XSS-and-how-can-you-fix-it_.png",
          cardLink: "xss-attacks",
        },
        {
          cardTitle: "Brute force attacks",
          cardImage:
            "https://www.360logica.com/blog/wp-content/uploads/2019/04/Brute-Force-Attack.png",
          cardLink: "brute-force-attacks",
        },
      ],
      protectionCards: [
        {
          cardTitle: "OAuth 2.0",
          cardImage:
            "https://stytch.com/blog/wp-content/uploads/2023/03/What-is-oath2.png",
          cardLink: "/oauth-providing",
        },
        {
          cardTitle: "JSON Web Tokens",
          cardImage:
            "https://miro.medium.com/v2/resize:fit:1000/1*9pWUdYPAwCQoWdEnvZli4A.jpeg",
          cardLink: "/jwt-providing",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.home-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.attacks-type-cards {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
