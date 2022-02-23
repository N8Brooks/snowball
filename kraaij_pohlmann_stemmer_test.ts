import { KraaijPohlmannStemmer as ActualKraaijPohlmannStemmer } from "./kraaij_pohlmann_stemmer.ts";
import { KraaijPohlmann as ExpectedKraaijPohlmannStemmer } from "./javascript/kraaij-pohlmann.js";
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const actualKraaijPohlmannStemmer = new ActualKraaijPohlmannStemmer();
const expectedKraaijPohlmannStemmer = new ExpectedKraaijPohlmannStemmer();

Deno.readTextFileSync("testdata/dutch.txt")
  .split(/\s+/u)
  .forEach((input) => {
    Deno.test(input, () => {
      const actual = actualKraaijPohlmannStemmer.stem(input);
      const expected = expectedKraaijPohlmannStemmer.stemWord(input);
      assertStrictEquals(actual, expected);
    });
  });
