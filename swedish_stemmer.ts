import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["a", -1, 1],
  ["arna", 0, 1],
  ["erna", 0, 1],
  ["heterna", 2, 1],
  ["orna", 0, 1],
  ["ad", -1, 1],
  ["e", -1, 1],
  ["ade", 6, 1],
  ["ande", 6, 1],
  ["arne", 6, 1],
  ["are", 6, 1],
  ["aste", 6, 1],
  ["en", -1, 1],
  ["anden", 12, 1],
  ["aren", 12, 1],
  ["heten", 12, 1],
  ["ern", -1, 1],
  ["ar", -1, 1],
  ["er", -1, 1],
  ["heter", 18, 1],
  ["or", -1, 1],
  ["s", -1, 2],
  ["as", 21, 1],
  ["arnas", 22, 1],
  ["ernas", 22, 1],
  ["ornas", 22, 1],
  ["es", 21, 1],
  ["ades", 26, 1],
  ["andes", 26, 1],
  ["ens", 21, 1],
  ["arens", 29, 1],
  ["hetens", 29, 1],
  ["erns", 21, 1],
  ["at", -1, 1],
  ["andet", -1, 1],
  ["het", -1, 1],
  ["ast", -1, 1],
];

const a_1: Rule[] = [
  ["dd", -1, -1],
  ["gd", -1, -1],
  ["nn", -1, -1],
  ["dt", -1, -1],
  ["gt", -1, -1],
  ["kt", -1, -1],
  ["tt", -1, -1],
];

const a_2: Rule[] = [
  ["ig", -1, 1],
  ["lig", 0, 1],
  ["els", -1, 1],
  ["fullt", -1, 3],
  ["l\u00F6st", -1, 2],
];

const g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32];

const g_s_ending = [119, 127, 149];

/** Stemmer for the Swedish language */
export class SwedishStemmer extends Stemmer {
  private I_x = 0;
  private I_p1 = 0;

  private r_mark_regions() {
    this.I_p1 = this.limit;
    const v_1 = this.cursor;
    {
      const c1 = this.cursor + 3;
      if (c1 > this.limit) {
        return false;
      }
      this.cursor = c1;
    }
    this.I_x = this.cursor;
    this.cursor = v_1;
    golab0:
    while (true) {
      const v_2 = this.cursor;
      lab1: {
        if (!this.in_grouping(g_v, 97, 246)) {
          break lab1;
        }
        this.cursor = v_2;
        break golab0;
      }
      this.cursor = v_2;
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    golab2:
    while (true) {
      lab3: {
        if (!this.out_grouping(g_v, 97, 246)) {
          break lab3;
        }
        break golab2;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    this.I_p1 = this.cursor;
    lab4: {
      if (!(this.I_p1 < this.I_x)) {
        break lab4;
      }
      this.I_p1 = this.I_x;
    }
    return true;
  }

  private r_main_suffix() {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_0);
    if (among_var == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.in_grouping_b(g_s_ending, 98, 121)) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_consonant_pair() {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    const v_3 = this.limit - this.cursor;
    if (this.find_among_b(a_1) == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.cursor = this.limit - v_3;
    this.ket = this.cursor;
    if (this.cursor <= this.limit_backward) {
      this.limit_backward = v_2;
      return false;
    }
    this.cursor--;
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.limit_backward = v_2;
    return true;
  }

  private r_other_suffix() {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_2);
    if (among_var == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("l\u00F6s")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("full")) {
          return false;
        }
        break;
    }
    this.limit_backward = v_2;
    return true;
  }

  _stemHelper() {
    const v_1 = this.cursor;
    this.r_mark_regions();
    this.cursor = v_1;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_2 = this.limit - this.cursor;
    this.r_main_suffix();
    this.cursor = this.limit - v_2;
    const v_3 = this.limit - this.cursor;
    this.r_consonant_pair();
    this.cursor = this.limit - v_3;
    const v_4 = this.limit - this.cursor;
    this.r_other_suffix();
    this.cursor = this.limit - v_4;
    this.cursor = this.limit_backward;
    return true;
  }
}
