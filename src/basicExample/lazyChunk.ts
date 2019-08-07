import { expensiveFunction1, expensiveFunction2 } from "./openSourceLibrary";

export function lazyFunction() {
  return expensiveFunction1() + expensiveFunction2();
}
