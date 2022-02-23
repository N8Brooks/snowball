import { SwedishStemmer as ActualSwedishStemmer } from "./swedish_stemmer.ts";
import { Swedish as ExpectedSwedishStemmer } from "./javascript/swedish.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualSwedishStemmer = new ActualSwedishStemmer();
const expectedSwedishStemmer = new ExpectedSwedishStemmer();

Deno.readTextFileSync("testdata/swedish.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualSwedishStemmer.stem(input);
      const expected = expectedSwedishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
