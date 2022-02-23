import { TurkishStemmer as ActualTurkishStemmer } from "./turkish_stemmer.ts";
import { Turkish as ExpectedTurkishStemmer } from "./javascript/turkish.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualTurkishStemmer = new ActualTurkishStemmer();
const expectedTurkishStemmer = new ExpectedTurkishStemmer();

Deno.readTextFileSync("testdata/turkish.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualTurkishStemmer.stem(input);
      const expected = expectedTurkishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
