import { App } from 'vue'
import button from "./src/button";

export { button };

export default {
  install(app: App):void {
    app.component(button.name, button)
  }
}