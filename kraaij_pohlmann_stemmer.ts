import { DUTCH_STOP_WORDS } from "./dutch_stop_words.ts";
import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["nde", -1, 7],
  ["en", -1, 6],
  ["s", -1, 2],
  ["'s", 2, 1],
  ["es", 2, 4],
  ["ies", 4, 3],
  ["aus", 2, 5],
];

const a_1: Rule[] = [
  ["de", -1, 5],
  ["ge", -1, 2],
  ["ische", -1, 4],
  ["je", -1, 1],
  ["lijke", -1, 3],
  ["le", -1, 9],
  ["ene", -1, 10],
  ["re", -1, 8],
  ["se", -1, 7],
  ["te", -1, 6],
  ["ieve", -1, 11],
];

const a_2: Rule[] = [
  ["heid", -1, 3],
  ["fie", -1, 6],
  ["gie", -1, 7],
  ["atie", -1, 1],
  ["isme", -1, 2],
  ["ing", -1, 2],
  ["arij", -1, 5],
  ["erij", -1, 2],
  ["sel", -1, 3],
  ["rder", -1, 4],
  ["ster", -1, 3],
  ["iteit", -1, 2],
  ["dst", -1, 9],
  ["tst", -1, 8],
];

const a_3: Rule[] = [
  ["end", -1, 9],
  ["atief", -1, 2],
  ["erig", -1, 9],
  ["achtig", -1, 3],
  ["ioneel", -1, 1],
  ["baar", -1, 3],
  ["laar", -1, 5],
  ["naar", -1, 4],
  ["raar", -1, 6],
  ["eriger", -1, 9],
  ["achtiger", -1, 3],
  ["lijker", -1, 8],
  ["tant", -1, 7],
  ["erigst", -1, 9],
  ["achtigst", -1, 3],
  ["lijkst", -1, 8],
];

const a_4: Rule[] = [
  ["ig", -1, 1],
  ["iger", -1, 1],
  ["igst", -1, 1],
];

const a_5: Rule[] = [
  ["ft", -1, 2],
  ["kt", -1, 1],
  ["pt", -1, 3],
];

const a_6: Rule[] = [
  ["bb", -1, 1],
  ["cc", -1, 2],
  ["dd", -1, 3],
  ["ff", -1, 4],
  ["gg", -1, 5],
  ["hh", -1, 6],
  ["jj", -1, 7],
  ["kk", -1, 8],
  ["ll", -1, 9],
  ["mm", -1, 10],
  ["nn", -1, 11],
  ["pp", -1, 12],
  ["qq", -1, 13],
  ["rr", -1, 14],
  ["ss", -1, 15],
  ["tt", -1, 16],
  ["v", -1, 4],
  ["vv", 16, 17],
  ["ww", -1, 18],
  ["xx", -1, 19],
  ["z", -1, 15],
  ["zz", 20, 20],
];

const a_7: Rule[] = [
  ["d", -1, 1],
  ["t", -1, 2],
];

const g_v = [17, 65, 16, 1];

const g_v_WX = [17, 65, 208, 1];

const g_AOU = [1, 64, 16];

const g_AIOU = [1, 65, 16];

/** Alternative stemmer for the Dutch language */
export class KraaijPohlmannStemmer extends Stemmer {
  private B_GE_removed = false;
  private B_stemmed = false;
  private B_Y_found = false;
  private I_p2 = 0;
  private I_p1 = 0;
  private S_ch = "";

  readonly stopWords = DUTCH_STOP_WORDS;

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

  private r_V() {
    const v_1 = this.limit - this.cursor;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.in_grouping_b(g_v, 97, 121)) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("ij")) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  private r_VX() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.in_grouping_b(g_v, 97, 121)) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("ij")) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  private r_C() {
    const v_1 = this.limit - this.cursor;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("ij")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    if (!this.out_grouping_b(g_v, 97, 121)) {
      return false;
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  private r_lengthen_V() {
    const v_1 = this.limit - this.cursor;
    lab0: {
      if (!this.out_grouping_b(g_v_WX, 97, 121)) {
        break lab0;
      }
      this.ket = this.cursor;
      lab1: {
        const v_2 = this.limit - this.cursor;
        lab2: {
          if (!this.in_grouping_b(g_AOU, 97, 117)) {
            break lab2;
          }
          this.bra = this.cursor;
          const v_3 = this.limit - this.cursor;
          lab3: {
            const v_4 = this.limit - this.cursor;
            lab4: {
              if (!this.out_grouping_b(g_v, 97, 121)) {
                break lab4;
              }
              break lab3;
            }
            this.cursor = this.limit - v_4;
            if (this.cursor > this.limit_backward) {
              break lab2;
            }
          }
          this.cursor = this.limit - v_3;
          break lab1;
        }
        this.cursor = this.limit - v_2;
        if (!this.eq_s_b("e")) {
          break lab0;
        }
        this.bra = this.cursor;
        const v_5 = this.limit - this.cursor;
        lab5: {
          const v_6 = this.limit - this.cursor;
          lab6: {
            if (!this.out_grouping_b(g_v, 97, 121)) {
              break lab6;
            }
            break lab5;
          }
          this.cursor = this.limit - v_6;
          if (this.cursor > this.limit_backward) {
            break lab0;
          }
        }
        {
          const v_7 = this.limit - this.cursor;
          lab7: {
            if (!this.in_grouping_b(g_AIOU, 97, 117)) {
              break lab7;
            }
            break lab0;
          }
          this.cursor = this.limit - v_7;
        }
        {
          const v_8 = this.limit - this.cursor;
          lab8: {
            if (this.cursor <= this.limit_backward) {
              break lab8;
            }
            this.cursor--;
            if (!this.in_grouping_b(g_AIOU, 97, 117)) {
              break lab8;
            }
            if (!this.out_grouping_b(g_v, 97, 121)) {
              break lab8;
            }
            break lab0;
          }
          this.cursor = this.limit - v_8;
        }
        this.cursor = this.limit - v_5;
      }
      this.S_ch = this.slice_to();
      if (this.S_ch == "") {
        return false;
      }
      {
        const c1 = this.cursor;
        this.insert(this.cursor, this.cursor, this.S_ch);
        this.cursor = c1;
      }
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  private r_Step_1() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_0);
    if (among_var == 0) {
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
        if (!this.r_R1()) {
          return false;
        }
        {
          const v_1 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b("t")) {
              break lab0;
            }
            if (!this.r_R1()) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_1;
        }
        if (!this.r_C()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 3:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from("ie")) {
          return false;
        }
        break;
      case 4:
        lab1: {
          const v_2 = this.limit - this.cursor;
          lab2: {
            if (!this.eq_s_b("ar")) {
              break lab2;
            }
            if (!this.r_R1()) {
              break lab2;
            }
            if (!this.r_C()) {
              break lab2;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            if (!this.r_lengthen_V()) {
              break lab2;
            }
            break lab1;
          }
          this.cursor = this.limit - v_2;
          lab3: {
            if (!this.eq_s_b("er")) {
              break lab3;
            }
            if (!this.r_R1()) {
              break lab3;
            }
            if (!this.r_C()) {
              break lab3;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            break lab1;
          }
          this.cursor = this.limit - v_2;
          if (!this.r_R1()) {
            return false;
          }
          if (!this.r_C()) {
            return false;
          }
          if (!this.slice_from("e")) {
            return false;
          }
        }
        break;
      case 5:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.r_V()) {
          return false;
        }
        if (!this.slice_from("au")) {
          return false;
        }
        break;
      case 6:
        lab4: {
          const v_3 = this.limit - this.cursor;
          lab5: {
            if (!this.eq_s_b("hed")) {
              break lab5;
            }
            if (!this.r_R1()) {
              break lab5;
            }
            this.bra = this.cursor;
            if (!this.slice_from("heid")) {
              return false;
            }
            break lab4;
          }
          this.cursor = this.limit - v_3;
          lab6: {
            if (!this.eq_s_b("nd")) {
              break lab6;
            }
            if (!this.slice_del()) {
              return false;
            }
            break lab4;
          }
          this.cursor = this.limit - v_3;
          lab7: {
            if (!this.eq_s_b("d")) {
              break lab7;
            }
            if (!this.r_R1()) {
              break lab7;
            }
            if (!this.r_C()) {
              break lab7;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            break lab4;
          }
          this.cursor = this.limit - v_3;
          lab8: {
            lab9: {
              const v_4 = this.limit - this.cursor;
              lab10: {
                if (!this.eq_s_b("i")) {
                  break lab10;
                }
                break lab9;
              }
              this.cursor = this.limit - v_4;
              if (!this.eq_s_b("j")) {
                break lab8;
              }
            }
            if (!this.r_V()) {
              break lab8;
            }
            if (!this.slice_del()) {
              return false;
            }
            break lab4;
          }
          this.cursor = this.limit - v_3;
          if (!this.r_R1()) {
            return false;
          }
          if (!this.r_C()) {
            return false;
          }
          if (!this.slice_del()) {
            return false;
          }
          if (!this.r_lengthen_V()) {
            return false;
          }
        }
        break;
      case 7:
        if (!this.slice_from("nd")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_Step_2() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_1);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b("'t")) {
              break lab1;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          lab2: {
            if (!this.eq_s_b("et")) {
              break lab2;
            }
            this.bra = this.cursor;
            if (!this.r_R1()) {
              break lab2;
            }
            if (!this.r_C()) {
              break lab2;
            }
            if (!this.slice_del()) {
              return false;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          lab3: {
            if (!this.eq_s_b("rnt")) {
              break lab3;
            }
            this.bra = this.cursor;
            if (!this.slice_from("rn")) {
              return false;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          lab4: {
            if (!this.eq_s_b("t")) {
              break lab4;
            }
            this.bra = this.cursor;
            if (!this.r_R1()) {
              break lab4;
            }
            if (!this.r_VX()) {
              break lab4;
            }
            if (!this.slice_del()) {
              return false;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          lab5: {
            if (!this.eq_s_b("ink")) {
              break lab5;
            }
            this.bra = this.cursor;
            if (!this.slice_from("ing")) {
              return false;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          lab6: {
            if (!this.eq_s_b("mp")) {
              break lab6;
            }
            this.bra = this.cursor;
            if (!this.slice_from("m")) {
              return false;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          lab7: {
            if (!this.eq_s_b("'")) {
              break lab7;
            }
            this.bra = this.cursor;
            if (!this.r_R1()) {
              break lab7;
            }
            if (!this.slice_del()) {
              return false;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          this.bra = this.cursor;
          if (!this.r_R1()) {
            return false;
          }
          if (!this.r_C()) {
            return false;
          }
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
      case 2:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from("g")) {
          return false;
        }
        break;
      case 3:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from("lijk")) {
          return false;
        }
        break;
      case 4:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from("isch")) {
          return false;
        }
        break;
      case 5:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.r_C()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 6:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from("t")) {
          return false;
        }
        break;
      case 7:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from("s")) {
          return false;
        }
        break;
      case 8:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from("r")) {
          return false;
        }
        break;
      case 9:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        this.insert(this.cursor, this.cursor, "l");
        if (!this.r_lengthen_V()) {
          return false;
        }
        break;
      case 10:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.r_C()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        this.insert(this.cursor, this.cursor, "en");
        if (!this.r_lengthen_V()) {
          return false;
        }
        break;
      case 11:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.r_C()) {
          return false;
        }
        if (!this.slice_from("ief")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_Step_3() {
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
        if (!this.slice_from("eer")) {
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
        if (!this.r_lengthen_V()) {
          return false;
        }
        break;
      case 3:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("r")) {
          return false;
        }
        break;
      case 5:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.r_C()) {
          return false;
        }
        if (!this.slice_from("aar")) {
          return false;
        }
        break;
      case 6:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        this.insert(this.cursor, this.cursor, "f");
        if (!this.r_lengthen_V()) {
          return false;
        }
        break;
      case 7:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        this.insert(this.cursor, this.cursor, "g");
        if (!this.r_lengthen_V()) {
          return false;
        }
        break;
      case 8:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.r_C()) {
          return false;
        }
        if (!this.slice_from("t")) {
          return false;
        }
        break;
      case 9:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.r_C()) {
          return false;
        }
        if (!this.slice_from("d")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_Step_4() {
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        this.ket = this.cursor;
        const among_var = this.find_among_b(a_3);
        if (among_var == 0) {
          break lab1;
        }
        this.bra = this.cursor;
        switch (among_var) {
          case 1:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.slice_from("ie")) {
              return false;
            }
            break;
          case 2:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.slice_from("eer")) {
              return false;
            }
            break;
          case 3:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.slice_del()) {
              return false;
            }
            break;
          case 4:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.r_V()) {
              break lab1;
            }
            if (!this.slice_from("n")) {
              return false;
            }
            break;
          case 5:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.r_V()) {
              break lab1;
            }
            if (!this.slice_from("l")) {
              return false;
            }
            break;
          case 6:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.r_V()) {
              break lab1;
            }
            if (!this.slice_from("r")) {
              return false;
            }
            break;
          case 7:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.slice_from("teer")) {
              return false;
            }
            break;
          case 8:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.slice_from("lijk")) {
              return false;
            }
            break;
          case 9:
            if (!this.r_R1()) {
              break lab1;
            }
            if (!this.r_C()) {
              break lab1;
            }
            if (!this.slice_del()) {
              return false;
            }
            if (!this.r_lengthen_V()) {
              break lab1;
            }
            break;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      this.ket = this.cursor;
      if (this.find_among_b(a_4) == 0) {
        return false;
      }
      this.bra = this.cursor;
      if (!this.r_R1()) {
        return false;
      }
      if (!this.r_C()) {
        return false;
      }
      if (!this.slice_del()) {
        return false;
      }
      if (!this.r_lengthen_V()) {
        return false;
      }
    }
    return true;
  }

  private r_Step_7() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_5);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_from("k")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("f")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("p")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_Step_6() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_6);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_from("b")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("c")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("d")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("f")) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from("g")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("h")) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_from("j")) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_from("k")) {
          return false;
        }
        break;
      case 9:
        if (!this.slice_from("l")) {
          return false;
        }
        break;
      case 10:
        if (!this.slice_from("m")) {
          return false;
        }
        break;
      case 11:
        if (!this.slice_from("n")) {
          return false;
        }
        break;
      case 12:
        if (!this.slice_from("p")) {
          return false;
        }
        break;
      case 13:
        if (!this.slice_from("q")) {
          return false;
        }
        break;
      case 14:
        if (!this.slice_from("r")) {
          return false;
        }
        break;
      case 15:
        if (!this.slice_from("s")) {
          return false;
        }
        break;
      case 16:
        if (!this.slice_from("t")) {
          return false;
        }
        break;
      case 17:
        if (!this.slice_from("v")) {
          return false;
        }
        break;
      case 18:
        if (!this.slice_from("w")) {
          return false;
        }
        break;
      case 19:
        if (!this.slice_from("x")) {
          return false;
        }
        break;
      case 20:
        if (!this.slice_from("z")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_Step_1c() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_7);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    if (!this.r_C()) {
      return false;
    }
    switch (among_var) {
      case 1:
        {
          const v_1 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b("n")) {
              break lab0;
            }
            if (!this.r_R1()) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_1;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        {
          const v_2 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b("h")) {
              break lab1;
            }
            if (!this.r_R1()) {
              break lab1;
            }
            return false;
          }
          this.cursor = this.limit - v_2;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_Lose_prefix() {
    this.bra = this.cursor;
    if (!this.eq_s("ge")) {
      return false;
    }
    this.ket = this.cursor;
    const v_1 = this.cursor;
    {
      const c1 = this.cursor + 3;
      if (c1 > this.limit) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = v_1;
    golab0:
    while (true) {
      const v_2 = this.cursor;
      lab1: {
        if (!this.in_grouping(g_v, 97, 121)) {
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
      const v_3 = this.cursor;
      lab3: {
        if (!this.out_grouping(g_v, 97, 121)) {
          break lab3;
        }
        this.cursor = v_3;
        break golab2;
      }
      this.cursor = v_3;
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    this.B_GE_removed = true;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  private r_Lose_infix() {
    if (this.cursor >= this.limit) {
      return false;
    }
    this.cursor++;
    golab0:
    while (true) {
      lab1: {
        this.bra = this.cursor;
        if (!this.eq_s("ge")) {
          break lab1;
        }
        this.ket = this.cursor;
        break golab0;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    const v_2 = this.cursor;
    {
      const c1 = this.cursor + 3;
      if (c1 > this.limit) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = v_2;
    golab2:
    while (true) {
      const v_3 = this.cursor;
      lab3: {
        if (!this.in_grouping(g_v, 97, 121)) {
          break lab3;
        }
        this.cursor = v_3;
        break golab2;
      }
      this.cursor = v_3;
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    golab4:
    while (true) {
      const v_4 = this.cursor;
      lab5: {
        if (!this.out_grouping(g_v, 97, 121)) {
          break lab5;
        }
        this.cursor = v_4;
        break golab4;
      }
      this.cursor = v_4;
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    this.B_GE_removed = true;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  private r_measure() {
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      while (true) {
        lab1: {
          if (!this.out_grouping(g_v, 97, 121)) {
            break lab1;
          }
          continue;
        }
        break;
      }
      {
        let v_3 = 1;
        while (true) {
          const v_4 = this.cursor;
          lab2: {
            lab3: {
              const v_5 = this.cursor;
              lab4: {
                if (!this.eq_s("ij")) {
                  break lab4;
                }
                break lab3;
              }
              this.cursor = v_5;
              if (!this.in_grouping(g_v, 97, 121)) {
                break lab2;
              }
            }
            v_3--;
            continue;
          }
          this.cursor = v_4;
          break;
        }
        if (v_3 > 0) {
          break lab0;
        }
      }
      if (!this.out_grouping(g_v, 97, 121)) {
        break lab0;
      }
      this.I_p1 = this.cursor;
      while (true) {
        lab5: {
          if (!this.out_grouping(g_v, 97, 121)) {
            break lab5;
          }
          continue;
        }
        break;
      }
      {
        let v_7 = 1;
        while (true) {
          const v_8 = this.cursor;
          lab6: {
            lab7: {
              const v_9 = this.cursor;
              lab8: {
                if (!this.eq_s("ij")) {
                  break lab8;
                }
                break lab7;
              }
              this.cursor = v_9;
              if (!this.in_grouping(g_v, 97, 121)) {
                break lab6;
              }
            }
            v_7--;
            continue;
          }
          this.cursor = v_8;
          break;
        }
        if (v_7 > 0) {
          break lab0;
        }
      }
      if (!this.out_grouping(g_v, 97, 121)) {
        break lab0;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_1;
    return true;
  }

  _stemHelper() {
    this.B_Y_found = false;
    this.B_stemmed = false;
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
    if (!this.r_measure()) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_5 = this.limit - this.cursor;
    lab5: {
      if (!this.r_Step_1()) {
        break lab5;
      }
      this.B_stemmed = true;
    }
    this.cursor = this.limit - v_5;
    const v_6 = this.limit - this.cursor;
    lab6: {
      if (!this.r_Step_2()) {
        break lab6;
      }
      this.B_stemmed = true;
    }
    this.cursor = this.limit - v_6;
    const v_7 = this.limit - this.cursor;
    lab7: {
      if (!this.r_Step_3()) {
        break lab7;
      }
      this.B_stemmed = true;
    }
    this.cursor = this.limit - v_7;
    const v_8 = this.limit - this.cursor;
    lab8: {
      if (!this.r_Step_4()) {
        break lab8;
      }
      this.B_stemmed = true;
    }
    this.cursor = this.limit - v_8;
    this.cursor = this.limit_backward;
    this.B_GE_removed = false;
    const v_9 = this.cursor;
    lab9: {
      const v_10 = this.cursor;
      if (!this.r_Lose_prefix()) {
        break lab9;
      }
      this.cursor = v_10;
      if (!this.r_measure()) {
        break lab9;
      }
    }
    this.cursor = v_9;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_11 = this.limit - this.cursor;
    lab10: {
      if (!this.B_GE_removed) {
        break lab10;
      }
      if (!this.r_Step_1c()) {
        break lab10;
      }
    }
    this.cursor = this.limit - v_11;
    this.cursor = this.limit_backward;
    this.B_GE_removed = false;
    const v_12 = this.cursor;
    lab11: {
      const v_13 = this.cursor;
      if (!this.r_Lose_infix()) {
        break lab11;
      }
      this.cursor = v_13;
      if (!this.r_measure()) {
        break lab11;
      }
    }
    this.cursor = v_12;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_14 = this.limit - this.cursor;
    lab12: {
      if (!this.B_GE_removed) {
        break lab12;
      }
      if (!this.r_Step_1c()) {
        break lab12;
      }
    }
    this.cursor = this.limit - v_14;
    this.cursor = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_15 = this.limit - this.cursor;
    lab13: {
      if (!this.r_Step_7()) {
        break lab13;
      }
      this.B_stemmed = true;
    }
    this.cursor = this.limit - v_15;
    const v_16 = this.limit - this.cursor;
    lab14: {
      lab15: {
        lab16: {
          if (!this.B_stemmed) {
            break lab16;
          }
          break lab15;
        }
        if (!this.B_GE_removed) {
          break lab14;
        }
      }
      if (!this.r_Step_6()) {
        break lab14;
      }
    }
    this.cursor = this.limit - v_16;
    this.cursor = this.limit_backward;
    const v_18 = this.cursor;
    lab17: {
      if (!this.B_Y_found) {
        break lab17;
      }
      while (true) {
        const v_19 = this.cursor;
        lab18: {
          golab19:
          while (true) {
            const v_20 = this.cursor;
            lab20: {
              this.bra = this.cursor;
              if (!this.eq_s("Y")) {
                break lab20;
              }
              this.ket = this.cursor;
              this.cursor = v_20;
              break golab19;
            }
            this.cursor = v_20;
            if (this.cursor >= this.limit) {
              break lab18;
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
