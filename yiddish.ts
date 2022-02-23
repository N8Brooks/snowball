import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["\u05D5\u05D5", -1, 1],
  ["\u05D5\u05D9", -1, 2],
  ["\u05D9\u05D9", -1, 3],
  ["\u05DA", -1, 4],
  ["\u05DD", -1, 5],
  ["\u05DF", -1, 6],
  ["\u05E3", -1, 7],
  ["\u05E5", -1, 8],
];

const a_1: Rule[] = [
  ["\u05D0\u05D3\u05D5\u05E8\u05DB", -1, 1],
  ["\u05D0\u05D4\u05D9\u05E0", -1, 1],
  ["\u05D0\u05D4\u05E2\u05E8", -1, 1],
  ["\u05D0\u05D4\u05F2\u05DE", -1, 1],
  ["\u05D0\u05D5\u05DE", -1, 1],
  ["\u05D0\u05D5\u05E0\u05D8\u05E2\u05E8", -1, 1],
  ["\u05D0\u05D9\u05D1\u05E2\u05E8", -1, 1],
  ["\u05D0\u05E0", -1, 1],
  ["\u05D0\u05E0\u05D8", 7, 1],
  ["\u05D0\u05E0\u05D8\u05E7\u05E2\u05D2\u05E0", 8, 1],
  ["\u05D0\u05E0\u05D9\u05D3\u05E2\u05E8", 7, 1],
  ["\u05D0\u05E4", -1, 1],
  ["\u05D0\u05E4\u05D9\u05E8", 11, 1],
  ["\u05D0\u05E7\u05E2\u05D2\u05E0", -1, 1],
  ["\u05D0\u05E8\u05D0\u05E4", -1, 1],
  ["\u05D0\u05E8\u05D5\u05DE", -1, 1],
  ["\u05D0\u05E8\u05D5\u05E0\u05D8\u05E2\u05E8", -1, 1],
  ["\u05D0\u05E8\u05D9\u05D1\u05E2\u05E8", -1, 1],
  ["\u05D0\u05E8\u05F1\u05E1", -1, 1],
  ["\u05D0\u05E8\u05F1\u05E4", -1, 1],
  ["\u05D0\u05E8\u05F2\u05E0", -1, 1],
  ["\u05D0\u05F0\u05E2\u05E7", -1, 1],
  ["\u05D0\u05F1\u05E1", -1, 1],
  ["\u05D0\u05F1\u05E4", -1, 1],
  ["\u05D0\u05F2\u05E0", -1, 1],
  ["\u05D1\u05D0", -1, 1],
  ["\u05D1\u05F2", -1, 1],
  ["\u05D3\u05D5\u05E8\u05DB", -1, 1],
  ["\u05D3\u05E2\u05E8", -1, 1],
  ["\u05DE\u05D9\u05D8", -1, 1],
  ["\u05E0\u05D0\u05DB", -1, 1],
  ["\u05E4\u05D0\u05E8", -1, 1],
  ["\u05E4\u05D0\u05E8\u05D1\u05F2", 31, 1],
  ["\u05E4\u05D0\u05E8\u05F1\u05E1", 31, 1],
  ["\u05E4\u05D5\u05E0\u05D0\u05E0\u05D3\u05E2\u05E8", -1, 1],
  ["\u05E6\u05D5", -1, 1],
  ["\u05E6\u05D5\u05D6\u05D0\u05DE\u05E2\u05E0", 35, 1],
  ["\u05E6\u05D5\u05E0\u05F1\u05E4", 35, 1],
  ["\u05E6\u05D5\u05E8\u05D9\u05E7", 35, 1],
  ["\u05E6\u05E2", -1, 1],
];

const a_2: Rule[] = [
  ["\u05D3\u05D6\u05E9", -1, -1],
  ["\u05E9\u05D8\u05E8", -1, -1],
  ["\u05E9\u05D8\u05E9", -1, -1],
  ["\u05E9\u05E4\u05E8", -1, -1],
];

const a_3: Rule[] = [
  ["\u05E7\u05DC\u05D9\u05D1", -1, 9],
  ["\u05E8\u05D9\u05D1", -1, 10],
  ["\u05D8\u05E8\u05D9\u05D1", 1, 7],
  ["\u05E9\u05E8\u05D9\u05D1", 1, 15],
  ["\u05D4\u05F1\u05D1", -1, 23],
  ["\u05E9\u05F0\u05D9\u05D2", -1, 12],
  ["\u05D2\u05D0\u05E0\u05D2", -1, 1],
  ["\u05D6\u05D5\u05E0\u05D2", -1, 18],
  ["\u05E9\u05DC\u05D5\u05E0\u05D2", -1, 21],
  ["\u05E6\u05F0\u05D5\u05E0\u05D2", -1, 20],
  ["\u05D1\u05F1\u05D2", -1, 22],
  ["\u05D1\u05D5\u05E0\u05D3", -1, 16],
  ["\u05F0\u05D9\u05D6", -1, 6],
  ["\u05D1\u05D9\u05D8", -1, 4],
  ["\u05DC\u05D9\u05D8", -1, 8],
  ["\u05DE\u05D9\u05D8", -1, 3],
  ["\u05E9\u05E0\u05D9\u05D8", -1, 14],
  ["\u05E0\u05D5\u05DE", -1, 2],
  ["\u05E9\u05D8\u05D0\u05E0", -1, 25],
  ["\u05D1\u05D9\u05E1", -1, 5],
  ["\u05E9\u05DE\u05D9\u05E1", -1, 13],
  ["\u05E8\u05D9\u05E1", -1, 11],
  ["\u05D8\u05E8\u05D5\u05E0\u05E7", -1, 19],
  ["\u05E4\u05D0\u05E8\u05DC\u05F1\u05E8", -1, 24],
  ["\u05E9\u05F0\u05F1\u05E8", -1, 26],
  ["\u05F0\u05D5\u05D8\u05E9", -1, 17],
];

const a_4: Rule[] = [
  ["\u05D5\u05E0\u05D2", -1, 1],
  ["\u05E1\u05D8\u05D5", -1, 1],
  ["\u05D8", -1, 1],
  ["\u05D1\u05E8\u05D0\u05DB\u05D8", 2, 31],
  ["\u05E1\u05D8", 2, 1],
  ["\u05D9\u05E1\u05D8", 4, 33],
  ["\u05E2\u05D8", 2, 1],
  ["\u05E9\u05D0\u05E4\u05D8", 2, 1],
  ["\u05D4\u05F2\u05D8", 2, 1],
  ["\u05E7\u05F2\u05D8", 2, 1],
  ["\u05D9\u05E7\u05F2\u05D8", 9, 1],
  ["\u05DC\u05E2\u05DB", -1, 1],
  ["\u05E2\u05DC\u05E2\u05DB", 11, 1],
  ["\u05D9\u05D6\u05DE", -1, 1],
  ["\u05D9\u05DE", -1, 1],
  ["\u05E2\u05DE", -1, 1],
  ["\u05E2\u05E0\u05E2\u05DE", 15, 3],
  ["\u05D8\u05E2\u05E0\u05E2\u05DE", 16, 4],
  ["\u05E0", -1, 1],
  ["\u05E7\u05DC\u05D9\u05D1\u05E0", 18, 14],
  ["\u05E8\u05D9\u05D1\u05E0", 18, 15],
  ["\u05D8\u05E8\u05D9\u05D1\u05E0", 20, 12],
  ["\u05E9\u05E8\u05D9\u05D1\u05E0", 20, 7],
  ["\u05D4\u05F1\u05D1\u05E0", 18, 27],
  ["\u05E9\u05F0\u05D9\u05D2\u05E0", 18, 17],
  ["\u05D6\u05D5\u05E0\u05D2\u05E0", 18, 22],
  ["\u05E9\u05DC\u05D5\u05E0\u05D2\u05E0", 18, 25],
  ["\u05E6\u05F0\u05D5\u05E0\u05D2\u05E0", 18, 24],
  ["\u05D1\u05F1\u05D2\u05E0", 18, 26],
  ["\u05D1\u05D5\u05E0\u05D3\u05E0", 18, 20],
  ["\u05F0\u05D9\u05D6\u05E0", 18, 11],
  ["\u05D8\u05E0", 18, 4],
  ["GE\u05D1\u05D9\u05D8\u05E0", 31, 9],
  ["GE\u05DC\u05D9\u05D8\u05E0", 31, 13],
  ["GE\u05DE\u05D9\u05D8\u05E0", 31, 8],
  ["\u05E9\u05E0\u05D9\u05D8\u05E0", 31, 19],
  ["\u05E1\u05D8\u05E0", 31, 1],
  ["\u05D9\u05E1\u05D8\u05E0", 36, 1],
  ["\u05E2\u05D8\u05E0", 31, 1],
  ["GE\u05D1\u05D9\u05E1\u05E0", 18, 10],
  ["\u05E9\u05DE\u05D9\u05E1\u05E0", 18, 18],
  ["GE\u05E8\u05D9\u05E1\u05E0", 18, 16],
  ["\u05E2\u05E0", 18, 1],
  ["\u05D2\u05D0\u05E0\u05D2\u05E2\u05E0", 42, 5],
  ["\u05E2\u05DC\u05E2\u05E0", 42, 1],
  ["\u05E0\u05D5\u05DE\u05E2\u05E0", 42, 6],
  ["\u05D9\u05D6\u05DE\u05E2\u05E0", 42, 1],
  ["\u05E9\u05D8\u05D0\u05E0\u05E2\u05E0", 42, 29],
  ["\u05D8\u05E8\u05D5\u05E0\u05E7\u05E0", 18, 23],
  ["\u05E4\u05D0\u05E8\u05DC\u05F1\u05E8\u05E0", 18, 28],
  ["\u05E9\u05F0\u05F1\u05E8\u05E0", 18, 30],
  ["\u05F0\u05D5\u05D8\u05E9\u05E0", 18, 21],
  ["\u05D2\u05F2\u05E0", 18, 5],
  ["\u05E1", -1, 1],
  ["\u05D8\u05E1", 53, 4],
  ["\u05E2\u05D8\u05E1", 54, 1],
  ["\u05E0\u05E1", 53, 1],
  ["\u05D8\u05E0\u05E1", 56, 4],
  ["\u05E2\u05E0\u05E1", 56, 3],
  ["\u05E2\u05E1", 53, 1],
  ["\u05D9\u05E2\u05E1", 59, 2],
  ["\u05E2\u05DC\u05E2\u05E1", 59, 1],
  ["\u05E2\u05E8\u05E1", 53, 1],
  ["\u05E2\u05E0\u05E2\u05E8\u05E1", 62, 1],
  ["\u05E2", -1, 1],
  ["\u05D8\u05E2", 64, 4],
  ["\u05E1\u05D8\u05E2", 65, 1],
  ["\u05E2\u05D8\u05E2", 65, 1],
  ["\u05D9\u05E2", 64, -1],
  ["\u05E2\u05DC\u05E2", 64, 1],
  ["\u05E2\u05E0\u05E2", 64, 3],
  ["\u05D8\u05E2\u05E0\u05E2", 70, 4],
  ["\u05E2\u05E8", -1, 1],
  ["\u05D8\u05E2\u05E8", 72, 4],
  ["\u05E1\u05D8\u05E2\u05E8", 73, 1],
  ["\u05E2\u05D8\u05E2\u05E8", 73, 1],
  ["\u05E2\u05E0\u05E2\u05E8", 72, 3],
  ["\u05D8\u05E2\u05E0\u05E2\u05E8", 76, 4],
  ["\u05D5\u05EA", -1, 32],
];

const a_5: Rule[] = [
  ["\u05D5\u05E0\u05D2", -1, 1],
  ["\u05E9\u05D0\u05E4\u05D8", -1, 1],
  ["\u05D4\u05F2\u05D8", -1, 1],
  ["\u05E7\u05F2\u05D8", -1, 1],
  ["\u05D9\u05E7\u05F2\u05D8", 3, 1],
  ["\u05DC", -1, 2],
];

const a_6: Rule[] = [
  ["\u05D9\u05D2", -1, 1],
  ["\u05D9\u05E7", -1, 1],
  ["\u05D3\u05D9\u05E7", 1, 1],
  ["\u05E0\u05D3\u05D9\u05E7", 2, 1],
  ["\u05E2\u05E0\u05D3\u05D9\u05E7", 3, 1],
  ["\u05D1\u05DC\u05D9\u05E7", 1, -1],
  ["\u05D2\u05DC\u05D9\u05E7", 1, -1],
  ["\u05E0\u05D9\u05E7", 1, 1],
  ["\u05D9\u05E9", -1, 1],
];

const g_niked = [255, 155, 6];

const g_vowel = [33, 2, 4, 0, 6];

const g_consonant = [239, 254, 253, 131];

export class YiddishStemmer extends Stemmer {
  private I_x = 0;
  private I_p1 = 0;

  stopWords = undefined;

  r_prelude() {
    const v_1 = this.cursor;
    while (true) {
      const v_2 = this.cursor;
      lab1: {
        golab2:
        while (true) {
          const v_3 = this.cursor;
          lab3: {
            this.bra = this.cursor;
            const among_var = this.find_among(a_0);
            if (among_var == 0) {
              break lab3;
            }
            this.ket = this.cursor;
            switch (among_var) {
              case 1:
                {
                  const v_4 = this.cursor;
                  lab4: {
                    if (!this.eq_s("\u05BC")) {
                      break lab4;
                    }
                    break lab3;
                  }
                  this.cursor = v_4;
                }
                if (!this.slice_from("\u05F0")) {
                  return false;
                }
                break;
              case 2:
                {
                  const v_5 = this.cursor;
                  lab5: {
                    if (!this.eq_s("\u05B4")) {
                      break lab5;
                    }
                    break lab3;
                  }
                  this.cursor = v_5;
                }
                if (!this.slice_from("\u05F1")) {
                  return false;
                }
                break;
              case 3:
                {
                  const v_6 = this.cursor;
                  lab6: {
                    if (!this.eq_s("\u05B4")) {
                      break lab6;
                    }
                    break lab3;
                  }
                  this.cursor = v_6;
                }
                if (!this.slice_from("\u05F2")) {
                  return false;
                }
                break;
              case 4:
                if (!this.slice_from("\u05DB")) {
                  return false;
                }
                break;
              case 5:
                if (!this.slice_from("\u05DE")) {
                  return false;
                }
                break;
              case 6:
                if (!this.slice_from("\u05E0")) {
                  return false;
                }
                break;
              case 7:
                if (!this.slice_from("\u05E4")) {
                  return false;
                }
                break;
              case 8:
                if (!this.slice_from("\u05E6")) {
                  return false;
                }
                break;
            }
            this.cursor = v_3;
            break golab2;
          }
          this.cursor = v_3;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        continue;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    const v_7 = this.cursor;
    while (true) {
      const v_8 = this.cursor;
      lab8: {
        golab9:
        while (true) {
          const v_9 = this.cursor;
          lab10: {
            this.bra = this.cursor;
            if (!this.in_grouping(g_niked, 1456, 1474)) {
              break lab10;
            }
            this.ket = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            this.cursor = v_9;
            break golab9;
          }
          this.cursor = v_9;
          if (this.cursor >= this.limit) {
            break lab8;
          }
          this.cursor++;
        }
        continue;
      }
      this.cursor = v_8;
      break;
    }
    this.cursor = v_7;
    return true;
  }

  r_mark_regions() {
    this.I_p1 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      this.bra = this.cursor;
      if (!this.eq_s("\u05D2\u05E2")) {
        this.cursor = v_1;
        break lab0;
      }
      this.ket = this.cursor;
      {
        const v_2 = this.cursor;
        lab1: {
          lab2: {
            const v_3 = this.cursor;
            lab3: {
              if (!this.eq_s("\u05DC\u05D8")) {
                break lab3;
              }
              break lab2;
            }
            this.cursor = v_3;
            if (!this.eq_s("\u05D1\u05E0")) {
              break lab1;
            }
          }
          this.cursor = v_1;
          break lab0;
        }
        this.cursor = v_2;
      }
      if (!this.slice_from("GE")) {
        return false;
      }
    }
    const v_4 = this.cursor;
    lab4: {
      if (this.find_among(a_1) == 0) {
        this.cursor = v_4;
        break lab4;
      }
      lab5: {
        const v_5 = this.cursor;
        lab6: {
          const v_6 = this.cursor;
          lab7: {
            const v_7 = this.cursor;
            lab8: {
              if (!this.eq_s("\u05E6\u05D5\u05D2\u05E0")) {
                break lab8;
              }
              break lab7;
            }
            this.cursor = v_7;
            lab9: {
              if (!this.eq_s("\u05E6\u05D5\u05E7\u05D8")) {
                break lab9;
              }
              break lab7;
            }
            this.cursor = v_7;
            if (!this.eq_s("\u05E6\u05D5\u05E7\u05E0")) {
              break lab6;
            }
          }
          if (this.cursor < this.limit) {
            break lab6;
          }
          this.cursor = v_6;
          break lab5;
        }
        this.cursor = v_5;
        lab10: {
          const v_8 = this.cursor;
          if (!this.eq_s("\u05D2\u05E2\u05D1\u05E0")) {
            break lab10;
          }
          this.cursor = v_8;
          break lab5;
        }
        this.cursor = v_5;
        lab11: {
          this.bra = this.cursor;
          if (!this.eq_s("\u05D2\u05E2")) {
            break lab11;
          }
          this.ket = this.cursor;
          if (!this.slice_from("GE")) {
            return false;
          }
          break lab5;
        }
        this.cursor = v_5;
        this.bra = this.cursor;
        if (!this.eq_s("\u05E6\u05D5")) {
          this.cursor = v_4;
          break lab4;
        }
        this.ket = this.cursor;
        if (!this.slice_from("TSU")) {
          return false;
        }
      }
    }
    const v_9 = this.cursor;
    {
      const c1 = this.cursor + 3;
      if (c1 > this.limit) {
        return false;
      }
      this.cursor = c1;
    }
    this.I_x = this.cursor;
    this.cursor = v_9;
    const v_10 = this.cursor;
    lab12: {
      if (this.find_among(a_2) == 0) {
        this.cursor = v_10;
        break lab12;
      }
    }
    {
      const v_11 = this.cursor;
      lab13: {
        if (!this.in_grouping(g_consonant, 1489, 1520)) {
          break lab13;
        }
        if (!this.in_grouping(g_consonant, 1489, 1520)) {
          break lab13;
        }
        if (!this.in_grouping(g_consonant, 1489, 1520)) {
          break lab13;
        }
        this.I_p1 = this.cursor;
        return false;
      }
      this.cursor = v_11;
    }
    golab14:
    while (true) {
      const v_12 = this.cursor;
      lab15: {
        if (!this.in_grouping(g_vowel, 1488, 1522)) {
          break lab15;
        }
        this.cursor = v_12;
        break golab14;
      }
      this.cursor = v_12;
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    while (true) {
      lab16: {
        if (!this.in_grouping(g_vowel, 1488, 1522)) {
          break lab16;
        }
        continue;
      }
      break;
    }
    this.I_p1 = this.cursor;
    lab17: {
      if (!(this.I_p1 < this.I_x)) {
        break lab17;
      }
      this.I_p1 = this.I_x;
    }
    return true;
  }

  r_R1() {
    if (!(this.I_p1 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_R1plus3() {
    if (!(this.I_p1 <= this.cursor + 3)) {
      return false;
    }
    return true;
  }

  r_standard_suffix() {
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      const among_var = this.find_among_b(a_4);
      if (among_var == 0) {
        break lab0;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 1:
          if (!this.r_R1()) {
            break lab0;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 2:
          if (!this.r_R1()) {
            break lab0;
          }
          if (!this.slice_from("\u05D9\u05E2")) {
            return false;
          }
          break;
        case 3: {
          if (!this.r_R1()) {
            break lab0;
          }
          if (!this.slice_del()) {
            return false;
          }
          this.ket = this.cursor;
          const among_var = this.find_among_b(a_3);
          if (among_var == 0) {
            break lab0;
          }
          this.bra = this.cursor;
          switch (among_var) {
            case 1:
              if (!this.slice_from("\u05D2\u05F2")) {
                return false;
              }
              break;
            case 2:
              if (!this.slice_from("\u05E0\u05E2\u05DE")) {
                return false;
              }
              break;
            case 3:
              if (!this.slice_from("\u05DE\u05F2\u05D3")) {
                return false;
              }
              break;
            case 4:
              if (!this.slice_from("\u05D1\u05F2\u05D8")) {
                return false;
              }
              break;
            case 5:
              if (!this.slice_from("\u05D1\u05F2\u05E1")) {
                return false;
              }
              break;
            case 6:
              if (!this.slice_from("\u05F0\u05F2\u05D6")) {
                return false;
              }
              break;
            case 7:
              if (!this.slice_from("\u05D8\u05E8\u05F2\u05D1")) {
                return false;
              }
              break;
            case 8:
              if (!this.slice_from("\u05DC\u05F2\u05D8")) {
                return false;
              }
              break;
            case 9:
              if (!this.slice_from("\u05E7\u05DC\u05F2\u05D1")) {
                return false;
              }
              break;
            case 10:
              if (!this.slice_from("\u05E8\u05F2\u05D1")) {
                return false;
              }
              break;
            case 11:
              if (!this.slice_from("\u05E8\u05F2\u05E1")) {
                return false;
              }
              break;
            case 12:
              if (!this.slice_from("\u05E9\u05F0\u05F2\u05D2")) {
                return false;
              }
              break;
            case 13:
              if (!this.slice_from("\u05E9\u05DE\u05F2\u05E1")) {
                return false;
              }
              break;
            case 14:
              if (!this.slice_from("\u05E9\u05E0\u05F2\u05D3")) {
                return false;
              }
              break;
            case 15:
              if (!this.slice_from("\u05E9\u05E8\u05F2\u05D1")) {
                return false;
              }
              break;
            case 16:
              if (!this.slice_from("\u05D1\u05D9\u05E0\u05D3")) {
                return false;
              }
              break;
            case 17:
              if (!this.slice_from("\u05F0\u05D9\u05D8\u05E9")) {
                return false;
              }
              break;
            case 18:
              if (!this.slice_from("\u05D6\u05D9\u05E0\u05D2")) {
                return false;
              }
              break;
            case 19:
              if (!this.slice_from("\u05D8\u05E8\u05D9\u05E0\u05E7")) {
                return false;
              }
              break;
            case 20:
              if (!this.slice_from("\u05E6\u05F0\u05D9\u05E0\u05D2")) {
                return false;
              }
              break;
            case 21:
              if (!this.slice_from("\u05E9\u05DC\u05D9\u05E0\u05D2")) {
                return false;
              }
              break;
            case 22:
              if (!this.slice_from("\u05D1\u05F2\u05D2")) {
                return false;
              }
              break;
            case 23:
              if (!this.slice_from("\u05D4\u05F2\u05D1")) {
                return false;
              }
              break;
            case 24:
              if (!this.slice_from("\u05E4\u05D0\u05E8\u05DC\u05D9\u05E8")) {
                return false;
              }
              break;
            case 25:
              if (!this.slice_from("\u05E9\u05D8\u05F2")) {
                return false;
              }
              break;
            case 26:
              if (!this.slice_from("\u05E9\u05F0\u05E2\u05E8")) {
                return false;
              }
              break;
          }
          break;
        }
        case 4: {
          lab1: {
            const v_2 = this.limit - this.cursor;
            lab2: {
              if (!this.r_R1()) {
                break lab2;
              }
              if (!this.slice_del()) {
                return false;
              }
              break lab1;
            }
            this.cursor = this.limit - v_2;
            if (!this.slice_from("\u05D8")) {
              return false;
            }
          }
          this.ket = this.cursor;
          if (!this.eq_s_b("\u05D1\u05E8\u05D0\u05DB")) {
            break lab0;
          }
          const v_3 = this.limit - this.cursor;
          lab3: {
            if (!this.eq_s_b("\u05D2\u05E2")) {
              this.cursor = this.limit - v_3;
              break lab3;
            }
          }
          this.bra = this.cursor;
          if (!this.slice_from("\u05D1\u05E8\u05E2\u05E0\u05D2")) {
            return false;
          }
          break;
        }
        case 5:
          if (!this.slice_from("\u05D2\u05F2")) {
            return false;
          }
          break;
        case 6:
          if (!this.slice_from("\u05E0\u05E2\u05DE")) {
            return false;
          }
          break;
        case 7:
          if (!this.slice_from("\u05E9\u05E8\u05F2\u05D1")) {
            return false;
          }
          break;
        case 8:
          if (!this.slice_from("\u05DE\u05F2\u05D3")) {
            return false;
          }
          break;
        case 9:
          if (!this.slice_from("\u05D1\u05F2\u05D8")) {
            return false;
          }
          break;
        case 10:
          if (!this.slice_from("\u05D1\u05F2\u05E1")) {
            return false;
          }
          break;
        case 11:
          if (!this.slice_from("\u05F0\u05F2\u05D6")) {
            return false;
          }
          break;
        case 12:
          if (!this.slice_from("\u05D8\u05E8\u05F2\u05D1")) {
            return false;
          }
          break;
        case 13:
          if (!this.slice_from("\u05DC\u05F2\u05D8")) {
            return false;
          }
          break;
        case 14:
          if (!this.slice_from("\u05E7\u05DC\u05F2\u05D1")) {
            return false;
          }
          break;
        case 15:
          if (!this.slice_from("\u05E8\u05F2\u05D1")) {
            return false;
          }
          break;
        case 16:
          if (!this.slice_from("\u05E8\u05F2\u05E1")) {
            return false;
          }
          break;
        case 17:
          if (!this.slice_from("\u05E9\u05F0\u05F2\u05D2")) {
            return false;
          }
          break;
        case 18:
          if (!this.slice_from("\u05E9\u05DE\u05F2\u05E1")) {
            return false;
          }
          break;
        case 19:
          if (!this.slice_from("\u05E9\u05E0\u05F2\u05D3")) {
            return false;
          }
          break;
        case 20:
          if (!this.slice_from("\u05D1\u05D9\u05E0\u05D3")) {
            return false;
          }
          break;
        case 21:
          if (!this.slice_from("\u05F0\u05D9\u05D8\u05E9")) {
            return false;
          }
          break;
        case 22:
          if (!this.slice_from("\u05D6\u05D9\u05E0\u05D2")) {
            return false;
          }
          break;
        case 23:
          if (!this.slice_from("\u05D8\u05E8\u05D9\u05E0\u05E7")) {
            return false;
          }
          break;
        case 24:
          if (!this.slice_from("\u05E6\u05F0\u05D9\u05E0\u05D2")) {
            return false;
          }
          break;
        case 25:
          if (!this.slice_from("\u05E9\u05DC\u05D9\u05E0\u05D2")) {
            return false;
          }
          break;
        case 26:
          if (!this.slice_from("\u05D1\u05F2\u05D2")) {
            return false;
          }
          break;
        case 27:
          if (!this.slice_from("\u05D4\u05F2\u05D1")) {
            return false;
          }
          break;
        case 28:
          if (!this.slice_from("\u05E4\u05D0\u05E8\u05DC\u05D9\u05E8")) {
            return false;
          }
          break;
        case 29:
          if (!this.slice_from("\u05E9\u05D8\u05F2")) {
            return false;
          }
          break;
        case 30:
          if (!this.slice_from("\u05E9\u05F0\u05E2\u05E8")) {
            return false;
          }
          break;
        case 31:
          if (!this.slice_from("\u05D1\u05E8\u05E2\u05E0\u05D2")) {
            return false;
          }
          break;
        case 32:
          if (!this.r_R1()) {
            break lab0;
          }
          if (!this.slice_from("\u05D4")) {
            return false;
          }
          break;
        case 33:
          lab4: {
            const v_4 = this.limit - this.cursor;
            lab5: {
              lab6: {
                const v_5 = this.limit - this.cursor;
                lab7: {
                  if (!this.eq_s_b("\u05D2")) {
                    break lab7;
                  }
                  break lab6;
                }
                this.cursor = this.limit - v_5;
                if (!this.eq_s_b("\u05E9")) {
                  break lab5;
                }
              }
              const v_6 = this.limit - this.cursor;
              lab8: {
                if (!this.r_R1plus3()) {
                  this.cursor = this.limit - v_6;
                  break lab8;
                }
                if (!this.slice_from("\u05D9\u05E1")) {
                  return false;
                }
              }
              break lab4;
            }
            this.cursor = this.limit - v_4;
            if (!this.r_R1()) {
              break lab0;
            }
            if (!this.slice_del()) {
              return false;
            }
          }
          break;
      }
    }
    this.cursor = this.limit - v_1;
    const v_7 = this.limit - this.cursor;
    lab9: {
      this.ket = this.cursor;
      const among_var = this.find_among_b(a_5);
      if (among_var == 0) {
        break lab9;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 1:
          if (!this.r_R1()) {
            break lab9;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 2:
          if (!this.r_R1()) {
            break lab9;
          }
          if (!this.in_grouping_b(g_consonant, 1489, 1520)) {
            break lab9;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    this.cursor = this.limit - v_7;
    const v_8 = this.limit - this.cursor;
    lab10: {
      this.ket = this.cursor;
      const among_var = this.find_among_b(a_6);
      if (among_var == 0) {
        break lab10;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 1:
          if (!this.r_R1()) {
            break lab10;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    this.cursor = this.limit - v_8;
    const v_9 = this.limit - this.cursor;
    while (true) {
      const v_10 = this.limit - this.cursor;
      lab12: {
        golab13:
        while (true) {
          const v_11 = this.limit - this.cursor;
          lab14: {
            this.ket = this.cursor;
            lab15: {
              const v_12 = this.limit - this.cursor;
              lab16: {
                if (!this.eq_s_b("GE")) {
                  break lab16;
                }
                break lab15;
              }
              this.cursor = this.limit - v_12;
              if (!this.eq_s_b("TSU")) {
                break lab14;
              }
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            this.cursor = this.limit - v_11;
            break golab13;
          }
          this.cursor = this.limit - v_11;
          if (this.cursor <= this.limit_backward) {
            break lab12;
          }
          this.cursor--;
        }
        continue;
      }
      this.cursor = this.limit - v_10;
      break;
    }
    this.cursor = this.limit - v_9;
    return true;
  }

  stemHelper() {
    this.r_prelude();
    const v_2 = this.cursor;
    this.r_mark_regions();
    this.cursor = v_2;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.r_standard_suffix();
    this.cursor = this.limit_backward;
    return true;
  }
}
