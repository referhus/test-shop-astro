import { createPinia } from 'pinia'
import App from './App.vue'

export default (app: App) => {
  app.use(createPinia())
}
