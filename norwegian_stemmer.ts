import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["a", -1, 1],
  ["e", -1, 1],
  ["ede", 1, 1],
  ["ande", 1, 1],
  ["ende", 1, 1],
  ["ane", 1, 1],
  ["ene", 1, 1],
  ["hetene", 6, 1],
  ["erte", 1, 3],
  ["en", -1, 1],
  ["heten", 9, 1],
  ["ar", -1, 1],
  ["er", -1, 1],
  ["heter", 12, 1],
  ["s", -1, 2],
  ["as", 14, 1],
  ["es", 14, 1],
  ["edes", 16, 1],
  ["endes", 16, 1],
  ["enes", 16, 1],
  ["hetenes", 19, 1],
  ["ens", 14, 1],
  ["hetens", 21, 1],
  ["ers", 14, 1],
  ["ets", 14, 1],
  ["et", -1, 1],
  ["het", 25, 1],
  ["ert", -1, 3],
  ["ast", -1, 1],
];

const a_1: Rule[] = [
  ["dt", -1, -1],
  ["vt", -1, -1],
];

const a_2: Rule[] = [
  ["leg", -1, 1],
  ["eleg", 0, 1],
  ["ig", -1, 1],
  ["eig", 2, 1],
  ["lig", 2, 1],
  ["elig", 4, 1],
  ["els", -1, 1],
  ["lov", -1, 1],
  ["elov", 7, 1],
  ["slov", 7, 1],
  ["hetslov", 9, 1],
];

const g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];

const g_s_ending = [119, 125, 149, 1];

/** Stemmer for the Norwegian language */
export class NorwegianStemmer extends Stemmer {
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
        if (!this.in_grouping(g_v, 97, 248)) {
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
        if (!this.out_grouping(g_v, 97, 248)) {
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
        lab0: {
          const v_3 = this.limit - this.cursor;
          lab1: {
            if (!this.in_grouping_b(g_s_ending, 98, 122)) {
              break lab1;
            }
            break lab0;
          }
          this.cursor = this.limit - v_3;
          if (!this.eq_s_b("k")) {
            return false;
          }
          if (!this.out_grouping_b(g_v, 97, 248)) {
            return false;
          }
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("er")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_consonant_pair() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_3 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    if (this.find_among_b(a_1) == 0) {
      this.limit_backward = v_3;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_3;
    this.cursor = this.limit - v_1;
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  private r_other_suffix() {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    if (this.find_among_b(a_2) == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    if (!this.slice_del()) {
      return false;
    }
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
