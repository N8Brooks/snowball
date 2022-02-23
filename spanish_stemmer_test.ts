import { SpanishStemmer as ActualSpanishStemmer } from "./spanish_stemmer.ts";
import { Spanish as ExpectedSpanishStemmer } from "./javascript/spanish.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualSpanishStemmer = new ActualSpanishStemmer();
const expectedSpanishStemmer = new ExpectedSpanishStemmer();

Deno.readTextFileSync("testdata/spanish.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualSpanishStemmer.stem(input);
      const expected = expectedSpanishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
