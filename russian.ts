import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["\u0432", -1, 1],
  ["\u0438\u0432", 0, 2],
  ["\u044B\u0432", 0, 2],
  ["\u0432\u0448\u0438", -1, 1],
  ["\u0438\u0432\u0448\u0438", 3, 2],
  ["\u044B\u0432\u0448\u0438", 3, 2],
  ["\u0432\u0448\u0438\u0441\u044C", -1, 1],
  ["\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2],
  ["\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2],
];

const a_1: Rule[] = [
  ["\u0435\u0435", -1, 1],
  ["\u0438\u0435", -1, 1],
  ["\u043E\u0435", -1, 1],
  ["\u044B\u0435", -1, 1],
  ["\u0438\u043C\u0438", -1, 1],
  ["\u044B\u043C\u0438", -1, 1],
  ["\u0435\u0439", -1, 1],
  ["\u0438\u0439", -1, 1],
  ["\u043E\u0439", -1, 1],
  ["\u044B\u0439", -1, 1],
  ["\u0435\u043C", -1, 1],
  ["\u0438\u043C", -1, 1],
  ["\u043E\u043C", -1, 1],
  ["\u044B\u043C", -1, 1],
  ["\u0435\u0433\u043E", -1, 1],
  ["\u043E\u0433\u043E", -1, 1],
  ["\u0435\u043C\u0443", -1, 1],
  ["\u043E\u043C\u0443", -1, 1],
  ["\u0438\u0445", -1, 1],
  ["\u044B\u0445", -1, 1],
  ["\u0435\u044E", -1, 1],
  ["\u043E\u044E", -1, 1],
  ["\u0443\u044E", -1, 1],
  ["\u044E\u044E", -1, 1],
  ["\u0430\u044F", -1, 1],
  ["\u044F\u044F", -1, 1],
];

const a_2: Rule[] = [
  ["\u0435\u043C", -1, 1],
  ["\u043D\u043D", -1, 1],
  ["\u0432\u0448", -1, 1],
  ["\u0438\u0432\u0448", 2, 2],
  ["\u044B\u0432\u0448", 2, 2],
  ["\u0449", -1, 1],
  ["\u044E\u0449", 5, 1],
  ["\u0443\u044E\u0449", 6, 2],
];

const a_3: Rule[] = [
  ["\u0441\u044C", -1, 1],
  ["\u0441\u044F", -1, 1],
];

const a_4: Rule[] = [
  ["\u043B\u0430", -1, 1],
  ["\u0438\u043B\u0430", 0, 2],
  ["\u044B\u043B\u0430", 0, 2],
  ["\u043D\u0430", -1, 1],
  ["\u0435\u043D\u0430", 3, 2],
  ["\u0435\u0442\u0435", -1, 1],
  ["\u0438\u0442\u0435", -1, 2],
  ["\u0439\u0442\u0435", -1, 1],
  ["\u0435\u0439\u0442\u0435", 7, 2],
  ["\u0443\u0439\u0442\u0435", 7, 2],
  ["\u043B\u0438", -1, 1],
  ["\u0438\u043B\u0438", 10, 2],
  ["\u044B\u043B\u0438", 10, 2],
  ["\u0439", -1, 1],
  ["\u0435\u0439", 13, 2],
  ["\u0443\u0439", 13, 2],
  ["\u043B", -1, 1],
  ["\u0438\u043B", 16, 2],
  ["\u044B\u043B", 16, 2],
  ["\u0435\u043C", -1, 1],
  ["\u0438\u043C", -1, 2],
  ["\u044B\u043C", -1, 2],
  ["\u043D", -1, 1],
  ["\u0435\u043D", 22, 2],
  ["\u043B\u043E", -1, 1],
  ["\u0438\u043B\u043E", 24, 2],
  ["\u044B\u043B\u043E", 24, 2],
  ["\u043D\u043E", -1, 1],
  ["\u0435\u043D\u043E", 27, 2],
  ["\u043D\u043D\u043E", 27, 1],
  ["\u0435\u0442", -1, 1],
  ["\u0443\u0435\u0442", 30, 2],
  ["\u0438\u0442", -1, 2],
  ["\u044B\u0442", -1, 2],
  ["\u044E\u0442", -1, 1],
  ["\u0443\u044E\u0442", 34, 2],
  ["\u044F\u0442", -1, 2],
  ["\u043D\u044B", -1, 1],
  ["\u0435\u043D\u044B", 37, 2],
  ["\u0442\u044C", -1, 1],
  ["\u0438\u0442\u044C", 39, 2],
  ["\u044B\u0442\u044C", 39, 2],
  ["\u0435\u0448\u044C", -1, 1],
  ["\u0438\u0448\u044C", -1, 2],
  ["\u044E", -1, 2],
  ["\u0443\u044E", 44, 2],
];

const a_5: Rule[] = [
  ["\u0430", -1, 1],
  ["\u0435\u0432", -1, 1],
  ["\u043E\u0432", -1, 1],
  ["\u0435", -1, 1],
  ["\u0438\u0435", 3, 1],
  ["\u044C\u0435", 3, 1],
  ["\u0438", -1, 1],
  ["\u0435\u0438", 6, 1],
  ["\u0438\u0438", 6, 1],
  ["\u0430\u043C\u0438", 6, 1],
  ["\u044F\u043C\u0438", 6, 1],
  ["\u0438\u044F\u043C\u0438", 10, 1],
  ["\u0439", -1, 1],
  ["\u0435\u0439", 12, 1],
  ["\u0438\u0435\u0439", 13, 1],
  ["\u0438\u0439", 12, 1],
  ["\u043E\u0439", 12, 1],
  ["\u0430\u043C", -1, 1],
  ["\u0435\u043C", -1, 1],
  ["\u0438\u0435\u043C", 18, 1],
  ["\u043E\u043C", -1, 1],
  ["\u044F\u043C", -1, 1],
  ["\u0438\u044F\u043C", 21, 1],
  ["\u043E", -1, 1],
  ["\u0443", -1, 1],
  ["\u0430\u0445", -1, 1],
  ["\u044F\u0445", -1, 1],
  ["\u0438\u044F\u0445", 26, 1],
  ["\u044B", -1, 1],
  ["\u044C", -1, 1],
  ["\u044E", -1, 1],
  ["\u0438\u044E", 30, 1],
  ["\u044C\u044E", 30, 1],
  ["\u044F", -1, 1],
  ["\u0438\u044F", 33, 1],
  ["\u044C\u044F", 33, 1],
];

const a_6: Rule[] = [
  ["\u043E\u0441\u0442", -1, 1],
  ["\u043E\u0441\u0442\u044C", -1, 1],
];

const a_7: Rule[] = [
  ["\u0435\u0439\u0448\u0435", -1, 1],
  ["\u043D", -1, 2],
  ["\u0435\u0439\u0448", -1, 1],
  ["\u044C", -1, 3],
];

const g_v = [33, 65, 8, 232];

export class RussianStemmer extends Stemmer {
  private I_p2 = 0;
  private I_pV = 0;

  stopWords = undefined;

  r_mark_regions() {
    this.I_pV = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      golab1:
      while (true) {
        lab2: {
          if (!this.in_grouping(g_v, 1072, 1103)) {
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
          if (!this.out_grouping(g_v, 1072, 1103)) {
            break lab4;
          }
          break golab3;
        }
        if (this.cursor >= this.limit) {
          break lab0;
        }
        this.cursor++;
      }
      golab5:
      while (true) {
        lab6: {
          if (!this.in_grouping(g_v, 1072, 1103)) {
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
          if (!this.out_grouping(g_v, 1072, 1103)) {
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

  r_R2() {
    if (!(this.I_p2 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_perfective_gerund() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_0);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b("\u0430")) {
              break lab1;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          if (!this.eq_s_b("\u044F")) {
            return false;
          }
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_adjective() {
    this.ket = this.cursor;
    if (this.find_among_b(a_1) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_adjectival() {
    if (!this.r_adjective()) {
      return false;
    }
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      const among_var = this.find_among_b(a_2);
      if (among_var == 0) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 1:
          lab1: {
            const v_2 = this.limit - this.cursor;
            lab2: {
              if (!this.eq_s_b("\u0430")) {
                break lab2;
              }
              break lab1;
            }
            this.cursor = this.limit - v_2;
            if (!this.eq_s_b("\u044F")) {
              this.cursor = this.limit - v_1;
              break lab0;
            }
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 2:
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    return true;
  }

  r_reflexive() {
    this.ket = this.cursor;
    if (this.find_among_b(a_3) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_verb() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_4);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b("\u0430")) {
              break lab1;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          if (!this.eq_s_b("\u044F")) {
            return false;
          }
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_noun() {
    this.ket = this.cursor;
    if (this.find_among_b(a_5) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_derivational() {
    this.ket = this.cursor;
    if (this.find_among_b(a_6) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R2()) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_tidy_up() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_7);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        this.ket = this.cursor;
        if (!this.eq_s_b("\u043D")) {
          return false;
        }
        this.bra = this.cursor;
        if (!this.eq_s_b("\u043D")) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.eq_s_b("\u043D")) {
          return false;
        }
        if (!this.slice_del()) {
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

  stemHelper() {
    const v_1 = this.cursor;
    while (true) {
      const v_2 = this.cursor;
      lab1: {
        golab2:
        while (true) {
          const v_3 = this.cursor;
          lab3: {
            this.bra = this.cursor;
            if (!this.eq_s("\u0451")) {
              break lab3;
            }
            this.ket = this.cursor;
            this.cursor = v_3;
            break golab2;
          }
          this.cursor = v_3;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        if (!this.slice_from("\u0435")) {
          return false;
        }
        continue;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_6 = this.limit_backward;
    this.limit_backward = this.I_pV;
    const v_7 = this.limit - this.cursor;
    lab4: {
      lab5: {
        const v_8 = this.limit - this.cursor;
        lab6: {
          if (!this.r_perfective_gerund()) {
            break lab6;
          }
          break lab5;
        }
        this.cursor = this.limit - v_8;
        const v_9 = this.limit - this.cursor;
        lab7: {
          if (!this.r_reflexive()) {
            this.cursor = this.limit - v_9;
            break lab7;
          }
        }
        lab8: {
          const v_10 = this.limit - this.cursor;
          lab9: {
            if (!this.r_adjectival()) {
              break lab9;
            }
            break lab8;
          }
          this.cursor = this.limit - v_10;
          lab10: {
            if (!this.r_verb()) {
              break lab10;
            }
            break lab8;
          }
          this.cursor = this.limit - v_10;
          if (!this.r_noun()) {
            break lab4;
          }
        }
      }
    }
    this.cursor = this.limit - v_7;
    const v_11 = this.limit - this.cursor;
    lab11: {
      this.ket = this.cursor;
      if (!this.eq_s_b("\u0438")) {
        this.cursor = this.limit - v_11;
        break lab11;
      }
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
    }
    const v_12 = this.limit - this.cursor;
    this.r_derivational();
    this.cursor = this.limit - v_12;
    const v_13 = this.limit - this.cursor;
    this.r_tidy_up();
    this.cursor = this.limit - v_13;
    this.limit_backward = v_6;
    this.cursor = this.limit_backward;
    return true;
  }
}
