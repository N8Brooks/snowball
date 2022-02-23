import { PorterStemmer as ActualPorterStemmer } from "./porter_stemmer.ts";
import { Porter as ExpectedPorterStemmer } from "./javascript/porter.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualPorterStemmer = new ActualPorterStemmer();
const expectedPorterStemmer = new ExpectedPorterStemmer();

Deno.readTextFileSync("testdata/english.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualPorterStemmer.stem(input);
      const expected = expectedPorterStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
