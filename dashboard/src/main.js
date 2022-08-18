import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faXmark, faBox , faUser, faClipboardList, faChartLine , faMessage, faClipboard, faCircleExclamation, faPlus, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

library.add(faXmark, faBox, faUser, faClipboardList, faChartLine, faMessage, faClipboard, faCircleExclamation, faPlus, faArrowRightFromBracket)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
