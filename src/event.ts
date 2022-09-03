import { cleanup, root, useData } from "./core";

export const nuiEvent = <T = unknown>(action: string, handler: (data: T) => void) => {
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

export const useClientData = <T = any>(action: string, initialVaue: any): T => {
  const state = useData(initialVaue);

  nuiEvent(action, (data: any) => {
    state(data)
  })

  return state();
}