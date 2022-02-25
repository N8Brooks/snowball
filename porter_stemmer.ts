import { ENGLISH_STOP_WORDS } from "./english_stop_words.ts";
import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["s", -1, 3],
  ["ies", 0, 2],
  ["sses", 0, 1],
  ["ss", 0, -1],
];

const a_1: Rule[] = [
  ["", -1, 3],
  ["bb", 0, 2],
  ["dd", 0, 2],
  ["ff", 0, 2],
  ["gg", 0, 2],
  ["bl", 0, 1],
  ["mm", 0, 2],
  ["nn", 0, 2],
  ["pp", 0, 2],
  ["rr", 0, 2],
  ["at", 0, 1],
  ["tt", 0, 2],
  ["iz", 0, 1],
];

const a_2: Rule[] = [
  ["ed", -1, 2],
  ["eed", 0, 1],
  ["ing", -1, 2],
];

const a_3: Rule[] = [
  ["anci", -1, 3],
  ["enci", -1, 2],
  ["abli", -1, 4],
  ["eli", -1, 6],
  ["alli", -1, 9],
  ["ousli", -1, 11],
  ["entli", -1, 5],
  ["aliti", -1, 9],
  ["biliti", -1, 13],
  ["iviti", -1, 12],
  ["tional", -1, 1],
  ["ational", 10, 8],
  ["alism", -1, 9],
  ["ation", -1, 8],
  ["ization", 13, 7],
  ["izer", -1, 7],
  ["ator", -1, 8],
  ["iveness", -1, 12],
  ["fulness", -1, 10],
  ["ousness", -1, 11],
];

const a_4: Rule[] = [
  ["icate", -1, 2],
  ["ative", -1, 3],
  ["alize", -1, 1],
  ["iciti", -1, 2],
  ["ical", -1, 2],
  ["ful", -1, 3],
  ["ness", -1, 3],
];

const a_5: Rule[] = [
  ["ic", -1, 1],
  ["ance", -1, 1],
  ["ence", -1, 1],
  ["able", -1, 1],
  ["ible", -1, 1],
  ["ate", -1, 1],
  ["ive", -1, 1],
  ["ize", -1, 1],
  ["iti", -1, 1],
  ["al", -1, 1],
  ["ism", -1, 1],
  ["ion", -1, 2],
  ["er", -1, 1],
  ["ous", -1, 1],
  ["ant", -1, 1],
  ["ent", -1, 1],
  ["ment", 15, 1],
  ["ement", 16, 1],
  ["ou", -1, 1],
];

const g_v = [17, 65, 16, 1];

const g_v_WXY = [1, 17, 65, 208, 1];

/** Stemmer for the Porter language */
export class PorterStemmer extends Stemmer {
  private B_Y_found = false;
  private I_p2 = 0;
  private I_p1 = 0;

  readonly stopWords = ENGLISH_STOP_WORDS;

  private r_shortv() {
    if (!this.out_grouping_b(g_v_WXY, 89, 121)) {
      return false;
    }
    if (!this.in_grouping_b(g_v, 97, 121)) {
      return false;
    }
    if (!this.out_grouping_b(g_v, 97, 121)) {
      return false;
    }
    return true;
  }

  private r_R1() {
    if (!(this.I_p1 <= this.cursor)) {
      return false;
    }
    return true;
  }

  private r_R2() {
    if (!(this.I_p2 <= this.cursor)) {
      return false;
    }
    return true;
  }

  private r_Step_1a() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_0);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_from("ss")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("i")) {
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

  private r_Step_1b() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_2);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from("ee")) {
          return false;
        }
        break;
      case 2: {
        const v_1 = this.limit - this.cursor;
        golab0:
        while (true) {
          lab1: {
            if (!this.in_grouping_b(g_v, 97, 121)) {
              break lab1;
            }
            break golab0;
          }
          if (this.cursor <= this.limit_backward) {
            return false;
          }
          this.cursor--;
        }
        this.cursor = this.limit - v_1;
        if (!this.slice_del()) {
          return false;
        }
        const v_3 = this.limit - this.cursor;
        const among_var = this.find_among_b(a_1);
        if (among_var == 0) {
          return false;
        }
        this.cursor = this.limit - v_3;
        switch (among_var) {
          case 1:
            {
              const c1 = this.cursor;
              this.insert(this.cursor, this.cursor, "e");
              this.cursor = c1;
            }
            break;
          case 2:
            this.ket = this.cursor;
            if (this.cursor <= this.limit_backward) {
              return false;
            }
            this.cursor--;
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            break;
          case 3: {
            if (this.cursor != this.I_p1) {
              return false;
            }
            const v_4 = this.limit - this.cursor;
            if (!this.r_shortv()) {
              return false;
            }
            this.cursor = this.limit - v_4;
            {
              const c2 = this.cursor;
              this.insert(this.cursor, this.cursor, "e");
              this.cursor = c2;
            }
            break;
          }
        }
        break;
      }
    }
    return true;
  }

  private r_Step_1c() {
    this.ket = this.cursor;
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("y")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      if (!this.eq_s_b("Y")) {
        return false;
      }
    }
    this.bra = this.cursor;
    golab2:
    while (true) {
      lab3: {
        if (!this.in_grouping_b(g_v, 97, 121)) {
          break lab3;
        }
        break golab2;
      }
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
    }
    if (!this.slice_from("i")) {
      return false;
    }
    return true;
  }

  private r_Step_2() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_3);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_from("tion")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("ence")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("ance")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("able")) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from("ent")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_from("ize")) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_from("ate")) {
          return false;
        }
        break;
      case 9:
        if (!this.slice_from("al")) {
          return false;
        }
        break;
      case 10:
        if (!this.slice_from("ful")) {
          return false;
        }
        break;
      case 11:
        if (!this.slice_from("ous")) {
          return false;
        }
        break;
      case 12:
        if (!this.slice_from("ive")) {
          return false;
        }
        break;
      case 13:
        if (!this.slice_from("ble")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_Step_3() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_4);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_from("al")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("ic")) {
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

  private r_Step_4() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_5);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R2()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b("s")) {
              break lab1;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          if (!this.eq_s_b("t")) {
            return false;
          }
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_Step_5a() {
    this.ket = this.cursor;
    if (!this.eq_s_b("e")) {
      return false;
    }
    this.bra = this.cursor;
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.r_R2()) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      if (!this.r_R1()) {
        return false;
      }
      {
        const v_2 = this.limit - this.cursor;
        lab2: {
          if (!this.r_shortv()) {
            break lab2;
          }
          return false;
        }
        this.cursor = this.limit - v_2;
      }
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  private r_Step_5b() {
    this.ket = this.cursor;
    if (!this.eq_s_b("l")) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R2()) {
      return false;
    }
    if (!this.eq_s_b("l")) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  _stemHelper() {
    this.B_Y_found = false;
    const v_1 = this.cursor;
    lab0: {
      this.bra = this.cursor;
      if (!this.eq_s("y")) {
        break lab0;
      }
      this.ket = this.cursor;
      if (!this.slice_from("Y")) {
        return false;
      }
      this.B_Y_found = true;
    }
    this.cursor = v_1;
    const v_2 = this.cursor;
    while (true) {
      const v_3 = this.cursor;
      lab2: {
        golab3:
        while (true) {
          const v_4 = this.cursor;
          lab4: {
            if (!this.in_grouping(g_v, 97, 121)) {
              break lab4;
            }
            this.bra = this.cursor;
            if (!this.eq_s("y")) {
              break lab4;
            }
            this.ket = this.cursor;
            this.cursor = v_4;
            break golab3;
          }
          this.cursor = v_4;
          if (this.cursor >= this.limit) {
            break lab2;
          }
          this.cursor++;
        }
        if (!this.slice_from("Y")) {
          return false;
        }
        this.B_Y_found = true;
        continue;
      }
      this.cursor = v_3;
      break;
    }
    this.cursor = v_2;
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    const v_5 = this.cursor;
    lab5: {
      golab6:
      while (true) {
        lab7: {
          if (!this.in_grouping(g_v, 97, 121)) {
            break lab7;
          }
          break golab6;
        }
        if (this.cursor >= this.limit) {
          break lab5;
        }
        this.cursor++;
      }
      golab8:
      while (true) {
        lab9: {
          if (!this.out_grouping(g_v, 97, 121)) {
            break lab9;
          }
          break golab8;
        }
        if (this.cursor >= this.limit) {
          break lab5;
        }
        this.cursor++;
      }
      this.I_p1 = this.cursor;
      golab10:
      while (true) {
        lab11: {
          if (!this.in_grouping(g_v, 97, 121)) {
            break lab11;
          }
          break golab10;
        }
        if (this.cursor >= this.limit) {
          break lab5;
        }
        this.cursor++;
      }
      golab12:
      while (true) {
        lab13: {
          if (!this.out_grouping(g_v, 97, 121)) {
            break lab13;
          }
          break golab12;
        }
        if (this.cursor >= this.limit) {
          break lab5;
        }
        this.cursor++;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_5;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_10 = this.limit - this.cursor;
    this.r_Step_1a();
    this.cursor = this.limit - v_10;
    const v_11 = this.limit - this.cursor;
    this.r_Step_1b();
    this.cursor = this.limit - v_11;
    const v_12 = this.limit - this.cursor;
    this.r_Step_1c();
    this.cursor = this.limit - v_12;
    const v_13 = this.limit - this.cursor;
    this.r_Step_2();
    this.cursor = this.limit - v_13;
    const v_14 = this.limit - this.cursor;
    this.r_Step_3();
    this.cursor = this.limit - v_14;
    const v_15 = this.limit - this.cursor;
    this.r_Step_4();
    this.cursor = this.limit - v_15;
    const v_16 = this.limit - this.cursor;
    this.r_Step_5a();
    this.cursor = this.limit - v_16;
    const v_17 = this.limit - this.cursor;
    this.r_Step_5b();
    this.cursor = this.limit - v_17;
    this.cursor = this.limit_backward;
    const v_18 = this.cursor;
    lab14: {
      if (!this.B_Y_found) {
        break lab14;
      }
      while (true) {
        const v_19 = this.cursor;
        lab15: {
          golab16:
          while (true) {
            const v_20 = this.cursor;
            lab17: {
              this.bra = this.cursor;
              if (!this.eq_s("Y")) {
                break lab17;
              }
              this.ket = this.cursor;
              this.cursor = v_20;
              break golab16;
            }
            this.cursor = v_20;
            if (this.cursor >= this.limit) {
              break lab15;
            }
            this.cursor++;
          }
          if (!this.slice_from("y")) {
            return false;
          }
          continue;
        }
        this.cursor = v_19;
        break;
      }
    }
    this.cursor = v_18;
    return true;
  }
}
