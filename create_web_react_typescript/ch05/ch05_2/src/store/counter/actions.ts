import type * as T from "./types";

export const setCounter = (payload: T.State): T.SetCounterAction => ({
  type: "@counter/setCounter",
  payload,
});
export const incraseCounter = () => setCounter(1);
export const decraseCounter = () => setCounter(-1);
