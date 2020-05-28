import { h, app } from "hyperapp"
import state from "./state"
import App from "./app"
import { subscriptions } from "./subscriptions"

app({
  init: state,
  view: App,
  subscriptions,
  node: document.querySelector("#hyper-app"),
})
