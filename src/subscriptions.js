import { add, sub } from "./actions"

const keyDownHandler = (dispatch, { onup, ondown }) => {
  const handler = event => {
    if (event.key === "ArrowUp") dispatch(onup)
    if (event.key === "ArrowDown") dispatch(ondown)
  }
  window.addEventListener("keydown", handler)
  return () => window.removeEventListener("keydown", handler)
}

export const subscriptions = state => [
  [keyDownHandler, { onup: add, ondown: sub }],
]
