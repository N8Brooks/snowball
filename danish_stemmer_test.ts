import { DanishStemmer as ActualDanishStemmer } from "./danish_stemmer.ts";
import { Danish as ExpectedDanishStemmer } from "./javascript/danish.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualDanishStemmer = new ActualDanishStemmer();
const expectedDanishStemmer = new ExpectedDanishStemmer();

Deno.readTextFileSync("testdata/danish.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualDanishStemmer.stem(input);
      const expected = expectedDanishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
