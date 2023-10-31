import ItemTracker from './ItemTracker/index.vue'
import CwispTracker from './CwispTracker.vue'

export default {
  ItemTracker,
  install(app) {
    app.component('SmItemTracker', ItemTracker)
    app.component('SmCwispTracker', CwispTracker)
  },
}
