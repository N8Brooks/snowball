import { HungarianStemmer as ActualHungarianStemmer } from "./hungarian_stemmer.ts";
import { Hungarian as ExpectedHungarianStemmer } from "./javascript/hungarian.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualHungarianStemmer = new ActualHungarianStemmer();
const expectedHungarianStemmer = new ExpectedHungarianStemmer();

Deno.readTextFileSync("testdata/hungarian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualHungarianStemmer.stem(input);
      const expected = expectedHungarianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
