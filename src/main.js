import { createApp } from 'vue'
import App from './App.vue'
import './assets/app.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faThumbTack } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faThumbTack)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

createApp(App).mount('#app')
