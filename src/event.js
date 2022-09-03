import { cleanup, root, useData } from "./core";

export const nuiEvent = (action, handler) => {
  const listener = (event) => {
    const { action: eventAction, data } = event.data;

    eventAction === action && handler(data);
  }

  root(() => {
    console.log("Just mounted")
    window.addEventListener('message', listener);
  })
  cleanup(() => {
    window.removeEventListener('message', listener);
  })
}

export const useClientData = (action, initialVaue = null) => {
  const state = useData(initialVaue);

  nuiEvent(action, (data) => {
    state(data)
  })

  return state();
}