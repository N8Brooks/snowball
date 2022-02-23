import { FINNISH_STOP_WORDS } from "./finnish_stop_words.ts";
import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["pa", -1, 1],
  ["sti", -1, 2],
  ["kaan", -1, 1],
  ["han", -1, 1],
  ["kin", -1, 1],
  ["h\u00E4n", -1, 1],
  ["k\u00E4\u00E4n", -1, 1],
  ["ko", -1, 1],
  ["p\u00E4", -1, 1],
  ["k\u00F6", -1, 1],
];

const a_1: Rule[] = [
  ["lla", -1, -1],
  ["na", -1, -1],
  ["ssa", -1, -1],
  ["ta", -1, -1],
  ["lta", 3, -1],
  ["sta", 3, -1],
];

const a_2: Rule[] = [
  ["ll\u00E4", -1, -1],
  ["n\u00E4", -1, -1],
  ["ss\u00E4", -1, -1],
  ["t\u00E4", -1, -1],
  ["lt\u00E4", 3, -1],
  ["st\u00E4", 3, -1],
];

const a_3: Rule[] = [
  ["lle", -1, -1],
  ["ine", -1, -1],
];

const a_4: Rule[] = [
  ["nsa", -1, 3],
  ["mme", -1, 3],
  ["nne", -1, 3],
  ["ni", -1, 2],
  ["si", -1, 1],
  ["an", -1, 4],
  ["en", -1, 6],
  ["\u00E4n", -1, 5],
  ["ns\u00E4", -1, 3],
];

const a_5: Rule[] = [
  ["aa", -1, -1],
  ["ee", -1, -1],
  ["ii", -1, -1],
  ["oo", -1, -1],
  ["uu", -1, -1],
  ["\u00E4\u00E4", -1, -1],
  ["\u00F6\u00F6", -1, -1],
];

const a_7: Rule[] = [
  ["eja", -1, -1],
  ["mma", -1, 1],
  ["imma", 1, -1],
  ["mpa", -1, 1],
  ["impa", 3, -1],
  ["mmi", -1, 1],
  ["immi", 5, -1],
  ["mpi", -1, 1],
  ["impi", 7, -1],
  ["ej\u00E4", -1, -1],
  ["mm\u00E4", -1, 1],
  ["imm\u00E4", 10, -1],
  ["mp\u00E4", -1, 1],
  ["imp\u00E4", 12, -1],
];

const a_8: Rule[] = [
  ["i", -1, -1],
  ["j", -1, -1],
];

const a_9: Rule[] = [
  ["mma", -1, 1],
  ["imma", 0, -1],
];

const g_AEI = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8];

const g_C = [119, 223, 119, 1];

const g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

const g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

// deno-fmt-ignore
const g_particle_end = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

export class FinnishStemmer extends Stemmer {
  private B_ending_removed = false;
  private S_x = "";
  private I_p2 = 0;
  private I_p1 = 0;

  readonly stopWords = FINNISH_STOP_WORDS;

  r_mark_regions() {
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    golab0:
    while (true) {
      const v_1 = this.cursor;
      lab1: {
        if (!this.in_grouping(g_V1, 97, 246)) {
          break lab1;
        }
        this.cursor = v_1;
        break golab0;
      }
      this.cursor = v_1;
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    golab2:
    while (true) {
      lab3: {
        if (!this.out_grouping(g_V1, 97, 246)) {
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
    golab4:
    while (true) {
      const v_3 = this.cursor;
      lab5: {
        if (!this.in_grouping(g_V1, 97, 246)) {
          break lab5;
        }
        this.cursor = v_3;
        break golab4;
      }
      this.cursor = v_3;
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    golab6:
    while (true) {
      lab7: {
        if (!this.out_grouping(g_V1, 97, 246)) {
          break lab7;
        }
        break golab6;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    this.I_p2 = this.cursor;
    return true;
  }

  r_R2() {
    if (!(this.I_p2 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_particle_etc() {
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
        if (!this.in_grouping_b(g_particle_end, 97, 246)) {
          return false;
        }
        break;
      case 2:
        if (!this.r_R2()) {
          return false;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_possessive = () => {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_4);
    if (among_var == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    switch (among_var) {
      case 1:
        {
          const v_3 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b("k")) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_3;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        this.ket = this.cursor;
        if (!this.eq_s_b("kse")) {
          return false;
        }
        this.bra = this.cursor;
        if (!this.slice_from("ksi")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 4:
        if (this.find_among_b(a_1) == 0) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        if (this.find_among_b(a_2) == 0) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 6:
        if (this.find_among_b(a_3) == 0) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  };

  r_LONG = () => {
    if (this.find_among_b(a_5) == 0) {
      return false;
    }
    return true;
  };

  r_VI = () => {
    if (!this.eq_s_b("i")) {
      return false;
    }
    if (!this.in_grouping_b(g_V2, 97, 246)) {
      return false;
    }
    return true;
  };

  r_case_ending() {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(this.a_6);
    if (among_var == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    switch (among_var) {
      case 1:
        if (!this.eq_s_b("a")) {
          return false;
        }
        break;
      case 2:
        if (!this.eq_s_b("e")) {
          return false;
        }
        break;
      case 3:
        if (!this.eq_s_b("i")) {
          return false;
        }
        break;
      case 4:
        if (!this.eq_s_b("o")) {
          return false;
        }
        break;
      case 5:
        if (!this.eq_s_b("\u00E4")) {
          return false;
        }
        break;
      case 6:
        if (!this.eq_s_b("\u00F6")) {
          return false;
        }
        break;
      case 7: {
        const v_3 = this.limit - this.cursor;
        lab0: {
          const v_4 = this.limit - this.cursor;
          lab1: {
            const v_5 = this.limit - this.cursor;
            lab2: {
              if (!this.r_LONG()) {
                break lab2;
              }
              break lab1;
            }
            this.cursor = this.limit - v_5;
            if (!this.eq_s_b("ie")) {
              this.cursor = this.limit - v_3;
              break lab0;
            }
          }
          this.cursor = this.limit - v_4;
          if (this.cursor <= this.limit_backward) {
            this.cursor = this.limit - v_3;
            break lab0;
          }
          this.cursor--;
          this.bra = this.cursor;
        }
        break;
      }
      case 8:
        if (!this.in_grouping_b(g_V1, 97, 246)) {
          return false;
        }
        if (!this.in_grouping_b(g_C, 98, 122)) {
          return false;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    this.B_ending_removed = true;
    return true;
  }

  r_other_endings = () => {
    if (this.cursor < this.I_p2) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p2;
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_7);
    if (among_var == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    switch (among_var) {
      case 1:
        {
          const v_3 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b("po")) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_3;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  };

  r_i_plural() {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    if (this.find_among_b(a_8) == 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_t_plural() {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    if (!this.eq_s_b("t")) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    const v_3 = this.limit - this.cursor;
    if (!this.in_grouping_b(g_V1, 97, 246)) {
      this.limit_backward = v_2;
      return false;
    }
    this.cursor = this.limit - v_3;
    if (!this.slice_del()) {
      return false;
    }
    this.limit_backward = v_2;
    if (this.cursor < this.I_p2) {
      return false;
    }
    const v_5 = this.limit_backward;
    this.limit_backward = this.I_p2;
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_9);
    if (among_var == 0) {
      this.limit_backward = v_5;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_5;
    switch (among_var) {
      case 1:
        {
          const v_6 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b("po")) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_6;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_tidy = () => {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    const v_3 = this.limit - this.cursor;
    lab0: {
      const v_4 = this.limit - this.cursor;
      if (!this.r_LONG()) {
        break lab0;
      }
      this.cursor = this.limit - v_4;
      this.ket = this.cursor;
      if (this.cursor <= this.limit_backward) {
        break lab0;
      }
      this.cursor--;
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_3;
    const v_5 = this.limit - this.cursor;
    lab1: {
      this.ket = this.cursor;
      if (!this.in_grouping_b(g_AEI, 97, 228)) {
        break lab1;
      }
      this.bra = this.cursor;
      if (!this.in_grouping_b(g_C, 98, 122)) {
        break lab1;
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_5;
    const v_6 = this.limit - this.cursor;
    lab2: {
      this.ket = this.cursor;
      if (!this.eq_s_b("j")) {
        break lab2;
      }
      this.bra = this.cursor;
      lab3: {
        const v_7 = this.limit - this.cursor;
        lab4: {
          if (!this.eq_s_b("o")) {
            break lab4;
          }
          break lab3;
        }
        this.cursor = this.limit - v_7;
        if (!this.eq_s_b("u")) {
          break lab2;
        }
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_6;
    const v_8 = this.limit - this.cursor;
    lab5: {
      this.ket = this.cursor;
      if (!this.eq_s_b("o")) {
        break lab5;
      }
      this.bra = this.cursor;
      if (!this.eq_s_b("j")) {
        break lab5;
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_8;
    this.limit_backward = v_2;
    golab6:
    while (true) {
      const v_9 = this.limit - this.cursor;
      lab7: {
        if (!this.out_grouping_b(g_V1, 97, 246)) {
          break lab7;
        }
        this.cursor = this.limit - v_9;
        break golab6;
      }
      this.cursor = this.limit - v_9;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
    }
    this.ket = this.cursor;
    if (!this.in_grouping_b(g_C, 98, 122)) {
      return false;
    }
    this.bra = this.cursor;
    this.S_x = this.slice_to();
    if (this.S_x == "") {
      return false;
    }
    if (!this.eq_s_b(this.S_x)) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  };

  stemHelper() {
    const v_1 = this.cursor;
    this.r_mark_regions();
    this.cursor = v_1;
    this.B_ending_removed = false;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_2 = this.limit - this.cursor;
    this.r_particle_etc();
    this.cursor = this.limit - v_2;
    const v_3 = this.limit - this.cursor;
    this.r_possessive();
    this.cursor = this.limit - v_3;
    const v_4 = this.limit - this.cursor;
    this.r_case_ending();
    this.cursor = this.limit - v_4;
    const v_5 = this.limit - this.cursor;
    this.r_other_endings();
    this.cursor = this.limit - v_5;
    lab0: {
      lab1: {
        if (!this.B_ending_removed) {
          break lab1;
        }
        const v_7 = this.limit - this.cursor;
        this.r_i_plural();
        this.cursor = this.limit - v_7;
        break lab0;
      }
      const v_8 = this.limit - this.cursor;
      this.r_t_plural();
      this.cursor = this.limit - v_8;
    }
    const v_9 = this.limit - this.cursor;
    this.r_tidy();
    this.cursor = this.limit - v_9;
    this.cursor = this.limit_backward;
    return true;
  }

  private readonly a_6: Rule[] = [
    ["a", -1, 8],
    ["lla", 0, -1],
    ["na", 0, -1],
    ["ssa", 0, -1],
    ["ta", 0, -1],
    ["lta", 4, -1],
    ["sta", 4, -1],
    ["tta", 4, 2],
    ["lle", -1, -1],
    ["ine", -1, -1],
    ["ksi", -1, -1],
    ["n", -1, 7],
    ["han", 11, 1],
    ["den", 11, -1, this.r_VI],
    ["seen", 11, -1, this.r_LONG],
    ["hen", 11, 2],
    ["tten", 11, -1, this.r_VI],
    ["hin", 11, 3],
    ["siin", 11, -1, this.r_VI],
    ["hon", 11, 4],
    ["h\u00E4n", 11, 5],
    ["h\u00F6n", 11, 6],
    ["\u00E4", -1, 8],
    ["ll\u00E4", 22, -1],
    ["n\u00E4", 22, -1],
    ["ss\u00E4", 22, -1],
    ["t\u00E4", 22, -1],
    ["lt\u00E4", 26, -1],
    ["st\u00E4", 26, -1],
    ["tt\u00E4", 26, 2],
  ];
}
