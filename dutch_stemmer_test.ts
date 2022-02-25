import { DutchStemmer as ActualDutchStemmer } from "./dutch_stemmer.ts";
import { Dutch as ExpectedDutchStemmer } from "./javascript/dutch.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualDutchStemmer = new ActualDutchStemmer();
const expectedDutchStemmer = new ExpectedDutchStemmer();

Deno.readTextFileSync("testdata/dutch.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualDutchStemmer.stem(input);
      const expected = expectedDutchStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
