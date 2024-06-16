import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import router from "./router";
import * as allComponents from "ant-design-vue";
import { createAuth0 } from "@auth0/auth0-vue";
import VueCodemirror from "vue-codemirror";
// import { QuillEditor } from '@vueup/vue-quill'
const domainURL = "dev-l42djknq7d87w2ug.us.auth0.com";
const client = "OYVclhXdwcTRmLvP2M4pxZ6v9NnjeOCf";

const app = createApp(App);
app
  .use(router)
  .use(allComponents)
  .use(VueCodemirror)
  .use(
    createAuth0({
      domain: domainURL,
      clientId: client,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    })
  )
  .mount("#app");
