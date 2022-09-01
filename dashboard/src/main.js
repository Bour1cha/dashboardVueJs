import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faXmark, 
    faBox , 
    faUser, 
    faClipboardList, 
    faChartLine , 
    faMessage, 
    faClipboard, 
    faCircleExclamation, 
    faPlus, 
    faArrowRightFromBracket,
    faChartSimple, 
    faArrowTrendUp, 
    faEuroSign, 
    faBars, 
    faMoon, 
    faSun,
    faCartShopping,
    faBagShopping, 
    faEllipsisVertical, 
    faCircleNotch , 
    faMagnifyingGlass,
    } from '@fortawesome/free-solid-svg-icons'
import router from '@/router'

library.add(
     faXmark, 
     faBox, 
     faUser, 
     faClipboardList, 
     faChartLine, 
     faMessage, 
     faClipboard, 
     faCircleExclamation,
     faPlus, 
     faArrowRightFromBracket, 
     faChartSimple, 
     faArrowTrendUp, 
     faEuroSign, 
     faBars, 
     faMoon, 
     faSun, 
     faCartShopping,
     faBagShopping,
     faEllipsisVertical, 
     faCircleNotch,
     faMagnifyingGlass,
     )

const app = createApp(App)


app
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
