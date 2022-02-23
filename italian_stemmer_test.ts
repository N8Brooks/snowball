import { ItalianStemmer as ActualItalianStemmer } from "./italian_stemmer.ts";
import { Italian as ExpectedItalianStemmer } from "./javascript/italian.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualItalianStemmer = new ActualItalianStemmer();
const expectedItalianStemmer = new ExpectedItalianStemmer();

Deno.readTextFileSync("testdata/italian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualItalianStemmer.stem(input);
      const expected = expectedItalianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
