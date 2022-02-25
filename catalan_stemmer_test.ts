import { CatalanStemmer as ActualCatalanStemmer } from "./catalan_stemmer.ts";
import { Catalan as ExpectedCatalanStemmer } from "./javascript/catalan.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualCatalanStemmer = new ActualCatalanStemmer();
const expectedCatalanStemmer = new ExpectedCatalanStemmer();

Deno.readTextFileSync("testdata/catalan.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualCatalanStemmer.stem(input);
      const expected = expectedCatalanStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
