import { Rule } from "./_stemmer.ts";
import { Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["hed", -1, 1],
  ["ethed", 0, 1],
  ["ered", -1, 1],
  ["e", -1, 1],
  ["erede", 3, 1],
  ["ende", 3, 1],
  ["erende", 5, 1],
  ["ene", 3, 1],
  ["erne", 3, 1],
  ["ere", 3, 1],
  ["en", -1, 1],
  ["heden", 10, 1],
  ["eren", 10, 1],
  ["er", -1, 1],
  ["heder", 13, 1],
  ["erer", 13, 1],
  ["s", -1, 2],
  ["heds", 16, 1],
  ["es", 16, 1],
  ["endes", 18, 1],
  ["erendes", 19, 1],
  ["enes", 18, 1],
  ["ernes", 18, 1],
  ["eres", 18, 1],
  ["ens", 16, 1],
  ["hedens", 24, 1],
  ["erens", 24, 1],
  ["ers", 16, 1],
  ["ets", 16, 1],
  ["erets", 28, 1],
  ["et", -1, 1],
  ["eret", 30, 1],
];

const a_1: Rule[] = [
  ["gd", -1, -1],
  ["dt", -1, -1],
  ["gt", -1, -1],
  ["kt", -1, -1],
];

const a_2: Rule[] = [
  ["ig", -1, 1],
  ["lig", 0, 1],
  ["elig", 1, 1],
  ["els", -1, 1],
  ["l\u00F8st", -1, 2],
];

const g_c = [119, 223, 119, 1];

const g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];

const g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16];

export class DanishStemmer extends Stemmer {
  private I_x = 0;
  private I_p1 = 0;
  private S_ch = "";

  readonly stopWords = undefined;

  r_mark_regions() {
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

  r_main_suffix() {
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
        if (!this.in_grouping_b(g_s_ending, 97, 229)) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_consonant_pair() {
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

  r_other_suffix() {
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      if (!this.eq_s_b("st")) {
        break lab0;
      }
      this.bra = this.cursor;
      if (!this.eq_s_b("ig")) {
        break lab0;
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_3 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_2);
    if (among_var == 0) {
      this.limit_backward = v_3;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_3;
    switch (among_var) {
      case 1: {
        if (!this.slice_del()) {
          return false;
        }
        const v_4 = this.limit - this.cursor;
        this.r_consonant_pair();
        this.cursor = this.limit - v_4;
        break;
      }
      case 2:
        if (!this.slice_from("l\u00F8s")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_undouble() {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    if (!this.in_grouping_b(g_c, 98, 122)) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.S_ch = this.slice_to();
    if (this.S_ch == "") {
      return false;
    }
    this.limit_backward = v_2;
    if (!this.eq_s_b(this.S_ch)) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  stemHelper() {
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
    const v_5 = this.limit - this.cursor;
    this.r_undouble();
    this.cursor = this.limit - v_5;
    this.cursor = this.limit_backward;
    return true;
  }
}
