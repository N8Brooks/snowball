import { ArabicStemmer as ActualArabicStemmer } from "./arabic_stemmer.ts";
import { Arabic as ExpectedArabicStemmer } from "./javascript/arabic.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualArabicStemmer = new ActualArabicStemmer();
const expectedArabicStemmer = new ExpectedArabicStemmer();

Deno.readTextFileSync("testdata/arabic.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualArabicStemmer.stem(input);
      const expected = expectedArabicStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
