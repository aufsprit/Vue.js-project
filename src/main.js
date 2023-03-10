import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store' //Vuex 저장소 추가
import i18nPlugin from './plugins/i18n'

const app = createApp(App)
const i18nPlugins = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}
app.use(router)
app.use(i18nPlugin, i18nPlugins)
app.mixin(mixins);
app.use(store)
app.mount('#app')
window.Kakao.init("{kakaoLoginKey}"); //발급 받은 앱키