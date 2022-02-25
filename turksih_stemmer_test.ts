import { TurkishStemmer as ActualTurkishStemmer } from "./turkish_stemmer.ts";
import { Turkish as ExpectedTurkishStemmer } from "./javascript/turkish.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualTurkishStemmer = new ActualTurkishStemmer();
const expectedTurkishStemmer = new ExpectedTurkishStemmer();

Deno.readTextFileSync("testdata/turkish.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualTurkishStemmer.stem(input);
      const expected = expectedTurkishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
