import { LithuanianStemmer as ActualLithuanianStemmer } from "./lithuanian_stemmer.ts";
import { Lithuanian as ExpectedLithuanianStemmer } from "./javascript/lithuanian.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualLithuanianStemmer = new ActualLithuanianStemmer();
const expectedLithuanianStemmer = new ExpectedLithuanianStemmer();

Deno.readTextFileSync("testdata/lithuanian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualLithuanianStemmer.stem(input);
      const expected = expectedLithuanianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
