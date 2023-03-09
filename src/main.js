import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
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
app.mount('#app')
