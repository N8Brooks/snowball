import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["cs", -1, -1],
  ["dzs", -1, -1],
  ["gy", -1, -1],
  ["ly", -1, -1],
  ["ny", -1, -1],
  ["sz", -1, -1],
  ["ty", -1, -1],
  ["zs", -1, -1],
];

const a_1: Rule[] = [
  ["\u00E1", -1, 1],
  ["\u00E9", -1, 2],
];

const a_2: Rule[] = [
  ["bb", -1, -1],
  ["cc", -1, -1],
  ["dd", -1, -1],
  ["ff", -1, -1],
  ["gg", -1, -1],
  ["jj", -1, -1],
  ["kk", -1, -1],
  ["ll", -1, -1],
  ["mm", -1, -1],
  ["nn", -1, -1],
  ["pp", -1, -1],
  ["rr", -1, -1],
  ["ccs", -1, -1],
  ["ss", -1, -1],
  ["zzs", -1, -1],
  ["tt", -1, -1],
  ["vv", -1, -1],
  ["ggy", -1, -1],
  ["lly", -1, -1],
  ["nny", -1, -1],
  ["tty", -1, -1],
  ["ssz", -1, -1],
  ["zz", -1, -1],
];

const a_3: Rule[] = [
  ["al", -1, 1],
  ["el", -1, 1],
];

const a_4: Rule[] = [
  ["ba", -1, -1],
  ["ra", -1, -1],
  ["be", -1, -1],
  ["re", -1, -1],
  ["ig", -1, -1],
  ["nak", -1, -1],
  ["nek", -1, -1],
  ["val", -1, -1],
  ["vel", -1, -1],
  ["ul", -1, -1],
  ["n\u00E1l", -1, -1],
  ["n\u00E9l", -1, -1],
  ["b\u00F3l", -1, -1],
  ["r\u00F3l", -1, -1],
  ["t\u00F3l", -1, -1],
  ["\u00FCl", -1, -1],
  ["b\u0151l", -1, -1],
  ["r\u0151l", -1, -1],
  ["t\u0151l", -1, -1],
  ["n", -1, -1],
  ["an", 19, -1],
  ["ban", 20, -1],
  ["en", 19, -1],
  ["ben", 22, -1],
  ["k\u00E9ppen", 22, -1],
  ["on", 19, -1],
  ["\u00F6n", 19, -1],
  ["k\u00E9pp", -1, -1],
  ["kor", -1, -1],
  ["t", -1, -1],
  ["at", 29, -1],
  ["et", 29, -1],
  ["k\u00E9nt", 29, -1],
  ["ank\u00E9nt", 32, -1],
  ["enk\u00E9nt", 32, -1],
  ["onk\u00E9nt", 32, -1],
  ["ot", 29, -1],
  ["\u00E9rt", 29, -1],
  ["\u00F6t", 29, -1],
  ["hez", -1, -1],
  ["hoz", -1, -1],
  ["h\u00F6z", -1, -1],
  ["v\u00E1", -1, -1],
  ["v\u00E9", -1, -1],
];

const a_5: Rule[] = [
  ["\u00E1n", -1, 2],
  ["\u00E9n", -1, 1],
  ["\u00E1nk\u00E9nt", -1, 2],
];

const a_6: Rule[] = [
  ["stul", -1, 1],
  ["astul", 0, 1],
  ["\u00E1stul", 0, 2],
  ["st\u00FCl", -1, 1],
  ["est\u00FCl", 3, 1],
  ["\u00E9st\u00FCl", 3, 3],
];

const a_7: Rule[] = [
  ["\u00E1", -1, 1],
  ["\u00E9", -1, 1],
];

const a_8: Rule[] = [
  ["k", -1, 3],
  ["ak", 0, 3],
  ["ek", 0, 3],
  ["ok", 0, 3],
  ["\u00E1k", 0, 1],
  ["\u00E9k", 0, 2],
  ["\u00F6k", 0, 3],
];

const a_9: Rule[] = [
  ["\u00E9i", -1, 1],
  ["\u00E1\u00E9i", 0, 3],
  ["\u00E9\u00E9i", 0, 2],
  ["\u00E9", -1, 1],
  ["k\u00E9", 3, 1],
  ["ak\u00E9", 4, 1],
  ["ek\u00E9", 4, 1],
  ["ok\u00E9", 4, 1],
  ["\u00E1k\u00E9", 4, 3],
  ["\u00E9k\u00E9", 4, 2],
  ["\u00F6k\u00E9", 4, 1],
  ["\u00E9\u00E9", 3, 2],
];

const a_10: Rule[] = [
  ["a", -1, 1],
  ["ja", 0, 1],
  ["d", -1, 1],
  ["ad", 2, 1],
  ["ed", 2, 1],
  ["od", 2, 1],
  ["\u00E1d", 2, 2],
  ["\u00E9d", 2, 3],
  ["\u00F6d", 2, 1],
  ["e", -1, 1],
  ["je", 9, 1],
  ["nk", -1, 1],
  ["unk", 11, 1],
  ["\u00E1nk", 11, 2],
  ["\u00E9nk", 11, 3],
  ["\u00FCnk", 11, 1],
  ["uk", -1, 1],
  ["juk", 16, 1],
  ["\u00E1juk", 17, 2],
  ["\u00FCk", -1, 1],
  ["j\u00FCk", 19, 1],
  ["\u00E9j\u00FCk", 20, 3],
  ["m", -1, 1],
  ["am", 22, 1],
  ["em", 22, 1],
  ["om", 22, 1],
  ["\u00E1m", 22, 2],
  ["\u00E9m", 22, 3],
  ["o", -1, 1],
  ["\u00E1", -1, 2],
  ["\u00E9", -1, 3],
];

const a_11: Rule[] = [
  ["id", -1, 1],
  ["aid", 0, 1],
  ["jaid", 1, 1],
  ["eid", 0, 1],
  ["jeid", 3, 1],
  ["\u00E1id", 0, 2],
  ["\u00E9id", 0, 3],
  ["i", -1, 1],
  ["ai", 7, 1],
  ["jai", 8, 1],
  ["ei", 7, 1],
  ["jei", 10, 1],
  ["\u00E1i", 7, 2],
  ["\u00E9i", 7, 3],
  ["itek", -1, 1],
  ["eitek", 14, 1],
  ["jeitek", 15, 1],
  ["\u00E9itek", 14, 3],
  ["ik", -1, 1],
  ["aik", 18, 1],
  ["jaik", 19, 1],
  ["eik", 18, 1],
  ["jeik", 21, 1],
  ["\u00E1ik", 18, 2],
  ["\u00E9ik", 18, 3],
  ["ink", -1, 1],
  ["aink", 25, 1],
  ["jaink", 26, 1],
  ["eink", 25, 1],
  ["jeink", 28, 1],
  ["\u00E1ink", 25, 2],
  ["\u00E9ink", 25, 3],
  ["aitok", -1, 1],
  ["jaitok", 32, 1],
  ["\u00E1itok", -1, 2],
  ["im", -1, 1],
  ["aim", 35, 1],
  ["jaim", 36, 1],
  ["eim", 35, 1],
  ["jeim", 38, 1],
  ["\u00E1im", 35, 2],
  ["\u00E9im", 35, 3],
];

// deno-fmt-ignore
const g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 36, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1];

export class HungarianStemmer extends Stemmer {
  private I_p1 = 0;

  stopWords = undefined;

  r_mark_regions() {
    this.I_p1 = this.limit;
    lab0: {
      const v_1 = this.cursor;
      lab1: {
        if (!this.in_grouping(g_v, 97, 369)) {
          break lab1;
        }
        golab2:
        while (true) {
          const v_2 = this.cursor;
          lab3: {
            if (!this.out_grouping(g_v, 97, 369)) {
              break lab3;
            }
            this.cursor = v_2;
            break golab2;
          }
          this.cursor = v_2;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        lab4: {
          const v_3 = this.cursor;
          lab5: {
            if (this.find_among(a_0) == 0) {
              break lab5;
            }
            break lab4;
          }
          this.cursor = v_3;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        this.I_p1 = this.cursor;
        break lab0;
      }
      this.cursor = v_1;
      if (!this.out_grouping(g_v, 97, 369)) {
        return false;
      }
      golab6:
      while (true) {
        lab7: {
          if (!this.in_grouping(g_v, 97, 369)) {
            break lab7;
          }
          break golab6;
        }
        if (this.cursor >= this.limit) {
          return false;
        }
        this.cursor++;
      }
      this.I_p1 = this.cursor;
    }
    return true;
  }

  r_R1() {
    if (!(this.I_p1 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_v_ending() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_1);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_from("a")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_double() {
    const v_1 = this.limit - this.cursor;
    if (this.find_among_b(a_2) == 0) {
      return false;
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  r_undouble() {
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    this.ket = this.cursor;
    {
      const c1 = this.cursor - 1;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_instrum() {
    this.ket = this.cursor;
    if (this.find_among_b(a_3) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    if (!this.r_double()) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_case() {
    this.ket = this.cursor;
    if (this.find_among_b(a_4) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    if (!this.r_v_ending()) {
      return false;
    }
    return true;
  }

  r_case_special() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_5);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("a")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_case_other() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_6);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("a")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_factive() {
    this.ket = this.cursor;
    if (this.find_among_b(a_7) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    if (!this.r_double()) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_plural() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_8);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_from("a")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_owned() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_9);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("a")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_sing_owner() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_10);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("a")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_plur_owner() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_11);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("a")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
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
    this.r_instrum();
    this.cursor = this.limit - v_2;
    const v_3 = this.limit - this.cursor;
    this.r_case();
    this.cursor = this.limit - v_3;
    const v_4 = this.limit - this.cursor;
    this.r_case_special();
    this.cursor = this.limit - v_4;
    const v_5 = this.limit - this.cursor;
    this.r_case_other();
    this.cursor = this.limit - v_5;
    const v_6 = this.limit - this.cursor;
    this.r_factive();
    this.cursor = this.limit - v_6;
    const v_7 = this.limit - this.cursor;
    this.r_owned();
    this.cursor = this.limit - v_7;
    const v_8 = this.limit - this.cursor;
    this.r_sing_owner();
    this.cursor = this.limit - v_8;
    const v_9 = this.limit - this.cursor;
    this.r_plur_owner();
    this.cursor = this.limit - v_9;
    const v_10 = this.limit - this.cursor;
    this.r_plural();
    this.cursor = this.limit - v_10;
    this.cursor = this.limit_backward;
    return true;
  }
}
