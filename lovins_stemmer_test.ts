import { LovinsStemmer as ActualLovinsStemmer } from "./lovins_stemmer.ts";
import { Lovins as ExpectedLovinsStemmer } from "./javascript/lovins.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualLovinsStemmer = new ActualLovinsStemmer();
const expectedLovinsStemmer = new ExpectedLovinsStemmer();

Deno.readTextFileSync("testdata/english.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualLovinsStemmer.stem(input);
      const expected = expectedLovinsStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
