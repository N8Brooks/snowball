import { HindiStemmer as ActualHindiStemmer } from "./hindi_stemmer.ts";
import { Hindi as ExpectedHindiStemmer } from "./javascript/hindi.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualHindiStemmer = new ActualHindiStemmer();
const expectedHindiStemmer = new ExpectedHindiStemmer();

Deno.readTextFileSync("testdata/hindi.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualHindiStemmer.stem(input);
      const expected = expectedHindiStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
