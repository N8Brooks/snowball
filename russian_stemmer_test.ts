import { RussianStemmer as ActualRussianStemmer } from "./russian_stemmer.ts";
import { Russian as ExpectedRussianStemmer } from "./javascript/russian.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualRussianStemmer = new ActualRussianStemmer();
const expectedRussianStemmer = new ExpectedRussianStemmer();

Deno.readTextFileSync("testdata/russian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualRussianStemmer.stem(input);
      const expected = expectedRussianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
