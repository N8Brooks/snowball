# snowball

[Snowball](https://snowballstem.org/) stemmers for deno. These stemmers are
based on the compiled JavaScript stemmers from the
[snowball project](https://github.com/snowballstem) version 2.2.0.

## Usage

### EnglishStemmer

```typescript
import { EnglishStemmer } from "https://deno.land/x/snowball.english_stemmer.ts";

const englishStemmer = new EnglishStemmer();

const stem = englishStemmer.stem("enthusiastically");

assertStrictEquals(stem, "enthusiast");
```

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
1. Greek
1. Hindi
1. Hungarian
1. Indonesian (needs to be fixes)
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
