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
  faMagnifyingGlass,
  faDownload,
  faArrowRight,
  faMinus,
  faChevronDown,
  faRulerCombined,
  faBook,
  faCheck,
  faLocationDot,
  faCircle,
  faArrowUpLong,
} from "@fortawesome/free-solid-svg-icons";

// Import icone regular /
import {
  faCircleUser,
  faFutbol,
  faFileLines,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

// Import icone brands /
import {
  faSquareFacebook,
  faSquareTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// add icons to the library /
library.add(
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
  faDownload,
  faArrowRight,
  faMinus,
  faChevronDown,
  faRulerCombined,
  faFutbol,
  faBook,
  faUser,
  faFileLines,
  faCheck,
  faLocationDot,
  faCircle,
  faSquareFacebook,
  faSquareTwitter,
  faInstagram,
  faLinkedin,
  faArrowUpLong
);

// add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
