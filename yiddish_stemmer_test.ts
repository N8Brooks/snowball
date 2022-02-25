import { YiddishStemmer as ActualYiddishStemmer } from "./yiddish_stemmer.ts";
import { Yiddish as ExpectedYiddishStemmer } from "./javascript/yiddish.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualYiddishStemmer = new ActualYiddishStemmer();
const expectedYiddishStemmer = new ExpectedYiddishStemmer();

Deno.readTextFileSync("testdata/yiddish.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualYiddishStemmer.stem(input);
      const expected = expectedYiddishStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
