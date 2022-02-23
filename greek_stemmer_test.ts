import { GreekStemmer as ActualGreekStemmer } from "./greek_stemmer.ts";
import { Greek as ExpectedGreekStemmer } from "./javascript/greek.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualGreekStemmer = new ActualGreekStemmer();
const expectedGreekStemmer = new ExpectedGreekStemmer();

Deno.readTextFileSync("testdata/greek.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualGreekStemmer.stem(input);
      const expected = expectedGreekStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
