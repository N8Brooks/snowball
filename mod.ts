import { ArabicStemmer } from "./arabic_stemmer.ts";
import { ArmenianStemmer } from "./armenian_stemmer.ts";
import { BasqueStemmer } from "./basque_stemmer.ts";
import { CatalanStemmer } from "./catalan_stemmer.ts";
import { DanishStemmer } from "./danish_stemmer.ts";
import { DutchStemmer } from "./dutch_stemmer.ts";
import { EnglishStemmer } from "./english_stemmer.ts";
import { FinnishStemmer } from "./finnish_stemmer.ts";
import { FrenchStemmer } from "./french_stemmer.ts";
import { German2Stemmer } from "./german_2_stemmer.ts";
import { GermanStemmer } from "./german_stemmer.ts";
import { GreekStemmer } from "./greek_stemmer.ts";
import { HindiStemmer } from "./hindi_stemmer.ts";
import { HungarianStemmer } from "./hungarian_stemmer.ts";
import { IndonesianStemmer } from "./indonesian_stemmer.ts";
import { IrishStemmer } from "./irish_stemmer.ts";
import { ItalianStemmer } from "./italian_stemmer.ts";
import { KraaijPohlmannStemmer } from "./kraaij_pohlmann_stemmer.ts";
import { LithuanianStemmer } from "./lithuanian_stemmer.ts";
import { LovinsStemmer } from "./lovins_stemmer.ts";
import { NepaliStemmer } from "./nepali_stemmer.ts";
import { NorwegianStemmer } from "./norwegian_stemmer.ts";
import { PorterStemmer } from "./porter_stemmer.ts";
import { PortugueseStemmer } from "./portuguese_stemmer.ts";
import { RomanianStemmer } from "./romanian_stemmer.ts";
import { RussianStemmer } from "./russian_stemmer.ts";
import { SerbianStemmer } from "./serbian_stemmer.ts";
import { SpanishStemmer } from "./spanish_stemmer.ts";
import { SwedishStemmer } from "./swedish_stemmer.ts";
import { TamilStemmer } from "./tamil_stemmer.ts";
import { TurkishStemmer } from "./turkish_stemmer.ts";
import { YiddishStemmer } from "./yiddish_stemmer.ts";

/** Maps languages to stemmers */
const LanguageStemmers = Object.freeze({
  Arabic: ArabicStemmer,
  Armenian: ArmenianStemmer,
  Basque: BasqueStemmer,
  Catalan: CatalanStemmer,
  Danish: DanishStemmer,
  Dutch: DutchStemmer,
  English: EnglishStemmer,
  Finnish: FinnishStemmer,
  French: FrenchStemmer,
  German2: German2Stemmer,
  German: GermanStemmer,
  Greek: GreekStemmer,
  Hindi: HindiStemmer,
  Hungarian: HungarianStemmer,
  Indonesian: IndonesianStemmer,
  Irish: IrishStemmer,
  Italian: ItalianStemmer,
  KraaijPohlmann: KraaijPohlmannStemmer,
  Lithuanian: LithuanianStemmer,
  Lovins: LovinsStemmer,
  Nepali: NepaliStemmer,
  Norwegian: NorwegianStemmer,
  Porter: PorterStemmer,
  Portuguese: PortugueseStemmer,
  Romanian: RomanianStemmer,
  Russian: RussianStemmer,
  Serbian: SerbianStemmer,
  Spanish: SpanishStemmer,
  Swedish: SwedishStemmer,
  Tamil: TamilStemmer,
  Turkish: TurkishStemmer,
  Yiddish: YiddishStemmer,
});

export {
  ArabicStemmer,
  ArmenianStemmer,
  BasqueStemmer,
  CatalanStemmer,
  DanishStemmer,
  DutchStemmer,
  EnglishStemmer,
  FinnishStemmer,
  FrenchStemmer,
  German2Stemmer,
  GermanStemmer,
  GreekStemmer,
  HindiStemmer,
  HungarianStemmer,
  IndonesianStemmer,
  IrishStemmer,
  ItalianStemmer,
  KraaijPohlmannStemmer,
  LanguageStemmers,
  LithuanianStemmer,
  LovinsStemmer,
  NepaliStemmer,
  NorwegianStemmer,
  PorterStemmer,
  PortugueseStemmer,
  RomanianStemmer,
  RussianStemmer,
  SerbianStemmer,
  SpanishStemmer,
  SwedishStemmer,
  TamilStemmer,
  TurkishStemmer,
  YiddishStemmer,
};
