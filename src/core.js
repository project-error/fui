import S from "s-js";

const currentContext = null;

function memo(fn, equal) {
  if (typeof fn !== "function") return fn;
  if (!equal) return S(fn);
  const s = S.value(sample(fn));
  S(() => s(fn()));
  return s;
}

function createComponent(Comp, props) {
  return S.sample(() => Comp(props));
}

function useData(initalValue = null) {
  const data = S.data(initalValue);
  return data;
}

const root = S.root
const effect = S;
const on = S.on;
const cleanup = S.cleanup;
const sharedConfig = {}
const getOwner = null

export { root, useData, createComponent, memo, effect, sharedConfig, getOwner, on, cleanup };
