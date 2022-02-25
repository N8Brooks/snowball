import { IrishStemmer as ActualIrishStemmer } from "./irish_stemmer.ts";
import { Irish as ExpectedIrishStemmer } from "./javascript/irish.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualIrishStemmer = new ActualIrishStemmer();
const expectedIrishStemmer = new ExpectedIrishStemmer();

Deno.readTextFileSync("testdata/irish.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualIrishStemmer.stem(input);
      const expected = expectedIrishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
