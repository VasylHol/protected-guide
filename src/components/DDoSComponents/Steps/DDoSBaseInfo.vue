<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>DDoS attacks</a-typography-title>
      <a-typography-paragraph>
        <b>DDoS (Distributed Denial of Service)</b> – це розподілені атаки,
        спрямовані на вебсайти й сервери для того, щоб порушити роботу мережевих
        служб. Даний вид атаки направлений на відключення вебдодатка, для
        унеможливлення користувачів відвідати сервіс. Досягається це за
        допомогою наповнення сайту фальшивим трафіком, що призводить до
        погіршення його роботи або повного відключення. Атака наноситься
        зловмисником за допомогою мережі ботів, які роблять багато HTTP запитів
        до сервера, тим самим перевантажують трафік. Ботами можуть бути
        комп’ютери звичайних користувачів, які були заражені вірусом
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-title :level="3"
          >Існує декілька типів даної загрози</a-typography-title
        >
        <ul>
          <li>
            Під час об’ємної атаки зловмисник переповнює мережевий рівень тим,
            що спочатку видається нормальним, – трафіком. Це найпоширеніша форма
            DDoS-атаки. Прикладом такої атаки може слугувати "Посилення
            DNS-сервера" (DNS amplification), коли через відкриті DNS-сервери
            цільовий об’єкт переповнюється трафіком із відповідей на запити DNS.
          </li>
          <li>
            Атака на рівні протоколу призводить до переривання роботи служби,
            використовуючи вразливості на 3 й 4 рівнях. Прикладом такої атаки є
            синхронізована (SYN) атака, яка використовує всі доступні серверні
            ресурси.
          </li>
          <li>
            Атака ресурсного (прикладного рівня) спрямовується на вебпрограми й
            зриває передавання даних між хостами. До таких атак належать
            порушення протоколу HTTP, внесення SQL-ін’єкції, XSS сценарії та
            інші атаки рівня 7.
          </li>
        </ul>
      </a-typography-paragraph>
    </a-typography>
    <div style="display: flex; flex-direction: column; align-items: center">
      <a-image
        :width="400"
        style="margin-top: 4px"
        src="https://www.radware.com/getattachment/2020/CyberPedia/DDosPedia/DDoS-Meaning-What-Is-A-DDoS-Attack/Volumetric-or-Volume-Based-Attacks-min.jpg"
      />
      <a-typography-text><b>Ілюстрація роботи DDoS</b></a-typography-text>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ddos-base-info",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
