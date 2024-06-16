<template>
  <div>
    <a-typography style="text-align: left; margin-top: 4px">
      <a-typography-title>Елементи захисту</a-typography-title>
      <a-typography-paragraph>
        Розробимо серверну частину додатка на базі фреймворку express.js.
        Необхідними елементами API є написання контролерів та ендпойнтів.
        Створимо контролери <a-typography-text code>login</a-typography-text>,
        <a-typography-text code>registration</a-typography-text> для реєстрації
        та входу користувача.
      </a-typography-paragraph>
      <pre style="min-width: 300px; font-size: 14px; display: flex">
        <code class="language-javascript">{{code}}
</code>
        </pre>
      <a-typography-paragraph>
        Проаналізувавши створені методи, можна спостерігати декілька наявних
        проблем: пароль зберігається на пряму до бази даних без ніякого
        додаткового шифрування і при успішній авторизації користувачу
        повертається булеве значення isLogined. Дана схема є дуже вразливою до
        несанкціонованих входів і викрадення користувацьких даних. Щоб запобігти
        цьому використаємо JWT для безпечної авторизації й бібліотеку
        шифрування. Використаємо бібліотеки bcryptjs для шифрування пароля та
        jsonwebtoken для впровадження JWT до нашого проєкту. Дані бібліотеки є
        надійними й мають більше мільйону завантажень за тиждень.
      </a-typography-paragraph>
      <a-typography-title :level="3"
        >Встановлення бібліотек на серверну частину</a-typography-title
      >
      <pre
        style="
          min-width: 300px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        "
      >
        <code class="language-javascript">npm i jsonwebtoken bcryptjs</code>
       </pre>
      <a-typography-title :level="3"
        >Cтворення токена та шифрування пароля до
        методів</a-typography-title
      >
      <pre style="min-width: 300px; font-size: 14px; display: flex">
        <code class="language-javascript">{{code2}}</code>
       </pre>
    </a-typography>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Prism from "prismjs";
import "prismjs/components/prism-git";
import "prismjs/themes/prism.css";

export default defineComponent({
  name: "jwt-into-project",
  setup() {
    const code = `class authController {
async registration(req, res) {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Помилка при реєстрації", errors })
        }
        const { username, password, repeat_password } = req.body
        const candidate = await User.findOne({ username })
        if (candidate) {
            return res.status(400).json({ message: 'Користувач з таким іменем уже існує' })
        }
        else if (password != repeat_password) {
            return res.status(400).json({ message: 'Паролі не співпадають' })
        }
        const user = new User({ username, password: password })
        await user.save()
        return res.json({ message: 'Користувач був створений' })
    }
    catch (e) {
        console.log(e)
        res.status(400).json({ message: 'Помилка реєстрації' })
    }
},
async login(req, res) {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ message: 'Користувач з таким іменем не зареєстрований' })
        }
        const validPassword = password === user.password
        if (!validPassword) {
            return res.status(400).json({ message: 'Введено не правельний пароль' })
        }
        return res.json({ message: 'Користувач увійшов в систему', isLogined: true })
    }
    catch (e) {
        console.log(e)
        res.status(400).json({ message: 'Помилка авторизації' })
    }
}

    }`;
    const code2 = `const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const generateAccessToken = (id) => {
    return jwt.sign(id, "SECRET_KEY_RANDOM", { expiresIn: "24h" })
}
class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Помилка при реєстрації", errors })
            }
            const { username, password, repeat_password } = req.body
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).json({ message: 'Користувач з таким іменем уже існує' })
            }
            else if (password != repeat_password) {
                return res.status(400).json({ message: 'Паролі не співпадають' })
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({ username, password: hashPassword })
            await user.save()
            return res.json({ message: 'Користувач був створений' })
        }
        catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Помилка реєстрації' })
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).json({ message: 'Користувач з таким іменем не зареєстрований' })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'Введено не правельний пароль' })
            }
            const token = generateAccessToken(user._id)
            return res.json({ token })
        }
        catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Помилка авторизації' })
        }
    }
}
`;
    return {
      code,
      code2,
    };
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  },
});
</script>

<style scoped></style>
