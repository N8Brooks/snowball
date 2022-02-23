import { SerbianStemmer as ActualSerbianStemmer } from "./serbian_stemmer.ts";
import { Serbian as ExpectedSerbianStemmer } from "./javascript/serbian.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualSerbianStemmer = new ActualSerbianStemmer();
const expectedSerbianStemmer = new ExpectedSerbianStemmer();

Deno.readTextFileSync("testdata/serbian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualSerbianStemmer.stem(input);
      const expected = expectedSerbianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
