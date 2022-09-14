import { App } from 'vue'
import { button } from './button'

const components = [
  button
]

export default {
  install(app: App): void {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}
