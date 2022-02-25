import { FrenchStemmer as ActualFrenchStemmer } from "./french_stemmer.ts";
import { French as ExpectedFrenchStemmer } from "./javascript/french.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualFreshStemmer = new ActualFrenchStemmer();
const expectedFrenchStemmer = new ExpectedFrenchStemmer();

Deno.readTextFileSync("testdata/french.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualFreshStemmer.stem(input);
      const expected = expectedFrenchStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
