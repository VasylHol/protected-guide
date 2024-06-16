<template>
  <div>
    <div
      style="
        height: 50px;
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
      "
    >
      <HomeOutlined
        class="home-icon"
        @click="$router.push('/')"
        :style="{ 'font-size': '24px', 'margin-left': '14px' }"
      />
    </div>
    <Transition>
      <router-view class="app-container" />
    </Transition>
  </div>
</template>

<script setup>
import { HomeOutlined } from "@ant-design/icons-vue";
</script>

<style lang="scss">
body {
  background-color: #d9e3ef;
}
.home-icon:hover {
  color: brown;
  cursor: pointer;
}
* {
  margin: 0;
  box-sizing: border-box;
}
/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-container {
  padding: 0 12px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// @media (min-width: 1600px) {
//   *{
//     font-size: 32px
//   }
// }
</style>
