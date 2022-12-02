import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// import font awesome icon component /
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import specific icons /
import {
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
  faDownload,
  faArrowRight,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

// Import icone regular /
import {} from "@fortawesome/free-regular-svg-icons";

// add icons to the library /
library.add(
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
  faDownload,
  faArrowRight,
  faMinus
);

// add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
