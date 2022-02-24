import { PORTUGUESE_STOP_WORDS } from "./portuguese_stop_words.ts";
import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["", -1, 3],
  ["\u00E3", 0, 1],
  ["\u00F5", 0, 2],
];

const a_1: Rule[] = [
  ["", -1, 3],
  ["a~", 0, 1],
  ["o~", 0, 2],
];

const a_2: Rule[] = [
  ["ic", -1, -1],
  ["ad", -1, -1],
  ["os", -1, -1],
  ["iv", -1, 1],
];

const a_3: Rule[] = [
  ["ante", -1, 1],
  ["avel", -1, 1],
  ["\u00EDvel", -1, 1],
];

const a_4: Rule[] = [
  ["ic", -1, 1],
  ["abil", -1, 1],
  ["iv", -1, 1],
];

const a_5: Rule[] = [
  ["ica", -1, 1],
  ["\u00E2ncia", -1, 1],
  ["\u00EAncia", -1, 4],
  ["logia", -1, 2],
  ["ira", -1, 9],
  ["adora", -1, 1],
  ["osa", -1, 1],
  ["ista", -1, 1],
  ["iva", -1, 8],
  ["eza", -1, 1],
  ["idade", -1, 7],
  ["ante", -1, 1],
  ["mente", -1, 6],
  ["amente", 12, 5],
  ["\u00E1vel", -1, 1],
  ["\u00EDvel", -1, 1],
  ["ico", -1, 1],
  ["ismo", -1, 1],
  ["oso", -1, 1],
  ["amento", -1, 1],
  ["imento", -1, 1],
  ["ivo", -1, 8],
  ["a\u00E7a~o", -1, 1],
  ["u\u00E7a~o", -1, 3],
  ["ador", -1, 1],
  ["icas", -1, 1],
  ["\u00EAncias", -1, 4],
  ["logias", -1, 2],
  ["iras", -1, 9],
  ["adoras", -1, 1],
  ["osas", -1, 1],
  ["istas", -1, 1],
  ["ivas", -1, 8],
  ["ezas", -1, 1],
  ["idades", -1, 7],
  ["adores", -1, 1],
  ["antes", -1, 1],
  ["a\u00E7o~es", -1, 1],
  ["u\u00E7o~es", -1, 3],
  ["icos", -1, 1],
  ["ismos", -1, 1],
  ["osos", -1, 1],
  ["amentos", -1, 1],
  ["imentos", -1, 1],
  ["ivos", -1, 8],
];

const a_6: Rule[] = [
  ["ada", -1, 1],
  ["ida", -1, 1],
  ["ia", -1, 1],
  ["aria", 2, 1],
  ["eria", 2, 1],
  ["iria", 2, 1],
  ["ara", -1, 1],
  ["era", -1, 1],
  ["ira", -1, 1],
  ["ava", -1, 1],
  ["asse", -1, 1],
  ["esse", -1, 1],
  ["isse", -1, 1],
  ["aste", -1, 1],
  ["este", -1, 1],
  ["iste", -1, 1],
  ["ei", -1, 1],
  ["arei", 16, 1],
  ["erei", 16, 1],
  ["irei", 16, 1],
  ["am", -1, 1],
  ["iam", 20, 1],
  ["ariam", 21, 1],
  ["eriam", 21, 1],
  ["iriam", 21, 1],
  ["aram", 20, 1],
  ["eram", 20, 1],
  ["iram", 20, 1],
  ["avam", 20, 1],
  ["em", -1, 1],
  ["arem", 29, 1],
  ["erem", 29, 1],
  ["irem", 29, 1],
  ["assem", 29, 1],
  ["essem", 29, 1],
  ["issem", 29, 1],
  ["ado", -1, 1],
  ["ido", -1, 1],
  ["ando", -1, 1],
  ["endo", -1, 1],
  ["indo", -1, 1],
  ["ara~o", -1, 1],
  ["era~o", -1, 1],
  ["ira~o", -1, 1],
  ["ar", -1, 1],
  ["er", -1, 1],
  ["ir", -1, 1],
  ["as", -1, 1],
  ["adas", 47, 1],
  ["idas", 47, 1],
  ["ias", 47, 1],
  ["arias", 50, 1],
  ["erias", 50, 1],
  ["irias", 50, 1],
  ["aras", 47, 1],
  ["eras", 47, 1],
  ["iras", 47, 1],
  ["avas", 47, 1],
  ["es", -1, 1],
  ["ardes", 58, 1],
  ["erdes", 58, 1],
  ["irdes", 58, 1],
  ["ares", 58, 1],
  ["eres", 58, 1],
  ["ires", 58, 1],
  ["asses", 58, 1],
  ["esses", 58, 1],
  ["isses", 58, 1],
  ["astes", 58, 1],
  ["estes", 58, 1],
  ["istes", 58, 1],
  ["is", -1, 1],
  ["ais", 71, 1],
  ["eis", 71, 1],
  ["areis", 73, 1],
  ["ereis", 73, 1],
  ["ireis", 73, 1],
  ["\u00E1reis", 73, 1],
  ["\u00E9reis", 73, 1],
  ["\u00EDreis", 73, 1],
  ["\u00E1sseis", 73, 1],
  ["\u00E9sseis", 73, 1],
  ["\u00EDsseis", 73, 1],
  ["\u00E1veis", 73, 1],
  ["\u00EDeis", 73, 1],
  ["ar\u00EDeis", 84, 1],
  ["er\u00EDeis", 84, 1],
  ["ir\u00EDeis", 84, 1],
  ["ados", -1, 1],
  ["idos", -1, 1],
  ["amos", -1, 1],
  ["\u00E1ramos", 90, 1],
  ["\u00E9ramos", 90, 1],
  ["\u00EDramos", 90, 1],
  ["\u00E1vamos", 90, 1],
  ["\u00EDamos", 90, 1],
  ["ar\u00EDamos", 95, 1],
  ["er\u00EDamos", 95, 1],
  ["ir\u00EDamos", 95, 1],
  ["emos", -1, 1],
  ["aremos", 99, 1],
  ["eremos", 99, 1],
  ["iremos", 99, 1],
  ["\u00E1ssemos", 99, 1],
  ["\u00EAssemos", 99, 1],
  ["\u00EDssemos", 99, 1],
  ["imos", -1, 1],
  ["armos", -1, 1],
  ["ermos", -1, 1],
  ["irmos", -1, 1],
  ["\u00E1mos", -1, 1],
  ["ar\u00E1s", -1, 1],
  ["er\u00E1s", -1, 1],
  ["ir\u00E1s", -1, 1],
  ["eu", -1, 1],
  ["iu", -1, 1],
  ["ou", -1, 1],
  ["ar\u00E1", -1, 1],
  ["er\u00E1", -1, 1],
  ["ir\u00E1", -1, 1],
];

const a_7: Rule[] = [
  ["a", -1, 1],
  ["i", -1, 1],
  ["o", -1, 1],
  ["os", -1, 1],
  ["\u00E1", -1, 1],
  ["\u00ED", -1, 1],
  ["\u00F3", -1, 1],
];

const a_8: Rule[] = [
  ["e", -1, 1],
  ["\u00E7", -1, 2],
  ["\u00E9", -1, 1],
  ["\u00EA", -1, 1],
];

const g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2];

export class PortugueseStemmer extends Stemmer {
  private I_p2 = 0;
  private I_p1 = 0;
  private I_pV = 0;

  readonly stopWords = PORTUGUESE_STOP_WORDS;

  private r_prelude() {
    while (true) {
      const v_1 = this.cursor;
      lab0: {
        this.bra = this.cursor;
        const among_var = this.find_among(a_0);
        if (among_var == 0) {
          break lab0;
        }
        this.ket = this.cursor;
        switch (among_var) {
          case 1:
            if (!this.slice_from("a~")) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from("o~")) {
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

  private r_mark_regions() {
    this.I_pV = this.limit;
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      lab1: {
        const v_2 = this.cursor;
        lab2: {
          if (!this.in_grouping(g_v, 97, 250)) {
            break lab2;
          }
          lab3: {
            const v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(g_v, 97, 250)) {
                break lab4;
              }
              golab5:
              while (true) {
                lab6: {
                  if (!this.in_grouping(g_v, 97, 250)) {
                    break lab6;
                  }
                  break golab5;
                }
                if (this.cursor >= this.limit) {
                  break lab4;
                }
                this.cursor++;
              }
              break lab3;
            }
            this.cursor = v_3;
            if (!this.in_grouping(g_v, 97, 250)) {
              break lab2;
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
                break lab2;
              }
              this.cursor++;
            }
          }
          break lab1;
        }
        this.cursor = v_2;
        if (!this.out_grouping(g_v, 97, 250)) {
          break lab0;
        }
        lab9: {
          const v_6 = this.cursor;
          lab10: {
            if (!this.out_grouping(g_v, 97, 250)) {
              break lab10;
            }
            golab11:
            while (true) {
              lab12: {
                if (!this.in_grouping(g_v, 97, 250)) {
                  break lab12;
                }
                break golab11;
              }
              if (this.cursor >= this.limit) {
                break lab10;
              }
              this.cursor++;
            }
            break lab9;
          }
          this.cursor = v_6;
          if (!this.in_grouping(g_v, 97, 250)) {
            break lab0;
          }
          if (this.cursor >= this.limit) {
            break lab0;
          }
          this.cursor++;
        }
      }
      this.I_pV = this.cursor;
    }
    this.cursor = v_1;
    const v_8 = this.cursor;
    lab13: {
      golab14:
      while (true) {
        lab15: {
          if (!this.in_grouping(g_v, 97, 250)) {
            break lab15;
          }
          break golab14;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      golab16:
      while (true) {
        lab17: {
          if (!this.out_grouping(g_v, 97, 250)) {
            break lab17;
          }
          break golab16;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      this.I_p1 = this.cursor;
      golab18:
      while (true) {
        lab19: {
          if (!this.in_grouping(g_v, 97, 250)) {
            break lab19;
          }
          break golab18;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      golab20:
      while (true) {
        lab21: {
          if (!this.out_grouping(g_v, 97, 250)) {
            break lab21;
          }
          break golab20;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_8;
    return true;
  }

  private r_postlude() {
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
            if (!this.slice_from("\u00E3")) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from("\u00F5")) {
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

  private r_RV() {
    if (!(this.I_pV <= this.cursor)) {
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

  private r_standard_suffix() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_5);
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
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("log")) {
          return false;
        }
        break;
      case 3:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("u")) {
          return false;
        }
        break;
      case 4:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ente")) {
          return false;
        }
        break;
      case 5: {
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_del()) {
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
          if (!this.r_R2()) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          if (!this.slice_del()) {
            return false;
          }
          switch (among_var) {
            case 1:
              this.ket = this.cursor;
              if (!this.eq_s_b("at")) {
                this.cursor = this.limit - v_1;
                break lab0;
              }
              this.bra = this.cursor;
              if (!this.r_R2()) {
                this.cursor = this.limit - v_1;
                break lab0;
              }
              if (!this.slice_del()) {
                return false;
              }
              break;
          }
        }
        break;
      }
      case 6: {
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        const v_2 = this.limit - this.cursor;
        lab1: {
          this.ket = this.cursor;
          if (this.find_among_b(a_3) == 0) {
            this.cursor = this.limit - v_2;
            break lab1;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_2;
            break lab1;
          }
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
      }
      case 7: {
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        const v_3 = this.limit - this.cursor;
        lab2: {
          this.ket = this.cursor;
          if (this.find_among_b(a_4) == 0) {
            this.cursor = this.limit - v_3;
            break lab2;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_3;
            break lab2;
          }
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
      }
      case 8: {
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        const v_4 = this.limit - this.cursor;
        lab3: {
          this.ket = this.cursor;
          if (!this.eq_s_b("at")) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
      }
      case 9:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.eq_s_b("e")) {
          return false;
        }
        if (!this.slice_from("ir")) {
          return false;
        }
        break;
    }
    return true;
  }

  private r_verb_suffix() {
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_pV;
    this.ket = this.cursor;
    if (this.find_among_b(a_6) == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.limit_backward = v_2;
    return true;
  }

  private r_residual_suffix() {
    this.ket = this.cursor;
    if (this.find_among_b(a_7) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_RV()) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  private r_residual_form() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_8);
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
        this.ket = this.cursor;
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b("u")) {
              break lab1;
            }
            this.bra = this.cursor;
            const v_2 = this.limit - this.cursor;
            if (!this.eq_s_b("g")) {
              break lab1;
            }
            this.cursor = this.limit - v_2;
            break lab0;
          }
          this.cursor = this.limit - v_1;
          if (!this.eq_s_b("i")) {
            return false;
          }
          this.bra = this.cursor;
          const v_3 = this.limit - this.cursor;
          if (!this.eq_s_b("c")) {
            return false;
          }
          this.cursor = this.limit - v_3;
        }
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("c")) {
          return false;
        }
        break;
    }
    return true;
  }

  _stemHelper() {
    const v_1 = this.cursor;
    this.r_prelude();
    this.cursor = v_1;
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_3 = this.limit - this.cursor;
    lab0: {
      lab1: {
        const v_4 = this.limit - this.cursor;
        lab2: {
          const v_5 = this.limit - this.cursor;
          lab3: {
            const v_6 = this.limit - this.cursor;
            lab4: {
              if (!this.r_standard_suffix()) {
                break lab4;
              }
              break lab3;
            }
            this.cursor = this.limit - v_6;
            if (!this.r_verb_suffix()) {
              break lab2;
            }
          }
          this.cursor = this.limit - v_5;
          const v_7 = this.limit - this.cursor;
          lab5: {
            this.ket = this.cursor;
            if (!this.eq_s_b("i")) {
              break lab5;
            }
            this.bra = this.cursor;
            const v_8 = this.limit - this.cursor;
            if (!this.eq_s_b("c")) {
              break lab5;
            }
            this.cursor = this.limit - v_8;
            if (!this.r_RV()) {
              break lab5;
            }
            if (!this.slice_del()) {
              return false;
            }
          }
          this.cursor = this.limit - v_7;
          break lab1;
        }
        this.cursor = this.limit - v_4;
        if (!this.r_residual_suffix()) {
          break lab0;
        }
      }
    }
    this.cursor = this.limit - v_3;
    const v_9 = this.limit - this.cursor;
    this.r_residual_form();
    this.cursor = this.limit - v_9;
    this.cursor = this.limit_backward;
    const v_10 = this.cursor;
    this.r_postlude();
    this.cursor = v_10;
    return true;
  }
}
