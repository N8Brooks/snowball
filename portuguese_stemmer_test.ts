import { PortugueseStemmer as ActualPortugueseStemmer } from "./portuguese_stemmer.ts";
import { Portuguese as ExpectedPortugueseStemmer } from "./javascript/portuguese.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualPortugueseStemmer = new ActualPortugueseStemmer();
const expectedPortugueseStemmer = new ExpectedPortugueseStemmer();

Deno.readTextFileSync("testdata/portuguese.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualPortugueseStemmer.stem(input);
      const expected = expectedPortugueseStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
