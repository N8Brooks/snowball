import { FinnishStemmer as ActualFinnishStemmer } from "./finnish_stemmer.ts";
import { Finnish as ExpectedFinnishStemmer } from "./javascript/finnish.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualFinishStemmer = new ActualFinnishStemmer();
const expectedFinnishStemmer = new ExpectedFinnishStemmer();

Deno.readTextFileSync("testdata/finnish.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualFinishStemmer.stem(input);
      const expected = expectedFinnishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
