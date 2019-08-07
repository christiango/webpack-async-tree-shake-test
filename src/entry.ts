import { cheapFunction1 } from "./openSourceLibrary";

export function entry() {
  import("./lazyChunk").then(x => console.log(x.lazyFunction));

  return cheapFunction1();
}
