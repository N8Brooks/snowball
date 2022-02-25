import { IndonesianStemmer as ActualIndonesianStemmer } from "./indonesian_stemmer.ts";
import { Indonesian as ExpectedIndonesianStemmer } from "./javascript/indonesian.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualIndonesianStemmer = new ActualIndonesianStemmer();
const expectedIndonesianStemmer = new ExpectedIndonesianStemmer();

Deno.readTextFileSync("testdata/indonesian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualIndonesianStemmer.stem(input);
      const expected = expectedIndonesianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
