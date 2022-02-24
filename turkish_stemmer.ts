import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["m", -1, -1],
  ["n", -1, -1],
  ["miz", -1, -1],
  ["niz", -1, -1],
  ["muz", -1, -1],
  ["nuz", -1, -1],
  ["m\u00FCz", -1, -1],
  ["n\u00FCz", -1, -1],
  ["m\u0131z", -1, -1],
  ["n\u0131z", -1, -1],
];

const a_1: Rule[] = [
  ["leri", -1, -1],
  ["lar\u0131", -1, -1],
];

const a_2: Rule[] = [
  ["ni", -1, -1],
  ["nu", -1, -1],
  ["n\u00FC", -1, -1],
  ["n\u0131", -1, -1],
];

const a_3: Rule[] = [
  ["in", -1, -1],
  ["un", -1, -1],
  ["\u00FCn", -1, -1],
  ["\u0131n", -1, -1],
];

const a_4: Rule[] = [
  ["a", -1, -1],
  ["e", -1, -1],
];

const a_5: Rule[] = [
  ["na", -1, -1],
  ["ne", -1, -1],
];

const a_6: Rule[] = [
  ["da", -1, -1],
  ["ta", -1, -1],
  ["de", -1, -1],
  ["te", -1, -1],
];

const a_7: Rule[] = [
  ["nda", -1, -1],
  ["nde", -1, -1],
];

const a_8: Rule[] = [
  ["dan", -1, -1],
  ["tan", -1, -1],
  ["den", -1, -1],
  ["ten", -1, -1],
];

const a_9: Rule[] = [
  ["ndan", -1, -1],
  ["nden", -1, -1],
];

const a_10: Rule[] = [
  ["la", -1, -1],
  ["le", -1, -1],
];

const a_11: Rule[] = [
  ["ca", -1, -1],
  ["ce", -1, -1],
];

const a_12: Rule[] = [
  ["im", -1, -1],
  ["um", -1, -1],
  ["\u00FCm", -1, -1],
  ["\u0131m", -1, -1],
];

const a_13: Rule[] = [
  ["sin", -1, -1],
  ["sun", -1, -1],
  ["s\u00FCn", -1, -1],
  ["s\u0131n", -1, -1],
];

const a_14: Rule[] = [
  ["iz", -1, -1],
  ["uz", -1, -1],
  ["\u00FCz", -1, -1],
  ["\u0131z", -1, -1],
];

const a_15: Rule[] = [
  ["siniz", -1, -1],
  ["sunuz", -1, -1],
  ["s\u00FCn\u00FCz", -1, -1],
  ["s\u0131n\u0131z", -1, -1],
];

const a_16: Rule[] = [
  ["lar", -1, -1],
  ["ler", -1, -1],
];

const a_17: Rule[] = [
  ["niz", -1, -1],
  ["nuz", -1, -1],
  ["n\u00FCz", -1, -1],
  ["n\u0131z", -1, -1],
];

const a_18: Rule[] = [
  ["dir", -1, -1],
  ["tir", -1, -1],
  ["dur", -1, -1],
  ["tur", -1, -1],
  ["d\u00FCr", -1, -1],
  ["t\u00FCr", -1, -1],
  ["d\u0131r", -1, -1],
  ["t\u0131r", -1, -1],
];

const a_19: Rule[] = [
  ["cas\u0131na", -1, -1],
  ["cesine", -1, -1],
];

const a_20: Rule[] = [
  ["di", -1, -1],
  ["ti", -1, -1],
  ["dik", -1, -1],
  ["tik", -1, -1],
  ["duk", -1, -1],
  ["tuk", -1, -1],
  ["d\u00FCk", -1, -1],
  ["t\u00FCk", -1, -1],
  ["d\u0131k", -1, -1],
  ["t\u0131k", -1, -1],
  ["dim", -1, -1],
  ["tim", -1, -1],
  ["dum", -1, -1],
  ["tum", -1, -1],
  ["d\u00FCm", -1, -1],
  ["t\u00FCm", -1, -1],
  ["d\u0131m", -1, -1],
  ["t\u0131m", -1, -1],
  ["din", -1, -1],
  ["tin", -1, -1],
  ["dun", -1, -1],
  ["tun", -1, -1],
  ["d\u00FCn", -1, -1],
  ["t\u00FCn", -1, -1],
  ["d\u0131n", -1, -1],
  ["t\u0131n", -1, -1],
  ["du", -1, -1],
  ["tu", -1, -1],
  ["d\u00FC", -1, -1],
  ["t\u00FC", -1, -1],
  ["d\u0131", -1, -1],
  ["t\u0131", -1, -1],
];

const a_21: Rule[] = [
  ["sa", -1, -1],
  ["se", -1, -1],
  ["sak", -1, -1],
  ["sek", -1, -1],
  ["sam", -1, -1],
  ["sem", -1, -1],
  ["san", -1, -1],
  ["sen", -1, -1],
];

const a_22: Rule[] = [
  ["mi\u015F", -1, -1],
  ["mu\u015F", -1, -1],
  ["m\u00FC\u015F", -1, -1],
  ["m\u0131\u015F", -1, -1],
];

const a_23: Rule[] = [
  ["b", -1, 1],
  ["c", -1, 2],
  ["d", -1, 3],
  ["\u011F", -1, 4],
];

// deno-fmt-ignore
const g_vowel = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0, 0, 1];

// deno-fmt-ignore
const g_U = [1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1];

// deno-fmt-ignore
const g_vowel1 = [1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

const g_vowel2 = [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130];

// deno-fmt-ignore
const g_vowel3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

const g_vowel4 = [17];

const g_vowel5 = [65];

const g_vowel6 = [65];

export class TurkishStemmer extends Stemmer {
  private B_continue_stemming_noun_suffixes = false;

  readonly stopWords = undefined;

  private r_check_vowel_harmony() {
    const v_1 = this.limit - this.cursor;
    golab0:
    while (true) {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.in_grouping_b(g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        break golab0;
      }
      this.cursor = this.limit - v_2;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
    }
    lab2: {
      const v_3 = this.limit - this.cursor;
      lab3: {
        if (!this.eq_s_b("a")) {
          break lab3;
        }
        golab4:
        while (true) {
          const v_4 = this.limit - this.cursor;
          lab5: {
            if (!this.in_grouping_b(g_vowel1, 97, 305)) {
              break lab5;
            }
            this.cursor = this.limit - v_4;
            break golab4;
          }
          this.cursor = this.limit - v_4;
          if (this.cursor <= this.limit_backward) {
            break lab3;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab6: {
        if (!this.eq_s_b("e")) {
          break lab6;
        }
        golab7:
        while (true) {
          const v_5 = this.limit - this.cursor;
          lab8: {
            if (!this.in_grouping_b(g_vowel2, 101, 252)) {
              break lab8;
            }
            this.cursor = this.limit - v_5;
            break golab7;
          }
          this.cursor = this.limit - v_5;
          if (this.cursor <= this.limit_backward) {
            break lab6;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab9: {
        if (!this.eq_s_b("\u0131")) {
          break lab9;
        }
        golab10:
        while (true) {
          const v_6 = this.limit - this.cursor;
          lab11: {
            if (!this.in_grouping_b(g_vowel3, 97, 305)) {
              break lab11;
            }
            this.cursor = this.limit - v_6;
            break golab10;
          }
          this.cursor = this.limit - v_6;
          if (this.cursor <= this.limit_backward) {
            break lab9;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab12: {
        if (!this.eq_s_b("i")) {
          break lab12;
        }
        golab13:
        while (true) {
          const v_7 = this.limit - this.cursor;
          lab14: {
            if (!this.in_grouping_b(g_vowel4, 101, 105)) {
              break lab14;
            }
            this.cursor = this.limit - v_7;
            break golab13;
          }
          this.cursor = this.limit - v_7;
          if (this.cursor <= this.limit_backward) {
            break lab12;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab15: {
        if (!this.eq_s_b("o")) {
          break lab15;
        }
        golab16:
        while (true) {
          const v_8 = this.limit - this.cursor;
          lab17: {
            if (!this.in_grouping_b(g_vowel5, 111, 117)) {
              break lab17;
            }
            this.cursor = this.limit - v_8;
            break golab16;
          }
          this.cursor = this.limit - v_8;
          if (this.cursor <= this.limit_backward) {
            break lab15;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab18: {
        if (!this.eq_s_b("\u00F6")) {
          break lab18;
        }
        golab19:
        while (true) {
          const v_9 = this.limit - this.cursor;
          lab20: {
            if (!this.in_grouping_b(g_vowel6, 246, 252)) {
              break lab20;
            }
            this.cursor = this.limit - v_9;
            break golab19;
          }
          this.cursor = this.limit - v_9;
          if (this.cursor <= this.limit_backward) {
            break lab18;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab21: {
        if (!this.eq_s_b("u")) {
          break lab21;
        }
        golab22:
        while (true) {
          const v_10 = this.limit - this.cursor;
          lab23: {
            if (!this.in_grouping_b(g_vowel5, 111, 117)) {
              break lab23;
            }
            this.cursor = this.limit - v_10;
            break golab22;
          }
          this.cursor = this.limit - v_10;
          if (this.cursor <= this.limit_backward) {
            break lab21;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      if (!this.eq_s_b("\u00FC")) {
        return false;
      }
      golab24:
      while (true) {
        const v_11 = this.limit - this.cursor;
        lab25: {
          if (!this.in_grouping_b(g_vowel6, 246, 252)) {
            break lab25;
          }
          this.cursor = this.limit - v_11;
          break golab24;
        }
        this.cursor = this.limit - v_11;
        if (this.cursor <= this.limit_backward) {
          return false;
        }
        this.cursor--;
      }
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  private r_mark_suffix_with_optional_n_consonant() {
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("n")) {
          break lab1;
        }
        const v_2 = this.limit - this.cursor;
        if (!this.in_grouping_b(g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      {
        const v_3 = this.limit - this.cursor;
        lab2: {
          const v_4 = this.limit - this.cursor;
          if (!this.eq_s_b("n")) {
            break lab2;
          }
          this.cursor = this.limit - v_4;
          return false;
        }
        this.cursor = this.limit - v_3;
      }
      const v_5 = this.limit - this.cursor;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      if (!this.in_grouping_b(g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_5;
    }
    return true;
  }

  private r_mark_suffix_with_optional_s_consonant() {
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("s")) {
          break lab1;
        }
        const v_2 = this.limit - this.cursor;
        if (!this.in_grouping_b(g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      {
        const v_3 = this.limit - this.cursor;
        lab2: {
          const v_4 = this.limit - this.cursor;
          if (!this.eq_s_b("s")) {
            break lab2;
          }
          this.cursor = this.limit - v_4;
          return false;
        }
        this.cursor = this.limit - v_3;
      }
      const v_5 = this.limit - this.cursor;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      if (!this.in_grouping_b(g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_5;
    }
    return true;
  }

  private r_mark_suffix_with_optional_y_consonant() {
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("y")) {
          break lab1;
        }
        const v_2 = this.limit - this.cursor;
        if (!this.in_grouping_b(g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      {
        const v_3 = this.limit - this.cursor;
        lab2: {
          const v_4 = this.limit - this.cursor;
          if (!this.eq_s_b("y")) {
            break lab2;
          }
          this.cursor = this.limit - v_4;
          return false;
        }
        this.cursor = this.limit - v_3;
      }
      const v_5 = this.limit - this.cursor;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      if (!this.in_grouping_b(g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_5;
    }
    return true;
  }

  private r_mark_suffix_with_optional_U_vowel() {
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.in_grouping_b(g_U, 105, 305)) {
          break lab1;
        }
        const v_2 = this.limit - this.cursor;
        if (!this.out_grouping_b(g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      {
        const v_3 = this.limit - this.cursor;
        lab2: {
          const v_4 = this.limit - this.cursor;
          if (!this.in_grouping_b(g_U, 105, 305)) {
            break lab2;
          }
          this.cursor = this.limit - v_4;
          return false;
        }
        this.cursor = this.limit - v_3;
      }
      const v_5 = this.limit - this.cursor;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      if (!this.out_grouping_b(g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_5;
    }
    return true;
  }

  private r_mark_possessives() {
    if (this.find_among_b(a_0) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_U_vowel()) {
      return false;
    }
    return true;
  }

  private r_mark_sU() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (!this.in_grouping_b(g_U, 105, 305)) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_s_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_lArI() {
    if (this.find_among_b(a_1) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_yU() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (!this.in_grouping_b(g_U, 105, 305)) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_nU() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_2) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_nUn() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_3) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_n_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_yA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_4) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_nA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_5) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_DA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_6) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_ndA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_7) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_DAn() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_8) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_ndAn() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_9) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_ylA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_10) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_ki() {
    if (!this.eq_s_b("ki")) {
      return false;
    }
    return true;
  }

  private r_mark_ncA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_11) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_n_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_yUm() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_12) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_sUn() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_13) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_yUz() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_14) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_sUnUz() {
    if (this.find_among_b(a_15) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_lAr() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_16) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_nUz() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_17) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_DUr() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_18) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_cAsInA() {
    if (this.find_among_b(a_19) == 0) {
      return false;
    }
    return true;
  }

  private r_mark_yDU() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_20) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_ysA() {
    if (this.find_among_b(a_21) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_ymUs_() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(a_22) == 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_mark_yken() {
    if (!this.eq_s_b("ken")) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  private r_stem_nominal_verb_suffixes() {
    this.ket = this.cursor;
    this.B_continue_stemming_noun_suffixes = true;
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        lab2: {
          const v_2 = this.limit - this.cursor;
          lab3: {
            if (!this.r_mark_ymUs_()) {
              break lab3;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          lab4: {
            if (!this.r_mark_yDU()) {
              break lab4;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          lab5: {
            if (!this.r_mark_ysA()) {
              break lab5;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          if (!this.r_mark_yken()) {
            break lab1;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab6: {
        if (!this.r_mark_cAsInA()) {
          break lab6;
        }
        lab7: {
          const v_3 = this.limit - this.cursor;
          lab8: {
            if (!this.r_mark_sUnUz()) {
              break lab8;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab9: {
            if (!this.r_mark_lAr()) {
              break lab9;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab10: {
            if (!this.r_mark_yUm()) {
              break lab10;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab11: {
            if (!this.r_mark_sUn()) {
              break lab11;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab12: {
            if (!this.r_mark_yUz()) {
              break lab12;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
        }
        if (!this.r_mark_ymUs_()) {
          break lab6;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab13: {
        if (!this.r_mark_lAr()) {
          break lab13;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_4 = this.limit - this.cursor;
        lab14: {
          this.ket = this.cursor;
          lab15: {
            const v_5 = this.limit - this.cursor;
            lab16: {
              if (!this.r_mark_DUr()) {
                break lab16;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            lab17: {
              if (!this.r_mark_yDU()) {
                break lab17;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            lab18: {
              if (!this.r_mark_ysA()) {
                break lab18;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            if (!this.r_mark_ymUs_()) {
              this.cursor = this.limit - v_4;
              break lab14;
            }
          }
        }
        this.B_continue_stemming_noun_suffixes = false;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab19: {
        if (!this.r_mark_nUz()) {
          break lab19;
        }
        lab20: {
          const v_6 = this.limit - this.cursor;
          lab21: {
            if (!this.r_mark_yDU()) {
              break lab21;
            }
            break lab20;
          }
          this.cursor = this.limit - v_6;
          if (!this.r_mark_ysA()) {
            break lab19;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab22: {
        lab23: {
          const v_7 = this.limit - this.cursor;
          lab24: {
            if (!this.r_mark_sUnUz()) {
              break lab24;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          lab25: {
            if (!this.r_mark_yUz()) {
              break lab25;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          lab26: {
            if (!this.r_mark_sUn()) {
              break lab26;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          if (!this.r_mark_yUm()) {
            break lab22;
          }
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_8 = this.limit - this.cursor;
        lab27: {
          this.ket = this.cursor;
          if (!this.r_mark_ymUs_()) {
            this.cursor = this.limit - v_8;
            break lab27;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      if (!this.r_mark_DUr()) {
        return false;
      }
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
      const v_9 = this.limit - this.cursor;
      lab28: {
        this.ket = this.cursor;
        lab29: {
          const v_10 = this.limit - this.cursor;
          lab30: {
            if (!this.r_mark_sUnUz()) {
              break lab30;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab31: {
            if (!this.r_mark_lAr()) {
              break lab31;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab32: {
            if (!this.r_mark_yUm()) {
              break lab32;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab33: {
            if (!this.r_mark_sUn()) {
              break lab33;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab34: {
            if (!this.r_mark_yUz()) {
              break lab34;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
        }
        if (!this.r_mark_ymUs_()) {
          this.cursor = this.limit - v_9;
          break lab28;
        }
      }
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  private r_stem_suffix_chain_before_ki() {
    this.ket = this.cursor;
    if (!this.r_mark_ki()) {
      return false;
    }
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.r_mark_DA()) {
          break lab1;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_2 = this.limit - this.cursor;
        lab2: {
          this.ket = this.cursor;
          lab3: {
            const v_3 = this.limit - this.cursor;
            lab4: {
              if (!this.r_mark_lAr()) {
                break lab4;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              const v_4 = this.limit - this.cursor;
              lab5: {
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_4;
                  break lab5;
                }
              }
              break lab3;
            }
            this.cursor = this.limit - v_3;
            if (!this.r_mark_possessives()) {
              this.cursor = this.limit - v_2;
              break lab2;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            const v_5 = this.limit - this.cursor;
            lab6: {
              this.ket = this.cursor;
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_5;
                break lab6;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_5;
                break lab6;
              }
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab7: {
        if (!this.r_mark_nUn()) {
          break lab7;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_6 = this.limit - this.cursor;
        lab8: {
          this.ket = this.cursor;
          lab9: {
            const v_7 = this.limit - this.cursor;
            lab10: {
              if (!this.r_mark_lArI()) {
                break lab10;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              break lab9;
            }
            this.cursor = this.limit - v_7;
            lab11: {
              this.ket = this.cursor;
              lab12: {
                const v_8 = this.limit - this.cursor;
                lab13: {
                  if (!this.r_mark_possessives()) {
                    break lab13;
                  }
                  break lab12;
                }
                this.cursor = this.limit - v_8;
                if (!this.r_mark_sU()) {
                  break lab11;
                }
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              const v_9 = this.limit - this.cursor;
              lab14: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_9;
                  break lab14;
                }
                this.bra = this.cursor;
                if (!this.slice_del()) {
                  return false;
                }
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_9;
                  break lab14;
                }
              }
              break lab9;
            }
            this.cursor = this.limit - v_7;
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_6;
              break lab8;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      if (!this.r_mark_ndA()) {
        return false;
      }
      lab15: {
        const v_10 = this.limit - this.cursor;
        lab16: {
          if (!this.r_mark_lArI()) {
            break lab16;
          }
          this.bra = this.cursor;
          if (!this.slice_del()) {
            return false;
          }
          break lab15;
        }
        this.cursor = this.limit - v_10;
        lab17: {
          if (!this.r_mark_sU()) {
            break lab17;
          }
          this.bra = this.cursor;
          if (!this.slice_del()) {
            return false;
          }
          const v_11 = this.limit - this.cursor;
          lab18: {
            this.ket = this.cursor;
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_11;
              break lab18;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_11;
              break lab18;
            }
          }
          break lab15;
        }
        this.cursor = this.limit - v_10;
        if (!this.r_stem_suffix_chain_before_ki()) {
          return false;
        }
      }
    }
    return true;
  }

  private r_stem_noun_suffixes() {
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        this.ket = this.cursor;
        if (!this.r_mark_lAr()) {
          break lab1;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_2 = this.limit - this.cursor;
        lab2: {
          if (!this.r_stem_suffix_chain_before_ki()) {
            this.cursor = this.limit - v_2;
            break lab2;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab3: {
        this.ket = this.cursor;
        if (!this.r_mark_ncA()) {
          break lab3;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_3 = this.limit - this.cursor;
        lab4: {
          lab5: {
            const v_4 = this.limit - this.cursor;
            lab6: {
              this.ket = this.cursor;
              if (!this.r_mark_lArI()) {
                break lab6;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              break lab5;
            }
            this.cursor = this.limit - v_4;
            lab7: {
              this.ket = this.cursor;
              lab8: {
                const v_5 = this.limit - this.cursor;
                lab9: {
                  if (!this.r_mark_possessives()) {
                    break lab9;
                  }
                  break lab8;
                }
                this.cursor = this.limit - v_5;
                if (!this.r_mark_sU()) {
                  break lab7;
                }
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              const v_6 = this.limit - this.cursor;
              lab10: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_6;
                  break lab10;
                }
                this.bra = this.cursor;
                if (!this.slice_del()) {
                  return false;
                }
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_6;
                  break lab10;
                }
              }
              break lab5;
            }
            this.cursor = this.limit - v_4;
            this.ket = this.cursor;
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_3;
              break lab4;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_3;
              break lab4;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab11: {
        this.ket = this.cursor;
        lab12: {
          const v_7 = this.limit - this.cursor;
          lab13: {
            if (!this.r_mark_ndA()) {
              break lab13;
            }
            break lab12;
          }
          this.cursor = this.limit - v_7;
          if (!this.r_mark_nA()) {
            break lab11;
          }
        }
        lab14: {
          const v_8 = this.limit - this.cursor;
          lab15: {
            if (!this.r_mark_lArI()) {
              break lab15;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            break lab14;
          }
          this.cursor = this.limit - v_8;
          lab16: {
            if (!this.r_mark_sU()) {
              break lab16;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            const v_9 = this.limit - this.cursor;
            lab17: {
              this.ket = this.cursor;
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_9;
                break lab17;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_9;
                break lab17;
              }
            }
            break lab14;
          }
          this.cursor = this.limit - v_8;
          if (!this.r_stem_suffix_chain_before_ki()) {
            break lab11;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab18: {
        this.ket = this.cursor;
        lab19: {
          const v_10 = this.limit - this.cursor;
          lab20: {
            if (!this.r_mark_ndAn()) {
              break lab20;
            }
            break lab19;
          }
          this.cursor = this.limit - v_10;
          if (!this.r_mark_nU()) {
            break lab18;
          }
        }
        lab21: {
          const v_11 = this.limit - this.cursor;
          lab22: {
            if (!this.r_mark_sU()) {
              break lab22;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            const v_12 = this.limit - this.cursor;
            lab23: {
              this.ket = this.cursor;
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_12;
                break lab23;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_12;
                break lab23;
              }
            }
            break lab21;
          }
          this.cursor = this.limit - v_11;
          if (!this.r_mark_lArI()) {
            break lab18;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab24: {
        this.ket = this.cursor;
        if (!this.r_mark_DAn()) {
          break lab24;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_13 = this.limit - this.cursor;
        lab25: {
          this.ket = this.cursor;
          lab26: {
            const v_14 = this.limit - this.cursor;
            lab27: {
              if (!this.r_mark_possessives()) {
                break lab27;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              const v_15 = this.limit - this.cursor;
              lab28: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_15;
                  break lab28;
                }
                this.bra = this.cursor;
                if (!this.slice_del()) {
                  return false;
                }
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_15;
                  break lab28;
                }
              }
              break lab26;
            }
            this.cursor = this.limit - v_14;
            lab29: {
              if (!this.r_mark_lAr()) {
                break lab29;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              const v_16 = this.limit - this.cursor;
              lab30: {
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_16;
                  break lab30;
                }
              }
              break lab26;
            }
            this.cursor = this.limit - v_14;
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_13;
              break lab25;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab31: {
        this.ket = this.cursor;
        lab32: {
          const v_17 = this.limit - this.cursor;
          lab33: {
            if (!this.r_mark_nUn()) {
              break lab33;
            }
            break lab32;
          }
          this.cursor = this.limit - v_17;
          if (!this.r_mark_ylA()) {
            break lab31;
          }
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_18 = this.limit - this.cursor;
        lab34: {
          lab35: {
            const v_19 = this.limit - this.cursor;
            lab36: {
              this.ket = this.cursor;
              if (!this.r_mark_lAr()) {
                break lab36;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              if (!this.r_stem_suffix_chain_before_ki()) {
                break lab36;
              }
              break lab35;
            }
            this.cursor = this.limit - v_19;
            lab37: {
              this.ket = this.cursor;
              lab38: {
                const v_20 = this.limit - this.cursor;
                lab39: {
                  if (!this.r_mark_possessives()) {
                    break lab39;
                  }
                  break lab38;
                }
                this.cursor = this.limit - v_20;
                if (!this.r_mark_sU()) {
                  break lab37;
                }
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              const v_21 = this.limit - this.cursor;
              lab40: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_21;
                  break lab40;
                }
                this.bra = this.cursor;
                if (!this.slice_del()) {
                  return false;
                }
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_21;
                  break lab40;
                }
              }
              break lab35;
            }
            this.cursor = this.limit - v_19;
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_18;
              break lab34;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab41: {
        this.ket = this.cursor;
        if (!this.r_mark_lArI()) {
          break lab41;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab42: {
        if (!this.r_stem_suffix_chain_before_ki()) {
          break lab42;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab43: {
        this.ket = this.cursor;
        lab44: {
          const v_22 = this.limit - this.cursor;
          lab45: {
            if (!this.r_mark_DA()) {
              break lab45;
            }
            break lab44;
          }
          this.cursor = this.limit - v_22;
          lab46: {
            if (!this.r_mark_yU()) {
              break lab46;
            }
            break lab44;
          }
          this.cursor = this.limit - v_22;
          if (!this.r_mark_yA()) {
            break lab43;
          }
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        const v_23 = this.limit - this.cursor;
        lab47: {
          this.ket = this.cursor;
          lab48: {
            const v_24 = this.limit - this.cursor;
            lab49: {
              if (!this.r_mark_possessives()) {
                break lab49;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              const v_25 = this.limit - this.cursor;
              lab50: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_25;
                  break lab50;
                }
              }
              break lab48;
            }
            this.cursor = this.limit - v_24;
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_23;
              break lab47;
            }
          }
          this.bra = this.cursor;
          if (!this.slice_del()) {
            return false;
          }
          this.ket = this.cursor;
          if (!this.r_stem_suffix_chain_before_ki()) {
            this.cursor = this.limit - v_23;
            break lab47;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      this.ket = this.cursor;
      lab51: {
        const v_26 = this.limit - this.cursor;
        lab52: {
          if (!this.r_mark_possessives()) {
            break lab52;
          }
          break lab51;
        }
        this.cursor = this.limit - v_26;
        if (!this.r_mark_sU()) {
          return false;
        }
      }
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
      const v_27 = this.limit - this.cursor;
      lab53: {
        this.ket = this.cursor;
        if (!this.r_mark_lAr()) {
          this.cursor = this.limit - v_27;
          break lab53;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        if (!this.r_stem_suffix_chain_before_ki()) {
          this.cursor = this.limit - v_27;
          break lab53;
        }
      }
    }
    return true;
  }

  private r_post_process_last_consonants() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_23);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_from("p")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("\u00E7")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("t")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("k")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_append_U_to_stems_ending_with_d_or_g() {
    const v_1 = this.limit - this.cursor;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("d")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("g")) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    lab2: {
      const v_3 = this.limit - this.cursor;
      lab3: {
        const v_4 = this.limit - this.cursor;
        golab4:
        while (true) {
          const v_5 = this.limit - this.cursor;
          lab5: {
            if (!this.in_grouping_b(g_vowel, 97, 305)) {
              break lab5;
            }
            this.cursor = this.limit - v_5;
            break golab4;
          }
          this.cursor = this.limit - v_5;
          if (this.cursor <= this.limit_backward) {
            break lab3;
          }
          this.cursor--;
        }
        lab6: {
          const v_6 = this.limit - this.cursor;
          lab7: {
            if (!this.eq_s_b("a")) {
              break lab7;
            }
            break lab6;
          }
          this.cursor = this.limit - v_6;
          if (!this.eq_s_b("\u0131")) {
            break lab3;
          }
        }
        this.cursor = this.limit - v_4;
        {
          const c1 = this.cursor;
          this.insert(this.cursor, this.cursor, "\u0131");
          this.cursor = c1;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab8: {
        const v_7 = this.limit - this.cursor;
        golab9:
        while (true) {
          const v_8 = this.limit - this.cursor;
          lab10: {
            if (!this.in_grouping_b(g_vowel, 97, 305)) {
              break lab10;
            }
            this.cursor = this.limit - v_8;
            break golab9;
          }
          this.cursor = this.limit - v_8;
          if (this.cursor <= this.limit_backward) {
            break lab8;
          }
          this.cursor--;
        }
        lab11: {
          const v_9 = this.limit - this.cursor;
          lab12: {
            if (!this.eq_s_b("e")) {
              break lab12;
            }
            break lab11;
          }
          this.cursor = this.limit - v_9;
          if (!this.eq_s_b("i")) {
            break lab8;
          }
        }
        this.cursor = this.limit - v_7;
        {
          const c2 = this.cursor;
          this.insert(this.cursor, this.cursor, "i");
          this.cursor = c2;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab13: {
        const v_10 = this.limit - this.cursor;
        golab14:
        while (true) {
          const v_11 = this.limit - this.cursor;
          lab15: {
            if (!this.in_grouping_b(g_vowel, 97, 305)) {
              break lab15;
            }
            this.cursor = this.limit - v_11;
            break golab14;
          }
          this.cursor = this.limit - v_11;
          if (this.cursor <= this.limit_backward) {
            break lab13;
          }
          this.cursor--;
        }
        lab16: {
          const v_12 = this.limit - this.cursor;
          lab17: {
            if (!this.eq_s_b("o")) {
              break lab17;
            }
            break lab16;
          }
          this.cursor = this.limit - v_12;
          if (!this.eq_s_b("u")) {
            break lab13;
          }
        }
        this.cursor = this.limit - v_10;
        {
          const c3 = this.cursor;
          this.insert(this.cursor, this.cursor, "u");
          this.cursor = c3;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      const v_13 = this.limit - this.cursor;
      golab18:
      while (true) {
        const v_14 = this.limit - this.cursor;
        lab19: {
          if (!this.in_grouping_b(g_vowel, 97, 305)) {
            break lab19;
          }
          this.cursor = this.limit - v_14;
          break golab18;
        }
        this.cursor = this.limit - v_14;
        if (this.cursor <= this.limit_backward) {
          return false;
        }
        this.cursor--;
      }
      lab20: {
        const v_15 = this.limit - this.cursor;
        lab21: {
          if (!this.eq_s_b("\u00F6")) {
            break lab21;
          }
          break lab20;
        }
        this.cursor = this.limit - v_15;
        if (!this.eq_s_b("\u00FC")) {
          return false;
        }
      }
      this.cursor = this.limit - v_13;
      {
        const c4 = this.cursor;
        this.insert(this.cursor, this.cursor, "\u00FC");
        this.cursor = c4;
      }
    }
    return true;
  }

  private r_is_reserved_word() {
    if (!this.eq_s_b("ad")) {
      return false;
    }
    const v_1 = this.limit - this.cursor;
    lab0: {
      if (!this.eq_s_b("soy")) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
    }
    if (this.cursor > this.limit_backward) {
      return false;
    }
    return true;
  }

  private r_more_than_one_syllable_word() {
    const v_1 = this.cursor;
    {
      let v_2 = 2;
      while (true) {
        const v_3 = this.cursor;
        lab0: {
          golab1:
          while (true) {
            lab2: {
              if (!this.in_grouping(g_vowel, 97, 305)) {
                break lab2;
              }
              break golab1;
            }
            if (this.cursor >= this.limit) {
              break lab0;
            }
            this.cursor++;
          }
          v_2--;
          continue;
        }
        this.cursor = v_3;
        break;
      }
      if (v_2 > 0) {
        return false;
      }
    }
    this.cursor = v_1;
    return true;
  }

  private r_postlude() {
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    {
      const v_1 = this.limit - this.cursor;
      lab0: {
        if (!this.r_is_reserved_word()) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_1;
    }
    const v_2 = this.limit - this.cursor;
    this.r_append_U_to_stems_ending_with_d_or_g();
    this.cursor = this.limit - v_2;
    const v_3 = this.limit - this.cursor;
    this.r_post_process_last_consonants();
    this.cursor = this.limit - v_3;
    this.cursor = this.limit_backward;
    return true;
  }

  _stemHelper() {
    if (!this.r_more_than_one_syllable_word()) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_1 = this.limit - this.cursor;
    this.r_stem_nominal_verb_suffixes();
    this.cursor = this.limit - v_1;
    if (!this.B_continue_stemming_noun_suffixes) {
      return false;
    }
    const v_2 = this.limit - this.cursor;
    this.r_stem_noun_suffixes();
    this.cursor = this.limit - v_2;
    this.cursor = this.limit_backward;
    if (!this.r_postlude()) {
      return false;
    }
    return true;
  }
}
