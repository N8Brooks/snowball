import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["", -1, 3],
  ["I", 0, 1],
  ["U", 0, 2],
];

const a_1: Rule[] = [
  ["ea", -1, 3],
  ["a\u0163ia", -1, 7],
  ["aua", -1, 2],
  ["iua", -1, 4],
  ["a\u0163ie", -1, 7],
  ["ele", -1, 3],
  ["ile", -1, 5],
  ["iile", 6, 4],
  ["iei", -1, 4],
  ["atei", -1, 6],
  ["ii", -1, 4],
  ["ului", -1, 1],
  ["ul", -1, 1],
  ["elor", -1, 3],
  ["ilor", -1, 4],
  ["iilor", 14, 4],
];

const a_2: Rule[] = [
  ["icala", -1, 4],
  ["iciva", -1, 4],
  ["ativa", -1, 5],
  ["itiva", -1, 6],
  ["icale", -1, 4],
  ["a\u0163iune", -1, 5],
  ["i\u0163iune", -1, 6],
  ["atoare", -1, 5],
  ["itoare", -1, 6],
  ["\u0103toare", -1, 5],
  ["icitate", -1, 4],
  ["abilitate", -1, 1],
  ["ibilitate", -1, 2],
  ["ivitate", -1, 3],
  ["icive", -1, 4],
  ["ative", -1, 5],
  ["itive", -1, 6],
  ["icali", -1, 4],
  ["atori", -1, 5],
  ["icatori", 18, 4],
  ["itori", -1, 6],
  ["\u0103tori", -1, 5],
  ["icitati", -1, 4],
  ["abilitati", -1, 1],
  ["ivitati", -1, 3],
  ["icivi", -1, 4],
  ["ativi", -1, 5],
  ["itivi", -1, 6],
  ["icit\u0103i", -1, 4],
  ["abilit\u0103i", -1, 1],
  ["ivit\u0103i", -1, 3],
  ["icit\u0103\u0163i", -1, 4],
  ["abilit\u0103\u0163i", -1, 1],
  ["ivit\u0103\u0163i", -1, 3],
  ["ical", -1, 4],
  ["ator", -1, 5],
  ["icator", 35, 4],
  ["itor", -1, 6],
  ["\u0103tor", -1, 5],
  ["iciv", -1, 4],
  ["ativ", -1, 5],
  ["itiv", -1, 6],
  ["ical\u0103", -1, 4],
  ["iciv\u0103", -1, 4],
  ["ativ\u0103", -1, 5],
  ["itiv\u0103", -1, 6],
];

const a_3: Rule[] = [
  ["ica", -1, 1],
  ["abila", -1, 1],
  ["ibila", -1, 1],
  ["oasa", -1, 1],
  ["ata", -1, 1],
  ["ita", -1, 1],
  ["anta", -1, 1],
  ["ista", -1, 3],
  ["uta", -1, 1],
  ["iva", -1, 1],
  ["ic", -1, 1],
  ["ice", -1, 1],
  ["abile", -1, 1],
  ["ibile", -1, 1],
  ["isme", -1, 3],
  ["iune", -1, 2],
  ["oase", -1, 1],
  ["ate", -1, 1],
  ["itate", 17, 1],
  ["ite", -1, 1],
  ["ante", -1, 1],
  ["iste", -1, 3],
  ["ute", -1, 1],
  ["ive", -1, 1],
  ["ici", -1, 1],
  ["abili", -1, 1],
  ["ibili", -1, 1],
  ["iuni", -1, 2],
  ["atori", -1, 1],
  ["osi", -1, 1],
  ["ati", -1, 1],
  ["itati", 30, 1],
  ["iti", -1, 1],
  ["anti", -1, 1],
  ["isti", -1, 3],
  ["uti", -1, 1],
  ["i\u015Fti", -1, 3],
  ["ivi", -1, 1],
  ["it\u0103i", -1, 1],
  ["o\u015Fi", -1, 1],
  ["it\u0103\u0163i", -1, 1],
  ["abil", -1, 1],
  ["ibil", -1, 1],
  ["ism", -1, 3],
  ["ator", -1, 1],
  ["os", -1, 1],
  ["at", -1, 1],
  ["it", -1, 1],
  ["ant", -1, 1],
  ["ist", -1, 3],
  ["ut", -1, 1],
  ["iv", -1, 1],
  ["ic\u0103", -1, 1],
  ["abil\u0103", -1, 1],
  ["ibil\u0103", -1, 1],
  ["oas\u0103", -1, 1],
  ["at\u0103", -1, 1],
  ["it\u0103", -1, 1],
  ["ant\u0103", -1, 1],
  ["ist\u0103", -1, 3],
  ["ut\u0103", -1, 1],
  ["iv\u0103", -1, 1],
];

const a_4: Rule[] = [
  ["ea", -1, 1],
  ["ia", -1, 1],
  ["esc", -1, 1],
  ["\u0103sc", -1, 1],
  ["ind", -1, 1],
  ["\u00E2nd", -1, 1],
  ["are", -1, 1],
  ["ere", -1, 1],
  ["ire", -1, 1],
  ["\u00E2re", -1, 1],
  ["se", -1, 2],
  ["ase", 10, 1],
  ["sese", 10, 2],
  ["ise", 10, 1],
  ["use", 10, 1],
  ["\u00E2se", 10, 1],
  ["e\u015Fte", -1, 1],
  ["\u0103\u015Fte", -1, 1],
  ["eze", -1, 1],
  ["ai", -1, 1],
  ["eai", 19, 1],
  ["iai", 19, 1],
  ["sei", -1, 2],
  ["e\u015Fti", -1, 1],
  ["\u0103\u015Fti", -1, 1],
  ["ui", -1, 1],
  ["ezi", -1, 1],
  ["\u00E2i", -1, 1],
  ["a\u015Fi", -1, 1],
  ["se\u015Fi", -1, 2],
  ["ase\u015Fi", 29, 1],
  ["sese\u015Fi", 29, 2],
  ["ise\u015Fi", 29, 1],
  ["use\u015Fi", 29, 1],
  ["\u00E2se\u015Fi", 29, 1],
  ["i\u015Fi", -1, 1],
  ["u\u015Fi", -1, 1],
  ["\u00E2\u015Fi", -1, 1],
  ["a\u0163i", -1, 2],
  ["ea\u0163i", 38, 1],
  ["ia\u0163i", 38, 1],
  ["e\u0163i", -1, 2],
  ["i\u0163i", -1, 2],
  ["\u00E2\u0163i", -1, 2],
  ["ar\u0103\u0163i", -1, 1],
  ["ser\u0103\u0163i", -1, 2],
  ["aser\u0103\u0163i", 45, 1],
  ["seser\u0103\u0163i", 45, 2],
  ["iser\u0103\u0163i", 45, 1],
  ["user\u0103\u0163i", 45, 1],
  ["\u00E2ser\u0103\u0163i", 45, 1],
  ["ir\u0103\u0163i", -1, 1],
  ["ur\u0103\u0163i", -1, 1],
  ["\u00E2r\u0103\u0163i", -1, 1],
  ["am", -1, 1],
  ["eam", 54, 1],
  ["iam", 54, 1],
  ["em", -1, 2],
  ["asem", 57, 1],
  ["sesem", 57, 2],
  ["isem", 57, 1],
  ["usem", 57, 1],
  ["\u00E2sem", 57, 1],
  ["im", -1, 2],
  ["\u00E2m", -1, 2],
  ["\u0103m", -1, 2],
  ["ar\u0103m", 65, 1],
  ["ser\u0103m", 65, 2],
  ["aser\u0103m", 67, 1],
  ["seser\u0103m", 67, 2],
  ["iser\u0103m", 67, 1],
  ["user\u0103m", 67, 1],
  ["\u00E2ser\u0103m", 67, 1],
  ["ir\u0103m", 65, 1],
  ["ur\u0103m", 65, 1],
  ["\u00E2r\u0103m", 65, 1],
  ["au", -1, 1],
  ["eau", 76, 1],
  ["iau", 76, 1],
  ["indu", -1, 1],
  ["\u00E2ndu", -1, 1],
  ["ez", -1, 1],
  ["easc\u0103", -1, 1],
  ["ar\u0103", -1, 1],
  ["ser\u0103", -1, 2],
  ["aser\u0103", 84, 1],
  ["seser\u0103", 84, 2],
  ["iser\u0103", 84, 1],
  ["user\u0103", 84, 1],
  ["\u00E2ser\u0103", 84, 1],
  ["ir\u0103", -1, 1],
  ["ur\u0103", -1, 1],
  ["\u00E2r\u0103", -1, 1],
  ["eaz\u0103", -1, 1],
];

const a_5: Rule[] = [
  ["a", -1, 1],
  ["e", -1, 1],
  ["ie", 1, 1],
  ["i", -1, 1],
  ["\u0103", -1, 1],
];

const g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4];

export class RomanianStemmer extends Stemmer {
  private B_standard_suffix_removed = false;
  private I_p2 = 0;
  private I_p1 = 0;
  private I_pV = 0;

  stopWords = undefined;

  r_prelude() {
    while (true) {
      const v_1 = this.cursor;
      lab0: {
        golab1:
        while (true) {
          const v_2 = this.cursor;
          lab2: {
            if (!this.in_grouping(g_v, 97, 259)) {
              break lab2;
            }
            this.bra = this.cursor;
            lab3: {
              const v_3 = this.cursor;
              lab4: {
                if (!this.eq_s("u")) {
                  break lab4;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(g_v, 97, 259)) {
                  break lab4;
                }
                if (!this.slice_from("U")) {
                  return false;
                }
                break lab3;
              }
              this.cursor = v_3;
              if (!this.eq_s("i")) {
                break lab2;
              }
              this.ket = this.cursor;
              if (!this.in_grouping(g_v, 97, 259)) {
                break lab2;
              }
              if (!this.slice_from("I")) {
                return false;
              }
            }
            this.cursor = v_2;
            break golab1;
          }
          this.cursor = v_2;
          if (this.cursor >= this.limit) {
            break lab0;
          }
          this.cursor++;
        }
        continue;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_mark_regions() {
    this.I_pV = this.limit;
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      lab1: {
        const v_2 = this.cursor;
        lab2: {
          if (!this.in_grouping(g_v, 97, 259)) {
            break lab2;
          }
          lab3: {
            const v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(g_v, 97, 259)) {
                break lab4;
              }
              golab5:
              while (true) {
                lab6: {
                  if (!this.in_grouping(g_v, 97, 259)) {
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
            if (!this.in_grouping(g_v, 97, 259)) {
              break lab2;
            }
            golab7:
            while (true) {
              lab8: {
                if (!this.out_grouping(g_v, 97, 259)) {
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
        if (!this.out_grouping(g_v, 97, 259)) {
          break lab0;
        }
        lab9: {
          const v_6 = this.cursor;
          lab10: {
            if (!this.out_grouping(g_v, 97, 259)) {
              break lab10;
            }
            golab11:
            while (true) {
              lab12: {
                if (!this.in_grouping(g_v, 97, 259)) {
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
          if (!this.in_grouping(g_v, 97, 259)) {
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
          if (!this.in_grouping(g_v, 97, 259)) {
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
          if (!this.out_grouping(g_v, 97, 259)) {
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
          if (!this.in_grouping(g_v, 97, 259)) {
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
          if (!this.out_grouping(g_v, 97, 259)) {
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

  r_postlude() {
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

  r_RV() {
    if (!(this.I_pV <= this.cursor)) {
      return false;
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

  r_step_0() {
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
      case 4:
        if (!this.slice_from("i")) {
          return false;
        }
        break;
      case 5:
        {
          const v_1 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b("ab")) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_1;
        }
        if (!this.slice_from("i")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("at")) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_from("a\u0163i")) {
          return false;
        }
        break;
    }
    return true;
  }

  r_combo_suffix() {
    const v_1 = this.limit - this.cursor;
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_2);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_from("abil")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("ibil")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("iv")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("ic")) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from("at")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("it")) {
          return false;
        }
        break;
    }
    this.B_standard_suffix_removed = true;
    this.cursor = this.limit - v_1;
    return true;
  }

  r_standard_suffix() {
    this.B_standard_suffix_removed = false;
    while (true) {
      const v_1 = this.limit - this.cursor;
      lab0: {
        if (!this.r_combo_suffix()) {
          break lab0;
        }
        continue;
      }
      this.cursor = this.limit - v_1;
      break;
    }
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_3);
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
        if (!this.eq_s_b("\u0163")) {
          return false;
        }
        this.bra = this.cursor;
        if (!this.slice_from("t")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("ist")) {
          return false;
        }
        break;
    }
    this.B_standard_suffix_removed = true;
    return true;
  }

  r_verb_suffix() {
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_pV;
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_4);
    if (among_var == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        lab0: {
          const v_3 = this.limit - this.cursor;
          lab1: {
            if (!this.out_grouping_b(g_v, 97, 259)) {
              break lab1;
            }
            break lab0;
          }
          this.cursor = this.limit - v_3;
          if (!this.eq_s_b("u")) {
            this.limit_backward = v_2;
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
    this.limit_backward = v_2;
    return true;
  }

  r_vowel_suffix() {
    this.ket = this.cursor;
    if (this.find_among_b(a_5) == 0) {
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

  stemHelper() {
    const v_1 = this.cursor;
    this.r_prelude();
    this.cursor = v_1;
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_3 = this.limit - this.cursor;
    this.r_step_0();
    this.cursor = this.limit - v_3;
    const v_4 = this.limit - this.cursor;
    this.r_standard_suffix();
    this.cursor = this.limit - v_4;
    const v_5 = this.limit - this.cursor;
    lab0: {
      lab1: {
        const v_6 = this.limit - this.cursor;
        lab2: {
          if (!this.B_standard_suffix_removed) {
            break lab2;
          }
          break lab1;
        }
        this.cursor = this.limit - v_6;
        if (!this.r_verb_suffix()) {
          break lab0;
        }
      }
    }
    this.cursor = this.limit - v_5;
    const v_7 = this.limit - this.cursor;
    this.r_vowel_suffix();
    this.cursor = this.limit - v_7;
    this.cursor = this.limit_backward;
    const v_8 = this.cursor;
    this.r_postlude();
    this.cursor = v_8;
    return true;
  }
}
