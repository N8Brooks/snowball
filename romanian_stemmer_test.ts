import { RomanianStemmer as ActualRomanianStemmer } from "./romanian_stemmer.ts";
import { Romanian as ExpectedRomanianStemmer } from "./javascript/romanian.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualRomanianStemmer = new ActualRomanianStemmer();
const expectedRomanianStemmer = new ExpectedRomanianStemmer();

Deno.readTextFileSync("testdata/romanian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualRomanianStemmer.stem(input);
      const expected = expectedRomanianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
