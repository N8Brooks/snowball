import { German2Stemmer as ActualGerman2Stemmer } from "./german_2_stemmer.ts";
import { German2 as ExpectedGerman2Stemmer } from "./javascript/german2.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualGerman2Stemmer = new ActualGerman2Stemmer();
const expectedGerman2Stemmer = new ExpectedGerman2Stemmer();

Deno.readTextFileSync("testdata/german.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualGerman2Stemmer.stem(input);
      const expected = expectedGerman2Stemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
