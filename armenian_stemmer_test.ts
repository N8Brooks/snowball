import { ArmenianStemmer as ActualArmenianStemmer } from "./armenian_stemmer.ts";
import { Armenian as ExpectedArmenianStemmer } from "./javascript/armenian.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualArmenianStemmer = new ActualArmenianStemmer();
const expectedArmenianStemmer = new ExpectedArmenianStemmer();

Deno.readTextFileSync("testdata/armenian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualArmenianStemmer.stem(input);
      const expected = expectedArmenianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
