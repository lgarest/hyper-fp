import { counterIsAdult } from "./effects"

const fnOnKey = fn => key => obj => ({ ...obj, [key]: fn(obj[key]) })

const _add = effect => state => [
  fnOnKey(x => x + 1)("counter")(state),
  effect && effect(state),
]

export const add = _add(counterIsAdult)

export const simpleAdd = _add(null)

export const sub = state => fnOnKey(x => x - 1)("counter")(state)

