import resizeObserverPolyfill from "resize-observer-polyfill";

/** Executes the given callback whenever the size of the given element changes */
export function expensiveModuleWithSideEffect(
  element: HTMLElement,
  callback: () => void
) {
  new resizeObserverPolyfill(callback).observe(element);
}
