import { cleanup, root } from "./core";

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