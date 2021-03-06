import { NorwegianStemmer as ActualNorwegianStemmer } from "./norwegian_stemmer.ts";
import { Norwegian as ExpectedNorwegianStemmer } from "./javascript/norwegian.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualNorwegianStemmer = new ActualNorwegianStemmer();
const expectedNorwegianStemmer = new ExpectedNorwegianStemmer();

Deno.readTextFileSync("testdata/norwegian.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualNorwegianStemmer.stem(input);
      const expected = expectedNorwegianStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
