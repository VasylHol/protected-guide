<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>Stored XSS</a-typography-title>
      <a-typography-paragraph>
        <a-typography-text mark><b>Stored XSS</b></a-typography-text>
        - є одним з типів уразливостей веб-додатків, який дозволяє зловмиснику
        впровадити скрипт (зазвичай JavaScript) у вміст сторінки або даних на
        веб-сайті. Цей тип XSS відрізняється тим, що злоумисник вбудовує скрипти
        безпеки в базу даних, текстові файли або інші ресурси, які пізніше
        будуть відображені іншим користувачам сайту.
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-title :level="4"
          >Основні характеристики stored XSS:</a-typography-title
        >
        <a-typography-text>
          <ul>
            <li>
              <a-typography-text strong
                >Механізм вразливості:</a-typography-text
              >
              Злоумисник впроваджує код XSS в базу даних або інші сховища, де
              він зберігається і пізніше відображається користувачам.
            </li>
            <li>
              <a-typography-text strong>Поширення:</a-typography-text>
              Злоумисники можуть використовувати stored XSS для крадіжки
              сесійних кукісів, перенаправлення на фішінгові сторінки,
              відображення фальшивих повідомлень тощо
            </li>
            <li>
              <a-typography-text strong>Вплив на безпеку:</a-typography-text>
              Якщо сайт має stored XSS, це може призвести до компрометації
              особистих даних користувачів або зловживання їхніми аккаунтами.
            </li>
            <li>
              <a-typography-text strong>Захист:</a-typography-text>
              Щоб захистити сайт від stored XSS, необхідно належним чином
              фільтрувати та екранувати вхідні дані перед зберіганням їх у базі
              даних і перед виведенням на веб-сторінку.
            </li>
          </ul>
        </a-typography-text>
      </a-typography-paragraph>
    </a-typography>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center">
    <a-image
      :width="400"
      style="margin-top: 4px"
      src="https://assets-global.website-files.com/5ff66329429d880392f6cba2/613afbd23a32f5d2fc2b924e_Stored(Persistent)%20XSS.png"
    />
     <a-typography-text><b>Ілюстрація роботи Stored XSS</b></a-typography-text>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "stored-xss-base-info",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
