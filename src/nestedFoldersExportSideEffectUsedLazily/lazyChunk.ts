import {
  expensiveFunction1,
  expensiveFunction2,
  monitorElement
} from "./openSourceLibrary";

export function lazyFunction() {
  monitorElement(document.body, () => {});
  return expensiveFunction1() + expensiveFunction2();
}
