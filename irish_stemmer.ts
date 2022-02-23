import { IRISH_STOP_WORDS } from "./irish_stop_words.ts";
import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["b'", -1, 1],
  ["bh", -1, 4],
  ["bhf", 1, 2],
  ["bp", -1, 8],
  ["ch", -1, 5],
  ["d'", -1, 1],
  ["d'fh", 5, 2],
  ["dh", -1, 6],
  ["dt", -1, 9],
  ["fh", -1, 2],
  ["gc", -1, 5],
  ["gh", -1, 7],
  ["h-", -1, 1],
  ["m'", -1, 1],
  ["mb", -1, 4],
  ["mh", -1, 10],
  ["n-", -1, 1],
  ["nd", -1, 6],
  ["ng", -1, 7],
  ["ph", -1, 8],
  ["sh", -1, 3],
  ["t-", -1, 1],
  ["th", -1, 9],
  ["ts", -1, 3],
];

const a_1: Rule[] = [
  ["\u00EDochta", -1, 1],
  ["a\u00EDochta", 0, 1],
  ["ire", -1, 2],
  ["aire", 2, 2],
  ["abh", -1, 1],
  ["eabh", 4, 1],
  ["ibh", -1, 1],
  ["aibh", 6, 1],
  ["amh", -1, 1],
  ["eamh", 8, 1],
  ["imh", -1, 1],
  ["aimh", 10, 1],
  ["\u00EDocht", -1, 1],
  ["a\u00EDocht", 12, 1],
  ["ir\u00ED", -1, 2],
  ["air\u00ED", 14, 2],
];

const a_2: Rule[] = [
  ["\u00F3ideacha", -1, 6],
  ["patacha", -1, 5],
  ["achta", -1, 1],
  ["arcachta", 2, 2],
  ["eachta", 2, 1],
  ["grafa\u00EDochta", -1, 4],
  ["paite", -1, 5],
  ["ach", -1, 1],
  ["each", 7, 1],
  ["\u00F3ideach", 8, 6],
  ["gineach", 8, 3],
  ["patach", 7, 5],
  ["grafa\u00EDoch", -1, 4],
  ["pataigh", -1, 5],
  ["\u00F3idigh", -1, 6],
  ["acht\u00FAil", -1, 1],
  ["eacht\u00FAil", 15, 1],
  ["gineas", -1, 3],
  ["ginis", -1, 3],
  ["acht", -1, 1],
  ["arcacht", 19, 2],
  ["eacht", 19, 1],
  ["grafa\u00EDocht", -1, 4],
  ["arcachta\u00ED", -1, 2],
  ["grafa\u00EDochta\u00ED", -1, 4],
];

const a_3: Rule[] = [
  ["imid", -1, 1],
  ["aimid", 0, 1],
  ["\u00EDmid", -1, 1],
  ["a\u00EDmid", 2, 1],
  ["adh", -1, 2],
  ["eadh", 4, 2],
  ["faidh", -1, 1],
  ["fidh", -1, 1],
  ["\u00E1il", -1, 2],
  ["ain", -1, 2],
  ["tear", -1, 2],
  ["tar", -1, 2],
];

const g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 2];

export class IrishStemmer extends Stemmer {
  private I_p2 = 0;
  private I_p1 = 0;
  private I_pV = 0;

  readonly stopWords = IRISH_STOP_WORDS;

  r_mark_regions() {
    this.I_pV = this.limit;
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      golab1:
      while (true) {
        lab2: {
          if (!this.in_grouping(g_v, 97, 250)) {
            break lab2;
          }
          break golab1;
        }
        if (this.cursor >= this.limit) {
          break lab0;
        }
        this.cursor++;
      }
      this.I_pV = this.cursor;
      golab3:
      while (true) {
        lab4: {
          if (!this.out_grouping(g_v, 97, 250)) {
            break lab4;
          }
          break golab3;
        }
        if (this.cursor >= this.limit) {
          break lab0;
        }
        this.cursor++;
      }
      this.I_p1 = this.cursor;
      golab5:
      while (true) {
        lab6: {
          if (!this.in_grouping(g_v, 97, 250)) {
            break lab6;
          }
          break golab5;
        }
        if (this.cursor >= this.limit) {
          break lab0;
        }
        this.cursor++;
      }
      golab7:
      while (true) {
        lab8: {
          if (!this.out_grouping(g_v, 97, 250)) {
            break lab8;
          }
          break golab7;
        }
        if (this.cursor >= this.limit) {
          break lab0;
        }
        this.cursor++;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_1;
    return true;
  }

  r_initial_morph() {
    this.bra = this.cursor;
    const among_var = this.find_among(a_0);
    if (among_var == 0) {
      return false;
    }
    this.ket = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("f")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("s")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("b")) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from("c")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("d")) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_from("g")) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_from("p")) {
          return false;
        }
        break;
      case 9:
        if (!this.slice_from("t")) {
          return false;
        }
        break;
      case 10:
        if (!this.slice_from("m")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_RV() {
    if (!(this.I_pV <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_R1() {
    if (!(this.I_p1 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_R2() {
    if (!(this.I_p2 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_noun_sfx() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_1);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_deriv() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_2);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("arc")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("gin")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("graf")) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from("paite")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("\u00F3id")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_verb_sfx() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_3);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  stemHelper() {
    const v_1 = this.cursor;
    this.r_initial_morph();
    this.cursor = v_1;
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_3 = this.limit - this.cursor;
    this.r_noun_sfx();
    this.cursor = this.limit - v_3;
    const v_4 = this.limit - this.cursor;
    this.r_deriv();
    this.cursor = this.limit - v_4;
    const v_5 = this.limit - this.cursor;
    this.r_verb_sfx();
    this.cursor = this.limit - v_5;
    this.cursor = this.limit_backward;
    return true;
  }
}
