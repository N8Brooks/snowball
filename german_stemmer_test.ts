import { GermanStemmer as ActualGermanStemmer } from "./german_stemmer.ts";
import { German as ExpectedGermanStemmer } from "./javascript/german.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualGerman2Stemmer = new ActualGermanStemmer();
const expectedGermanStemmer = new ExpectedGermanStemmer();

Deno.readTextFileSync("testdata/german.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualGerman2Stemmer.stem(input);
      const expected = expectedGermanStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
