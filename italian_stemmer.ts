import { ITALIAN_STOP_WORDS } from "./italian_stop_words.ts";
import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["", -1, 7],
  ["qu", 0, 6],
  ["\u00E1", 0, 1],
  ["\u00E9", 0, 2],
  ["\u00ED", 0, 3],
  ["\u00F3", 0, 4],
  ["\u00FA", 0, 5],
];

const a_1: Rule[] = [
  ["", -1, 3],
  ["I", 0, 1],
  ["U", 0, 2],
];

const a_2: Rule[] = [
  ["la", -1, -1],
  ["cela", 0, -1],
  ["gliela", 0, -1],
  ["mela", 0, -1],
  ["tela", 0, -1],
  ["vela", 0, -1],
  ["le", -1, -1],
  ["cele", 6, -1],
  ["gliele", 6, -1],
  ["mele", 6, -1],
  ["tele", 6, -1],
  ["vele", 6, -1],
  ["ne", -1, -1],
  ["cene", 12, -1],
  ["gliene", 12, -1],
  ["mene", 12, -1],
  ["sene", 12, -1],
  ["tene", 12, -1],
  ["vene", 12, -1],
  ["ci", -1, -1],
  ["li", -1, -1],
  ["celi", 20, -1],
  ["glieli", 20, -1],
  ["meli", 20, -1],
  ["teli", 20, -1],
  ["veli", 20, -1],
  ["gli", 20, -1],
  ["mi", -1, -1],
  ["si", -1, -1],
  ["ti", -1, -1],
  ["vi", -1, -1],
  ["lo", -1, -1],
  ["celo", 31, -1],
  ["glielo", 31, -1],
  ["melo", 31, -1],
  ["telo", 31, -1],
  ["velo", 31, -1],
];

const a_3: Rule[] = [
  ["ando", -1, 1],
  ["endo", -1, 1],
  ["ar", -1, 2],
  ["er", -1, 2],
  ["ir", -1, 2],
];

const a_4: Rule[] = [
  ["ic", -1, -1],
  ["abil", -1, -1],
  ["os", -1, -1],
  ["iv", -1, 1],
];

const a_5: Rule[] = [
  ["ic", -1, 1],
  ["abil", -1, 1],
  ["iv", -1, 1],
];

const a_6: Rule[] = [
  ["ica", -1, 1],
  ["logia", -1, 3],
  ["osa", -1, 1],
  ["ista", -1, 1],
  ["iva", -1, 9],
  ["anza", -1, 1],
  ["enza", -1, 5],
  ["ice", -1, 1],
  ["atrice", 7, 1],
  ["iche", -1, 1],
  ["logie", -1, 3],
  ["abile", -1, 1],
  ["ibile", -1, 1],
  ["usione", -1, 4],
  ["azione", -1, 2],
  ["uzione", -1, 4],
  ["atore", -1, 2],
  ["ose", -1, 1],
  ["ante", -1, 1],
  ["mente", -1, 1],
  ["amente", 19, 7],
  ["iste", -1, 1],
  ["ive", -1, 9],
  ["anze", -1, 1],
  ["enze", -1, 5],
  ["ici", -1, 1],
  ["atrici", 25, 1],
  ["ichi", -1, 1],
  ["abili", -1, 1],
  ["ibili", -1, 1],
  ["ismi", -1, 1],
  ["usioni", -1, 4],
  ["azioni", -1, 2],
  ["uzioni", -1, 4],
  ["atori", -1, 2],
  ["osi", -1, 1],
  ["anti", -1, 1],
  ["amenti", -1, 6],
  ["imenti", -1, 6],
  ["isti", -1, 1],
  ["ivi", -1, 9],
  ["ico", -1, 1],
  ["ismo", -1, 1],
  ["oso", -1, 1],
  ["amento", -1, 6],
  ["imento", -1, 6],
  ["ivo", -1, 9],
  ["it\u00E0", -1, 8],
  ["ist\u00E0", -1, 1],
  ["ist\u00E8", -1, 1],
  ["ist\u00EC", -1, 1],
];

const a_7: Rule[] = [
  ["isca", -1, 1],
  ["enda", -1, 1],
  ["ata", -1, 1],
  ["ita", -1, 1],
  ["uta", -1, 1],
  ["ava", -1, 1],
  ["eva", -1, 1],
  ["iva", -1, 1],
  ["erebbe", -1, 1],
  ["irebbe", -1, 1],
  ["isce", -1, 1],
  ["ende", -1, 1],
  ["are", -1, 1],
  ["ere", -1, 1],
  ["ire", -1, 1],
  ["asse", -1, 1],
  ["ate", -1, 1],
  ["avate", 16, 1],
  ["evate", 16, 1],
  ["ivate", 16, 1],
  ["ete", -1, 1],
  ["erete", 20, 1],
  ["irete", 20, 1],
  ["ite", -1, 1],
  ["ereste", -1, 1],
  ["ireste", -1, 1],
  ["ute", -1, 1],
  ["erai", -1, 1],
  ["irai", -1, 1],
  ["isci", -1, 1],
  ["endi", -1, 1],
  ["erei", -1, 1],
  ["irei", -1, 1],
  ["assi", -1, 1],
  ["ati", -1, 1],
  ["iti", -1, 1],
  ["eresti", -1, 1],
  ["iresti", -1, 1],
  ["uti", -1, 1],
  ["avi", -1, 1],
  ["evi", -1, 1],
  ["ivi", -1, 1],
  ["isco", -1, 1],
  ["ando", -1, 1],
  ["endo", -1, 1],
  ["Yamo", -1, 1],
  ["iamo", -1, 1],
  ["avamo", -1, 1],
  ["evamo", -1, 1],
  ["ivamo", -1, 1],
  ["eremo", -1, 1],
  ["iremo", -1, 1],
  ["assimo", -1, 1],
  ["ammo", -1, 1],
  ["emmo", -1, 1],
  ["eremmo", 54, 1],
  ["iremmo", 54, 1],
  ["immo", -1, 1],
  ["ano", -1, 1],
  ["iscano", 58, 1],
  ["avano", 58, 1],
  ["evano", 58, 1],
  ["ivano", 58, 1],
  ["eranno", -1, 1],
  ["iranno", -1, 1],
  ["ono", -1, 1],
  ["iscono", 65, 1],
  ["arono", 65, 1],
  ["erono", 65, 1],
  ["irono", 65, 1],
  ["erebbero", -1, 1],
  ["irebbero", -1, 1],
  ["assero", -1, 1],
  ["essero", -1, 1],
  ["issero", -1, 1],
  ["ato", -1, 1],
  ["ito", -1, 1],
  ["uto", -1, 1],
  ["avo", -1, 1],
  ["evo", -1, 1],
  ["ivo", -1, 1],
  ["ar", -1, 1],
  ["ir", -1, 1],
  ["er\u00E0", -1, 1],
  ["ir\u00E0", -1, 1],
  ["er\u00F2", -1, 1],
  ["ir\u00F2", -1, 1],
];

const g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2, 1];

const g_AEIO = [17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2];

const g_CG = [17];

/** Stemmer for the Italian language */
export class ItalianStemmer extends Stemmer {
  private I_p2 = 0;
  private I_p1 = 0;
  private I_pV = 0;

  readonly stopWords = ITALIAN_STOP_WORDS;

  private r_prelude() {
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
            if (!this.slice_from("\u00E0")) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from("\u00E8")) {
              return false;
            }
            break;
          case 3:
            if (!this.slice_from("\u00EC")) {
              return false;
            }
            break;
          case 4:
            if (!this.slice_from("\u00F2")) {
              return false;
            }
            break;
          case 5:
            if (!this.slice_from("\u00F9")) {
              return false;
            }
            break;
          case 6:
            if (!this.slice_from("qU")) {
              return false;
            }
            break;
          case 7:
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
    while (true) {
      const v_3 = this.cursor;
      lab1: {
        golab2:
        while (true) {
          const v_4 = this.cursor;
          lab3: {
            if (!this.in_grouping(g_v, 97, 249)) {
              break lab3;
            }
            this.bra = this.cursor;
            lab4: {
              const v_5 = this.cursor;
              lab5: {
                if (!this.eq_s("u")) {
                  break lab5;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(g_v, 97, 249)) {
                  break lab5;
                }
                if (!this.slice_from("U")) {
                  return false;
                }
                break lab4;
              }
              this.cursor = v_5;
              if (!this.eq_s("i")) {
                break lab3;
              }
              this.ket = this.cursor;
              if (!this.in_grouping(g_v, 97, 249)) {
                break lab3;
              }
              if (!this.slice_from("I")) {
                return false;
              }
            }
            this.cursor = v_4;
            break golab2;
          }
          this.cursor = v_4;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        continue;
      }
      this.cursor = v_3;
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
          if (!this.in_grouping(g_v, 97, 249)) {
            break lab2;
          }
          lab3: {
            const v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(g_v, 97, 249)) {
                break lab4;
              }
              golab5:
              while (true) {
                lab6: {
                  if (!this.in_grouping(g_v, 97, 249)) {
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
            if (!this.in_grouping(g_v, 97, 249)) {
              break lab2;
            }
            golab7:
            while (true) {
              lab8: {
                if (!this.out_grouping(g_v, 97, 249)) {
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
        if (!this.out_grouping(g_v, 97, 249)) {
          break lab0;
        }
        lab9: {
          const v_6 = this.cursor;
          lab10: {
            if (!this.out_grouping(g_v, 97, 249)) {
              break lab10;
            }
            golab11:
            while (true) {
              lab12: {
                if (!this.in_grouping(g_v, 97, 249)) {
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
          if (!this.in_grouping(g_v, 97, 249)) {
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
          if (!this.in_grouping(g_v, 97, 249)) {
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
          if (!this.out_grouping(g_v, 97, 249)) {
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
          if (!this.in_grouping(g_v, 97, 249)) {
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
          if (!this.out_grouping(g_v, 97, 249)) {
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
            if (!this.slice_from("i")) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from("u")) {
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

  private r_attached_pronoun() {
    this.ket = this.cursor;
    if (this.find_among_b(a_2) == 0) {
      return false;
    }
    this.bra = this.cursor;
    const among_var = this.find_among_b(a_3);
    if (among_var == 0) {
      return false;
    }
    if (!this.r_RV()) {
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
    }
    return true;
  }

  private r_standard_suffix() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_6);
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
      case 2: {
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        const v_1 = this.limit - this.cursor;
        lab0: {
          this.ket = this.cursor;
          if (!this.eq_s_b("ic")) {
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
        }
        break;
      }
      case 3:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("log")) {
          return false;
        }
        break;
      case 4:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("u")) {
          return false;
        }
        break;
      case 5:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ente")) {
          return false;
        }
        break;
      case 6:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 7: {
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        const v_2 = this.limit - this.cursor;
        lab1: {
          this.ket = this.cursor;
          const among_var = this.find_among_b(a_4);
          if (among_var == 0) {
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
          switch (among_var) {
            case 1:
              this.ket = this.cursor;
              if (!this.eq_s_b("at")) {
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
              break;
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
        const v_3 = this.limit - this.cursor;
        lab2: {
          this.ket = this.cursor;
          if (this.find_among_b(a_5) == 0) {
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
      case 9: {
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
          this.ket = this.cursor;
          if (!this.eq_s_b("ic")) {
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
    if (this.find_among_b(a_7) == 0) {
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

  private r_vowel_suffix() {
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      if (!this.in_grouping_b(g_AEIO, 97, 242)) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.bra = this.cursor;
      if (!this.r_RV()) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      if (!this.slice_del()) {
        return false;
      }
      this.ket = this.cursor;
      if (!this.eq_s_b("i")) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.bra = this.cursor;
      if (!this.r_RV()) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    const v_2 = this.limit - this.cursor;
    lab1: {
      this.ket = this.cursor;
      if (!this.eq_s_b("h")) {
        this.cursor = this.limit - v_2;
        break lab1;
      }
      this.bra = this.cursor;
      if (!this.in_grouping_b(g_CG, 99, 103)) {
        this.cursor = this.limit - v_2;
        break lab1;
      }
      if (!this.r_RV()) {
        this.cursor = this.limit - v_2;
        break lab1;
      }
      if (!this.slice_del()) {
        return false;
      }
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
    this.r_attached_pronoun();
    this.cursor = this.limit - v_3;
    const v_4 = this.limit - this.cursor;
    lab0: {
      lab1: {
        const v_5 = this.limit - this.cursor;
        lab2: {
          if (!this.r_standard_suffix()) {
            break lab2;
          }
          break lab1;
        }
        this.cursor = this.limit - v_5;
        if (!this.r_verb_suffix()) {
          break lab0;
        }
      }
    }
    this.cursor = this.limit - v_4;
    const v_6 = this.limit - this.cursor;
    this.r_vowel_suffix();
    this.cursor = this.limit - v_6;
    this.cursor = this.limit_backward;
    const v_7 = this.cursor;
    this.r_postlude();
    this.cursor = v_7;
    return true;
  }
}
