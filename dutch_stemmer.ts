import { DUTCH_STOP_WORDS } from "./dutch_stop_words.ts";
import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["", -1, 6],
  ["\u00E1", 0, 1],
  ["\u00E4", 0, 1],
  ["\u00E9", 0, 2],
  ["\u00EB", 0, 2],
  ["\u00ED", 0, 3],
  ["\u00EF", 0, 3],
  ["\u00F3", 0, 4],
  ["\u00F6", 0, 4],
  ["\u00FA", 0, 5],
  ["\u00FC", 0, 5],
];

const a_1: Rule[] = [
  ["", -1, 3],
  ["I", 0, 2],
  ["Y", 0, 1],
];

const a_2: Rule[] = [
  ["dd", -1, -1],
  ["kk", -1, -1],
  ["tt", -1, -1],
];

const a_3: Rule[] = [
  ["ene", -1, 2],
  ["se", -1, 3],
  ["en", -1, 2],
  ["heden", 2, 1],
  ["s", -1, 3],
];

const a_4: Rule[] = [
  ["end", -1, 1],
  ["ig", -1, 2],
  ["ing", -1, 1],
  ["lijk", -1, 3],
  ["baar", -1, 4],
  ["bar", -1, 5],
];

const a_5: Rule[] = [
  ["aa", -1, -1],
  ["ee", -1, -1],
  ["oo", -1, -1],
  ["uu", -1, -1],
];

const g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

const g_v_I = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

const g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

export class DutchStemmer extends Stemmer {
  private I_p2 = 0;
  private I_p1 = 0;
  private B_e_found = false;

  readonly stopWords = DUTCH_STOP_WORDS;

  r_prelude() {
    const v_1 = this.cursor;
    while (true) {
      const v_2 = this.cursor;
      lab0: {
        this.bra = this.cursor;
        const among_var = this.find_among(a_0);
        if (among_var == 0) {
          break lab0;
        }
        this.ket = this.cursor;
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
            if (!this.slice_from("i")) {
              return false;
            }
            break;
          case 4:
            if (!this.slice_from("o")) {
              return false;
            }
            break;
          case 5:
            if (!this.slice_from("u")) {
              return false;
            }
            break;
          case 6:
            if (this.cursor >= this.limit) {
              break lab0;
            }
            this.cursor++;
            break;
        }
        continue;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    const v_3 = this.cursor;
    lab1: {
      this.bra = this.cursor;
      if (!this.eq_s("y")) {
        this.cursor = v_3;
        break lab1;
      }
      this.ket = this.cursor;
      if (!this.slice_from("Y")) {
        return false;
      }
    }
    while (true) {
      const v_4 = this.cursor;
      lab2: {
        golab3:
        while (true) {
          const v_5 = this.cursor;
          lab4: {
            if (!this.in_grouping(g_v, 97, 232)) {
              break lab4;
            }
            this.bra = this.cursor;
            lab5: {
              const v_6 = this.cursor;
              lab6: {
                if (!this.eq_s("i")) {
                  break lab6;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(g_v, 97, 232)) {
                  break lab6;
                }
                if (!this.slice_from("I")) {
                  return false;
                }
                break lab5;
              }
              this.cursor = v_6;
              if (!this.eq_s("y")) {
                break lab4;
              }
              this.ket = this.cursor;
              if (!this.slice_from("Y")) {
                return false;
              }
            }
            this.cursor = v_5;
            break golab3;
          }
          this.cursor = v_5;
          if (this.cursor >= this.limit) {
            break lab2;
          }
          this.cursor++;
        }
        continue;
      }
      this.cursor = v_4;
      break;
    }
    return true;
  }

  r_mark_regions() {
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    golab0:
    while (true) {
      lab1: {
        if (!this.in_grouping(g_v, 97, 232)) {
          break lab1;
        }
        break golab0;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    golab2:
    while (true) {
      lab3: {
        if (!this.out_grouping(g_v, 97, 232)) {
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
      if (!(this.I_p1 < 3)) {
        break lab4;
      }
      this.I_p1 = 3;
    }
    golab5:
    while (true) {
      lab6: {
        if (!this.in_grouping(g_v, 97, 232)) {
          break lab6;
        }
        break golab5;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    golab7:
    while (true) {
      lab8: {
        if (!this.out_grouping(g_v, 97, 232)) {
          break lab8;
        }
        break golab7;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    this.I_p2 = this.cursor;
    return true;
  }

  r_postlude() {
    while (true) {
      const v_1 = this.cursor;
      lab0: {
        this.bra = this.cursor;
        const among_var = this.find_among(a_1);
        if (among_var == 0) {
          break lab0;
        }
        this.ket = this.cursor;
        switch (among_var) {
          case 1:
            if (!this.slice_from("y")) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from("i")) {
              return false;
            }
            break;
          case 3:
            if (this.cursor >= this.limit) {
              break lab0;
            }
            this.cursor++;
            break;
        }
        continue;
      }
      this.cursor = v_1;
      break;
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

  r_undouble() {
    const v_1 = this.limit - this.cursor;
    if (this.find_among_b(a_2) == 0) {
      return false;
    }
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
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

  r_e_ending() {
    this.B_e_found = false;
    this.ket = this.cursor;
    if (!this.eq_s_b("e")) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    const v_1 = this.limit - this.cursor;
    if (!this.out_grouping_b(g_v, 97, 232)) {
      return false;
    }
    this.cursor = this.limit - v_1;
    if (!this.slice_del()) {
      return false;
    }
    this.B_e_found = true;
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_en_ending() {
    if (!this.r_R1()) {
      return false;
    }
    const v_1 = this.limit - this.cursor;
    if (!this.out_grouping_b(g_v, 97, 232)) {
      return false;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("gem")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    if (!this.slice_del()) {
      return false;
    }
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_standard_suffix() {
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      const among_var = this.find_among_b(a_3);
      if (among_var == 0) {
        break lab0;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 1:
          if (!this.r_R1()) {
            break lab0;
          }
          if (!this.slice_from("heid")) {
            return false;
          }
          break;
        case 2:
          if (!this.r_en_ending()) {
            break lab0;
          }
          break;
        case 3:
          if (!this.r_R1()) {
            break lab0;
          }
          if (!this.out_grouping_b(g_v_j, 97, 232)) {
            break lab0;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    this.cursor = this.limit - v_1;
    const v_2 = this.limit - this.cursor;
    this.r_e_ending();
    this.cursor = this.limit - v_2;
    const v_3 = this.limit - this.cursor;
    lab1: {
      this.ket = this.cursor;
      if (!this.eq_s_b("heid")) {
        break lab1;
      }
      this.bra = this.cursor;
      if (!this.r_R2()) {
        break lab1;
      }
      {
        const v_4 = this.limit - this.cursor;
        lab2: {
          if (!this.eq_s_b("c")) {
            break lab2;
          }
          break lab1;
        }
        this.cursor = this.limit - v_4;
      }
      if (!this.slice_del()) {
        return false;
      }
      this.ket = this.cursor;
      if (!this.eq_s_b("en")) {
        break lab1;
      }
      this.bra = this.cursor;
      if (!this.r_en_ending()) {
        break lab1;
      }
    }
    this.cursor = this.limit - v_3;
    const v_5 = this.limit - this.cursor;
    lab3: {
      this.ket = this.cursor;
      const among_var = this.find_among_b(a_4);
      if (among_var == 0) {
        break lab3;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 1:
          if (!this.r_R2()) {
            break lab3;
          }
          if (!this.slice_del()) {
            return false;
          }
          lab4: {
            const v_6 = this.limit - this.cursor;
            lab5: {
              this.ket = this.cursor;
              if (!this.eq_s_b("ig")) {
                break lab5;
              }
              this.bra = this.cursor;
              if (!this.r_R2()) {
                break lab5;
              }
              {
                const v_7 = this.limit - this.cursor;
                lab6: {
                  if (!this.eq_s_b("e")) {
                    break lab6;
                  }
                  break lab5;
                }
                this.cursor = this.limit - v_7;
              }
              if (!this.slice_del()) {
                return false;
              }
              break lab4;
            }
            this.cursor = this.limit - v_6;
            if (!this.r_undouble()) {
              break lab3;
            }
          }
          break;
        case 2:
          if (!this.r_R2()) {
            break lab3;
          }
          {
            const v_8 = this.limit - this.cursor;
            lab7: {
              if (!this.eq_s_b("e")) {
                break lab7;
              }
              break lab3;
            }
            this.cursor = this.limit - v_8;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 3:
          if (!this.r_R2()) {
            break lab3;
          }
          if (!this.slice_del()) {
            return false;
          }
          if (!this.r_e_ending()) {
            break lab3;
          }
          break;
        case 4:
          if (!this.r_R2()) {
            break lab3;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 5:
          if (!this.r_R2()) {
            break lab3;
          }
          if (!this.B_e_found) {
            break lab3;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    this.cursor = this.limit - v_5;
    const v_9 = this.limit - this.cursor;
    lab8: {
      if (!this.out_grouping_b(g_v_I, 73, 232)) {
        break lab8;
      }
      const v_10 = this.limit - this.cursor;
      if (this.find_among_b(a_5) == 0) {
        break lab8;
      }
      if (!this.out_grouping_b(g_v, 97, 232)) {
        break lab8;
      }
      this.cursor = this.limit - v_10;
      this.ket = this.cursor;
      if (this.cursor <= this.limit_backward) {
        break lab8;
      }
      this.cursor--;
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_9;
    return true;
  }

  stemHelper() {
    const v_1 = this.cursor;
    this.r_prelude();
    this.cursor = v_1;
    const v_2 = this.cursor;
    this.r_mark_regions();
    this.cursor = v_2;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.r_standard_suffix();
    this.cursor = this.limit_backward;
    const v_4 = this.cursor;
    this.r_postlude();
    this.cursor = v_4;
    return true;
  }
}
