import { HindiStemmer as ActualHindiStemmer } from "./hindi_stemmer.ts";
import { Hindi as ExpectedHindiStemmer } from "./javascript/hindi.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualHindiStemmer = new ActualHindiStemmer();
const expectedHindiStemmer = new ExpectedHindiStemmer();

Deno.readTextFileSync("testdata/hindi.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualHindiStemmer.stem(input);
      const expected = expectedHindiStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
