import { h, app } from "hyperapp"
import { simpleAdd, add, sub } from "./actions"

export default state => (
  <div>
    <h1>{state.counter}</h1>
    <button onclick={sub}>-</button>
    <button onclick={simpleAdd}>+</button>
  </div>
)
