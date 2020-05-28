const alertFx = (dispatch, message) => window.alert(message)

export const counterIsAdult = state =>
  state.counter + 1 >= 18 && [alertFx, "Number is an adult now"]
