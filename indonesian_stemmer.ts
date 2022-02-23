import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["kah", -1, 1],
  ["lah", -1, 1],
  ["pun", -1, 1],
];

const g_vowel = [17, 65, 16];

const a_1: Rule[] = [
  ["nya", -1, 1],
  ["ku", -1, 1],
  ["mu", -1, 1],
];

export class IndonesianStemmer extends Stemmer {
  stopWords = undefined;

  private I_prefix = 0;
  private I_measure = 0;

  r_remove_particle() {
    this.ket = this.cursor;
    if (this.find_among_b(a_0) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.I_measure -= 1;
    return true;
  }

  r_remove_possessive_pronoun() {
    this.ket = this.cursor;
    if (this.find_among_b(a_1) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.I_measure -= 1;
    return true;
  }

  r_SUFFIX_KAN_OK() {
    if (!(this.I_prefix != 3)) {
      return false;
    }
    if (!(this.I_prefix != 2)) {
      return false;
    }
    return true;
  }

  r_SUFFIX_AN_OK() {
    if (!(this.I_prefix != 1)) {
      return false;
    }
    return true;
  }

  r_SUFFIX_I_OK() {
    if (!(this.I_prefix <= 2)) {
      return false;
    }
    {
      const v_1 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("s")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_1;
    }
    return true;
  }

  r_remove_suffix() {
    this.ket = this.cursor;
    if (this.find_among_b(this.a_2) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.I_measure -= 1;
    return true;
  }

  r_VOWEL = () => {
    if (!this.in_grouping(g_vowel, 97, 117)) {
      return false;
    }
    return true;
  };

  r_KER = () => {
    if (!this.out_grouping(g_vowel, 97, 117)) {
      return false;
    }
    if (!this.eq_s("er")) {
      return false;
    }
    return true;
  };

  r_remove_first_order_prefix = () => {
    this.bra = this.cursor;
    const among_var = this.find_among(this.a_3);
    if (among_var == 0) {
      return false;
    }
    this.ket = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        this.I_prefix = 1;
        this.I_measure -= 1;
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        this.I_prefix = 3;
        this.I_measure -= 1;
        break;
      case 3:
        this.I_prefix = 1;
        if (!this.slice_from("s")) {
          return false;
        }
        this.I_measure -= 1;
        break;
      case 4:
        this.I_prefix = 3;
        if (!this.slice_from("s")) {
          return false;
        }
        this.I_measure -= 1;
        break;
      case 5:
        this.I_prefix = 1;
        this.I_measure -= 1;
        lab0: {
          const v_1 = this.cursor;
          lab1: {
            const v_2 = this.cursor;
            if (!this.in_grouping(g_vowel, 97, 117)) {
              break lab1;
            }
            this.cursor = v_2;
            if (!this.slice_from("p")) {
              return false;
            }
            break lab0;
          }
          this.cursor = v_1;
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
      case 6:
        this.I_prefix = 3;
        this.I_measure -= 1;
        lab2: {
          const v_3 = this.cursor;
          lab3: {
            const v_4 = this.cursor;
            if (!this.in_grouping(g_vowel, 97, 117)) {
              break lab3;
            }
            this.cursor = v_4;
            if (!this.slice_from("p")) {
              return false;
            }
            break lab2;
          }
          this.cursor = v_3;
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
    }
    return true;
  };

  r_remove_second_order_prefix = () => {
    this.bra = this.cursor;
    const among_var = this.find_among(this.a_4);
    if (among_var == 0) {
      return false;
    }
    this.ket = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        this.I_prefix = 2;
        this.I_measure -= 1;
        break;
      case 2:
        if (!this.slice_from("ajar")) {
          return false;
        }
        this.I_measure -= 1;
        break;
      case 3:
        if (!this.slice_del()) {
          return false;
        }
        this.I_prefix = 4;
        this.I_measure -= 1;
        break;
      case 4:
        if (!this.slice_from("ajar")) {
          return false;
        }
        this.I_prefix = 4;
        this.I_measure -= 1;
        break;
    }
    return true;
  };

  stemHelper() {
    this.I_measure = 0;
    const v_1 = this.cursor;
    while (true) {
      const v_2 = this.cursor;
      lab1: {
        golab2:
        while (true) {
          lab3: {
            if (!this.in_grouping(g_vowel, 97, 117)) {
              break lab3;
            }
            break golab2;
          }
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        this.I_measure += 1;
        continue;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    if (!(this.I_measure > 2)) {
      return false;
    }
    this.I_prefix = 0;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_4 = this.limit - this.cursor;
    this.r_remove_particle();
    this.cursor = this.limit - v_4;
    if (!(this.I_measure > 2)) {
      return false;
    }
    const v_5 = this.limit - this.cursor;
    this.r_remove_possessive_pronoun();
    this.cursor = this.limit - v_5;
    this.cursor = this.limit_backward;
    if (!(this.I_measure > 2)) {
      return false;
    }
    lab4: {
      const v_6 = this.cursor;
      lab5: {
        const v_7 = this.cursor;
        if (!this.r_remove_first_order_prefix()) {
          break lab5;
        }
        const v_8 = this.cursor;
        lab6: {
          const v_9 = this.cursor;
          if (!(this.I_measure > 2)) {
            break lab6;
          }
          this.limit_backward = this.cursor;
          this.cursor = this.limit;
          if (!this.r_remove_suffix()) {
            break lab6;
          }
          this.cursor = this.limit_backward;
          this.cursor = v_9;
          if (!(this.I_measure > 2)) {
            break lab6;
          }
          if (!this.r_remove_second_order_prefix()) {
            break lab6;
          }
        }
        this.cursor = v_8;
        this.cursor = v_7;
        break lab4;
      }
      this.cursor = v_6;
      const v_10 = this.cursor;
      this.r_remove_second_order_prefix();
      this.cursor = v_10;
      const v_11 = this.cursor;
      lab7: {
        if (!(this.I_measure > 2)) {
          break lab7;
        }
        this.limit_backward = this.cursor;
        this.cursor = this.limit;
        if (!this.r_remove_suffix()) {
          break lab7;
        }
        this.cursor = this.limit_backward;
      }
      this.cursor = v_11;
    }
    return true;
  }

  private readonly a_2: Rule[] = [
    ["i", -1, 1, this.r_SUFFIX_I_OK],
    ["an", -1, 1, this.r_SUFFIX_AN_OK],
    ["kan", 1, 1, this.r_SUFFIX_KAN_OK],
  ];

  private readonly a_3: Rule[] = [
    ["di", -1, 1],
    ["ke", -1, 2],
    ["me", -1, 1],
    ["mem", 2, 5],
    ["men", 2, 1],
    ["meng", 4, 1],
    ["meny", 4, 3, this.r_VOWEL],
    ["pem", -1, 6],
    ["pen", -1, 2],
    ["peng", 8, 2],
    ["peny", 8, 4, this.r_VOWEL],
    ["ter", -1, 1],
  ];

  private readonly a_4: Rule[] = [
    ["be", -1, 3, this.r_KER],
    ["belajar", 0, 4],
    ["ber", 0, 3],
    ["pe", -1, 1],
    ["pelajar", 3, 2],
    ["per", 3, 1],
  ];
}
