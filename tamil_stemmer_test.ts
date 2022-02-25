import { TamilStemmer as ActualTamilStemmer } from "./tamil_stemmer.ts";
import { Tamil as ExpectedTamilStemmer } from "./javascript/tamil.js";
import { assertStrictEquals } from "./test_deps.ts";

const actualTamilStemmer = new ActualTamilStemmer();
const expectedTamilStemmer = new ExpectedTamilStemmer();

Deno.readTextFileSync("testdata/tamil.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualTamilStemmer.stem(input);
      const expected = expectedTamilStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
