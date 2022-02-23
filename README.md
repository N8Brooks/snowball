# snowball

[Snowball](https://snowballstem.org/) stemmers for deno. These stemmers are
based on the compiled JavaScript stemmers from the
[snowball project](https://github.com/snowballstem) version 2.2.0.

## Usage

### EnglishStemmer

Provides the stem of the given word. Assumes that the input is lowercase.

```ts
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { EnglishStemmer } from "https://deno.land/x/snowball/english_stemmer.ts";

const englishStemmer = new EnglishStemmer();

const stem = englishStemmer.stem("enthusiastically");

assertStrictEquals(stem, "enthusiast");
```

Here is an example with multiple words.

```ts
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { EnglishStemmer } from "https://deno.land/x/snowball/english_stemmer.ts";

const sentence = "the quick brown fox jumped over the lazy dog";

const englishStemmer = new EnglishStemmer();

const stemmedSentence = sentence
  .match(/\b\w\w+\b/gu) // matches two or more word characters
  .map((token) => englishStemmer.stem(token))
  .join(" ");

assertStrictEquals(
  stemmedSentence,
  "the quick brown fox jump over the lazi dog",
);
```

### RussianStemmer

Many languages are supported

````ts
import { assertStrictEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { RussianStemmer } from "https://deno.land/x/snowball/russian_stemmer.ts";

const sentence = "обязательно выпейте свой овалтин";

const russianStemmer = new RussianStemmer();

const stemmedSentence = sentence
  .split(/\s+/u)
  .map((token) => russianStemmer.stem(token))
  .join(" ");

assertStrictEquals(
  stemmedSentence,
  "обязательн вып сво овалтин",
);
```

### stopWords

Stop words generally provide little or no information. Some languages come with
common stop words from the
[snowball-website](https://github.com/snowballstem/snowball-website). These can
also be imported individually from the file containing the stopwords for that
language. You should tokenize and stem these stop words the same way you do with
your input text.

```ts
import { assert } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { EnglishStemmer } from "https://deno.land/x/snowball.english_stemmer.ts";

const englishStemmer = new EnglishStemmer();

assert(englishStemmer.stopWords.has("been"));
````

## Supported Languages

Unless specified, there is only one stemmer available called `Language`Stemmer.

1. Arabic
1. Armenian
1. Basque
1. Catalan
1. Danish
1. Dutch

- DutchStemmer
- KraaijPohlmannStemmer

1. English

- EnglishStemmer - Porter 2 or snowball algorithm
- PorterStemmer - Porter 1 stemmer
- LovinsStemmer - The first published stemming algorithm

1. Finnish
1. French
1. German

- GermanStemmer
- German2Stemmer

1. Greek
1. Hindi
1. Hungarian
1. Indonesian
1. Irish
1. Italian
1. Lithuanian
1. Nepali
1. Norwegian
1. Protugese
1. Romanian
1. Russian
1. Serbian
1. Spanish
1. Swedish
1. Tamil
1. Turkish
1. Yiddish
