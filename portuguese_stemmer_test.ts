import { PortugueseStemmer as ActualPortugueseStemmer } from "./portuguese_stemmer.ts";
import { Portuguese as ExpectedPortugueseStemmer } from "./javascript/portuguese.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualPortugueseStemmer = new ActualPortugueseStemmer();
const expectedPortugueseStemmer = new ExpectedPortugueseStemmer();

Deno.readTextFileSync("testdata/portuguese.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualPortugueseStemmer.stem(input);
      const expected = expectedPortugueseStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
