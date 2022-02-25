import { EnglishStemmer as ActualEnglishStemmer } from "./english_stemmer.ts";
import { English as ExpectedEnglishStemmer } from "./javascript/english.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualEnglishStemmer = new ActualEnglishStemmer();
const expectedEnglishStemmer = new ExpectedEnglishStemmer();

Deno.readTextFileSync("testdata/english.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualEnglishStemmer.stem(input);
      const expected = expectedEnglishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
