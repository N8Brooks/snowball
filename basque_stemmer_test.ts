import { BasqueStemmer as ActualBasqueStemmer } from "./basque_stemmer.ts";
import { Basque as ExpectedBasqueStemmer } from "./javascript/basque.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualBasqueStemmer = new ActualBasqueStemmer();
const expectedBasqueStemmer = new ExpectedBasqueStemmer();

Deno.readTextFileSync("testdata/basque.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualBasqueStemmer.stem(input);
      const expected = expectedBasqueStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
