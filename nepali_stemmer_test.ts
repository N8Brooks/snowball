import { NepaliStemmer as ActualNepaliStemmer } from "./nepali_stemmer.ts";
import { Nepali as ExpectedNepaliStemmer } from "./javascript/nepali.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualNepaliStemmer = new ActualNepaliStemmer();
const expectedNepaliStemmer = new ExpectedNepaliStemmer();

Deno.readTextFileSync("testdata/nepali.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualNepaliStemmer.stem(input);
      const expected = expectedNepaliStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
