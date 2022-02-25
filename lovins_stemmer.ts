import { ENGLISH_STOP_WORDS } from "./english_stop_words.ts";
import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["d", -1, -1],
  ["f", -1, -1],
  ["ph", -1, -1],
  ["th", -1, -1],
  ["l", -1, -1],
  ["er", -1, -1],
  ["or", -1, -1],
  ["es", -1, -1],
  ["t", -1, -1],
];

const a_2: Rule[] = [
  ["bb", -1, -1],
  ["dd", -1, -1],
  ["gg", -1, -1],
  ["ll", -1, -1],
  ["mm", -1, -1],
  ["nn", -1, -1],
  ["pp", -1, -1],
  ["rr", -1, -1],
  ["ss", -1, -1],
  ["tt", -1, -1],
];

const a_3: Rule[] = [
  ["uad", -1, 18],
  ["vad", -1, 19],
  ["cid", -1, 20],
  ["lid", -1, 21],
  ["erid", -1, 22],
  ["pand", -1, 23],
  ["end", -1, 24],
  ["ond", -1, 25],
  ["lud", -1, 26],
  ["rud", -1, 27],
  ["ul", -1, 9],
  ["her", -1, 28],
  ["metr", -1, 7],
  ["istr", -1, 6],
  ["urs", -1, 5],
  ["uct", -1, 2],
  ["et", -1, 32],
  ["mit", -1, 29],
  ["ent", -1, 30],
  ["umpt", -1, 3],
  ["rpt", -1, 4],
  ["ert", -1, 31],
  ["yt", -1, 33],
  ["iev", -1, 1],
  ["olv", -1, 8],
  ["ax", -1, 14],
  ["ex", -1, 15],
  ["bex", 26, 10],
  ["dex", 26, 11],
  ["pex", 26, 12],
  ["tex", 26, 13],
  ["ix", -1, 16],
  ["lux", -1, 17],
  ["yz", -1, 33],
];

/** Stemmer for the Lovins language */
export class LovinsStemmer extends Stemmer {
  readonly stopWords = ENGLISH_STOP_WORDS;

  r_A = () => {
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    return true;
  };

  r_B = () => {
    {
      const c1 = this.cursor - 3;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    return true;
  };

  r_C = () => {
    {
      const c1 = this.cursor - 4;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    return true;
  };

  r_D = () => {
    {
      const c1 = this.cursor - 5;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    return true;
  };

  r_E = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("e")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    return true;
  };

  r_F = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 3;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("e")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    return true;
  };

  r_G = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 3;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    if (!this.eq_s_b("f")) {
      return false;
    }
    return true;
  };

  r_H = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("t")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("ll")) {
        return false;
      }
    }
    return true;
  };

  r_I = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("o")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    {
      const v_3 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("e")) {
          break lab1;
        }
        return false;
      }
      this.cursor = this.limit - v_3;
    }
    return true;
  };

  r_J = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("a")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    {
      const v_3 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("e")) {
          break lab1;
        }
        return false;
      }
      this.cursor = this.limit - v_3;
    }
    return true;
  };

  r_K = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 3;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("l")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      lab2: {
        if (!this.eq_s_b("i")) {
          break lab2;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("e")) {
        return false;
      }
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      if (!this.eq_s_b("u")) {
        return false;
      }
    }
    return true;
  };

  r_L = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("u")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    {
      const v_3 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("x")) {
          break lab1;
        }
        return false;
      }
      this.cursor = this.limit - v_3;
    }
    {
      const v_4 = this.limit - this.cursor;
      lab2: {
        if (!this.eq_s_b("s")) {
          break lab2;
        }
        {
          const v_5 = this.limit - this.cursor;
          lab3: {
            if (!this.eq_s_b("o")) {
              break lab3;
            }
            break lab2;
          }
          this.cursor = this.limit - v_5;
        }
        return false;
      }
      this.cursor = this.limit - v_4;
    }
    return true;
  };

  r_M = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("a")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    {
      const v_3 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("c")) {
          break lab1;
        }
        return false;
      }
      this.cursor = this.limit - v_3;
    }
    {
      const v_4 = this.limit - this.cursor;
      lab2: {
        if (!this.eq_s_b("e")) {
          break lab2;
        }
        return false;
      }
      this.cursor = this.limit - v_4;
    }
    {
      const v_5 = this.limit - this.cursor;
      lab3: {
        if (!this.eq_s_b("m")) {
          break lab3;
        }
        return false;
      }
      this.cursor = this.limit - v_5;
    }
    return true;
  };

  r_N = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 3;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const c2 = this.cursor - 2;
      if (c2 < this.limit_backward) {
        return false;
      }
      this.cursor = c2;
    }
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        {
          const v_3 = this.limit - this.cursor;
          lab2: {
            if (!this.eq_s_b("s")) {
              break lab2;
            }
            break lab1;
          }
          this.cursor = this.limit - v_3;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      {
        const c3 = this.cursor - 2;
        if (c3 < this.limit_backward) {
          return false;
        }
        this.cursor = c3;
      }
    }
    return true;
  };

  r_O = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("l")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("i")) {
        return false;
      }
    }
    return true;
  };

  r_P = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("c")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    return true;
  };

  r_Q = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    const v_2 = this.limit - this.cursor;
    {
      const c2 = this.cursor - 3;
      if (c2 < this.limit_backward) {
        return false;
      }
      this.cursor = c2;
    }
    this.cursor = this.limit - v_2;
    {
      const v_3 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("l")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_3;
    }
    {
      const v_4 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("n")) {
          break lab1;
        }
        return false;
      }
      this.cursor = this.limit - v_4;
    }
    return true;
  };

  r_R = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("n")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("r")) {
        return false;
      }
    }
    return true;
  };

  r_S = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("dr")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("t")) {
        return false;
      }
      {
        const v_3 = this.limit - this.cursor;
        lab2: {
          if (!this.eq_s_b("t")) {
            break lab2;
          }
          return false;
        }
        this.cursor = this.limit - v_3;
      }
    }
    return true;
  };

  r_T = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("s")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("t")) {
        return false;
      }
      {
        const v_3 = this.limit - this.cursor;
        lab2: {
          if (!this.eq_s_b("o")) {
            break lab2;
          }
          return false;
        }
        this.cursor = this.limit - v_3;
      }
    }
    return true;
  };

  r_U = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("l")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      lab2: {
        if (!this.eq_s_b("m")) {
          break lab2;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      lab3: {
        if (!this.eq_s_b("n")) {
          break lab3;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("r")) {
        return false;
      }
    }
    return true;
  };

  r_V = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    if (!this.eq_s_b("c")) {
      return false;
    }
    return true;
  };

  r_W = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("s")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    {
      const v_3 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("u")) {
          break lab1;
        }
        return false;
      }
      this.cursor = this.limit - v_3;
    }
    return true;
  };

  r_X = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("l")) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      lab2: {
        if (!this.eq_s_b("i")) {
          break lab2;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b("e")) {
        return false;
      }
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      if (!this.eq_s_b("u")) {
        return false;
      }
    }
    return true;
  };

  r_Y = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    if (!this.eq_s_b("in")) {
      return false;
    }
    return true;
  };

  r_Z = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("f")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    return true;
  };

  r_AA = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    if (this.find_among_b(a_0) == 0) {
      return false;
    }
    return true;
  };

  r_BB = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 3;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    {
      const v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b("met")) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    {
      const v_3 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b("ryst")) {
          break lab1;
        }
        return false;
      }
      this.cursor = this.limit - v_3;
    }
    return true;
  };

  r_CC = () => {
    const v_1 = this.limit - this.cursor;
    {
      const c1 = this.cursor - 2;
      if (c1 < this.limit_backward) {
        return false;
      }
      this.cursor = c1;
    }
    this.cursor = this.limit - v_1;
    if (!this.eq_s_b("l")) {
      return false;
    }
    return true;
  };

  r_endings = () => {
    this.ket = this.cursor;
    if (this.find_among_b(this.a_1) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  };

  r_undouble = () => {
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
  };

  r_respell = () => {
    this.ket = this.cursor;
    const among_var = this.find_among_b(a_3);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_from("ief")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("uc")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("um")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("rb")) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from("ur")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("ister")) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_from("meter")) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_from("olut")) {
          return false;
        }
        break;
      case 9:
        {
          const v_1 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b("a")) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_1;
        }
        {
          const v_2 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b("i")) {
              break lab1;
            }
            return false;
          }
          this.cursor = this.limit - v_2;
        }
        {
          const v_3 = this.limit - this.cursor;
          lab2: {
            if (!this.eq_s_b("o")) {
              break lab2;
            }
            return false;
          }
          this.cursor = this.limit - v_3;
        }
        if (!this.slice_from("l")) {
          return false;
        }
        break;
      case 10:
        if (!this.slice_from("bic")) {
          return false;
        }
        break;
      case 11:
        if (!this.slice_from("dic")) {
          return false;
        }
        break;
      case 12:
        if (!this.slice_from("pic")) {
          return false;
        }
        break;
      case 13:
        if (!this.slice_from("tic")) {
          return false;
        }
        break;
      case 14:
        if (!this.slice_from("ac")) {
          return false;
        }
        break;
      case 15:
        if (!this.slice_from("ec")) {
          return false;
        }
        break;
      case 16:
        if (!this.slice_from("ic")) {
          return false;
        }
        break;
      case 17:
        if (!this.slice_from("luc")) {
          return false;
        }
        break;
      case 18:
        if (!this.slice_from("uas")) {
          return false;
        }
        break;
      case 19:
        if (!this.slice_from("vas")) {
          return false;
        }
        break;
      case 20:
        if (!this.slice_from("cis")) {
          return false;
        }
        break;
      case 21:
        if (!this.slice_from("lis")) {
          return false;
        }
        break;
      case 22:
        if (!this.slice_from("eris")) {
          return false;
        }
        break;
      case 23:
        if (!this.slice_from("pans")) {
          return false;
        }
        break;
      case 24:
        {
          const v_4 = this.limit - this.cursor;
          lab3: {
            if (!this.eq_s_b("s")) {
              break lab3;
            }
            return false;
          }
          this.cursor = this.limit - v_4;
        }
        if (!this.slice_from("ens")) {
          return false;
        }
        break;
      case 25:
        if (!this.slice_from("ons")) {
          return false;
        }
        break;
      case 26:
        if (!this.slice_from("lus")) {
          return false;
        }
        break;
      case 27:
        if (!this.slice_from("rus")) {
          return false;
        }
        break;
      case 28:
        {
          const v_5 = this.limit - this.cursor;
          lab4: {
            if (!this.eq_s_b("p")) {
              break lab4;
            }
            return false;
          }
          this.cursor = this.limit - v_5;
        }
        {
          const v_6 = this.limit - this.cursor;
          lab5: {
            if (!this.eq_s_b("t")) {
              break lab5;
            }
            return false;
          }
          this.cursor = this.limit - v_6;
        }
        if (!this.slice_from("hes")) {
          return false;
        }
        break;
      case 29:
        if (!this.slice_from("mis")) {
          return false;
        }
        break;
      case 30:
        {
          const v_7 = this.limit - this.cursor;
          lab6: {
            if (!this.eq_s_b("m")) {
              break lab6;
            }
            return false;
          }
          this.cursor = this.limit - v_7;
        }
        if (!this.slice_from("ens")) {
          return false;
        }
        break;
      case 31:
        if (!this.slice_from("ers")) {
          return false;
        }
        break;
      case 32:
        {
          const v_8 = this.limit - this.cursor;
          lab7: {
            if (!this.eq_s_b("n")) {
              break lab7;
            }
            return false;
          }
          this.cursor = this.limit - v_8;
        }
        if (!this.slice_from("es")) {
          return false;
        }
        break;
      case 33:
        if (!this.slice_from("ys")) {
          return false;
        }
        break;
    }
    return true;
  };

  _stemHelper() {
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_1 = this.limit - this.cursor;
    this.r_endings();
    this.cursor = this.limit - v_1;
    const v_2 = this.limit - this.cursor;
    this.r_undouble();
    this.cursor = this.limit - v_2;
    const v_3 = this.limit - this.cursor;
    this.r_respell();
    this.cursor = this.limit - v_3;
    this.cursor = this.limit_backward;
    return true;
  }

  private readonly a_1: Rule[] = [
    ["s'", -1, 1, this.r_A],
    ["a", -1, 1, this.r_A],
    ["ia", 1, 1, this.r_A],
    ["ata", 1, 1, this.r_A],
    ["ic", -1, 1, this.r_A],
    ["aic", 4, 1, this.r_A],
    ["allic", 4, 1, this.r_BB],
    ["aric", 4, 1, this.r_A],
    ["atic", 4, 1, this.r_B],
    ["itic", 4, 1, this.r_H],
    ["antic", 4, 1, this.r_C],
    ["istic", 4, 1, this.r_A],
    ["alistic", 11, 1, this.r_B],
    ["aristic", 11, 1, this.r_A],
    ["ivistic", 11, 1, this.r_A],
    ["ed", -1, 1, this.r_E],
    ["anced", 15, 1, this.r_B],
    ["enced", 15, 1, this.r_A],
    ["ished", 15, 1, this.r_A],
    ["ied", 15, 1, this.r_A],
    ["ened", 15, 1, this.r_E],
    ["ioned", 15, 1, this.r_A],
    ["ated", 15, 1, this.r_I],
    ["ented", 15, 1, this.r_C],
    ["ized", 15, 1, this.r_F],
    ["arized", 24, 1, this.r_A],
    ["oid", -1, 1, this.r_A],
    ["aroid", 26, 1, this.r_A],
    ["hood", -1, 1, this.r_A],
    ["ehood", 28, 1, this.r_A],
    ["ihood", 28, 1, this.r_A],
    ["elihood", 30, 1, this.r_E],
    ["ward", -1, 1, this.r_A],
    ["e", -1, 1, this.r_A],
    ["ae", 33, 1, this.r_A],
    ["ance", 33, 1, this.r_B],
    ["icance", 35, 1, this.r_A],
    ["ence", 33, 1, this.r_A],
    ["ide", 33, 1, this.r_L],
    ["icide", 38, 1, this.r_A],
    ["otide", 38, 1, this.r_A],
    ["age", 33, 1, this.r_B],
    ["able", 33, 1, this.r_A],
    ["atable", 42, 1, this.r_A],
    ["izable", 42, 1, this.r_E],
    ["arizable", 44, 1, this.r_A],
    ["ible", 33, 1, this.r_A],
    ["encible", 46, 1, this.r_A],
    ["ene", 33, 1, this.r_E],
    ["ine", 33, 1, this.r_M],
    ["idine", 49, 1, this.r_I],
    ["one", 33, 1, this.r_R],
    ["ature", 33, 1, this.r_E],
    ["eature", 52, 1, this.r_Z],
    ["ese", 33, 1, this.r_A],
    ["wise", 33, 1, this.r_A],
    ["ate", 33, 1, this.r_A],
    ["entiate", 56, 1, this.r_A],
    ["inate", 56, 1, this.r_A],
    ["ionate", 56, 1, this.r_D],
    ["ite", 33, 1, this.r_AA],
    ["ive", 33, 1, this.r_A],
    ["ative", 61, 1, this.r_A],
    ["ize", 33, 1, this.r_F],
    ["alize", 63, 1, this.r_A],
    ["icalize", 64, 1, this.r_A],
    ["ialize", 64, 1, this.r_A],
    ["entialize", 66, 1, this.r_A],
    ["ionalize", 64, 1, this.r_A],
    ["arize", 63, 1, this.r_A],
    ["ing", -1, 1, this.r_N],
    ["ancing", 70, 1, this.r_B],
    ["encing", 70, 1, this.r_A],
    ["aging", 70, 1, this.r_B],
    ["ening", 70, 1, this.r_E],
    ["ioning", 70, 1, this.r_A],
    ["ating", 70, 1, this.r_I],
    ["enting", 70, 1, this.r_C],
    ["ying", 70, 1, this.r_B],
    ["izing", 70, 1, this.r_F],
    ["arizing", 79, 1, this.r_A],
    ["ish", -1, 1, this.r_C],
    ["yish", 81, 1, this.r_A],
    ["i", -1, 1, this.r_A],
    ["al", -1, 1, this.r_BB],
    ["ical", 84, 1, this.r_A],
    ["aical", 85, 1, this.r_A],
    ["istical", 85, 1, this.r_A],
    ["oidal", 84, 1, this.r_A],
    ["eal", 84, 1, this.r_Y],
    ["ial", 84, 1, this.r_A],
    ["ancial", 90, 1, this.r_A],
    ["arial", 90, 1, this.r_A],
    ["ential", 90, 1, this.r_A],
    ["ional", 84, 1, this.r_A],
    ["ational", 94, 1, this.r_B],
    ["izational", 95, 1, this.r_A],
    ["ental", 84, 1, this.r_A],
    ["ful", -1, 1, this.r_A],
    ["eful", 98, 1, this.r_A],
    ["iful", 98, 1, this.r_A],
    ["yl", -1, 1, this.r_R],
    ["ism", -1, 1, this.r_B],
    ["icism", 102, 1, this.r_A],
    ["oidism", 102, 1, this.r_A],
    ["alism", 102, 1, this.r_B],
    ["icalism", 105, 1, this.r_A],
    ["ionalism", 105, 1, this.r_A],
    ["inism", 102, 1, this.r_J],
    ["ativism", 102, 1, this.r_A],
    ["um", -1, 1, this.r_U],
    ["ium", 110, 1, this.r_A],
    ["ian", -1, 1, this.r_A],
    ["ician", 112, 1, this.r_A],
    ["en", -1, 1, this.r_F],
    ["ogen", 114, 1, this.r_A],
    ["on", -1, 1, this.r_S],
    ["ion", 116, 1, this.r_Q],
    ["ation", 117, 1, this.r_B],
    ["ication", 118, 1, this.r_G],
    ["entiation", 118, 1, this.r_A],
    ["ination", 118, 1, this.r_A],
    ["isation", 118, 1, this.r_A],
    ["arisation", 122, 1, this.r_A],
    ["entation", 118, 1, this.r_A],
    ["ization", 118, 1, this.r_F],
    ["arization", 125, 1, this.r_A],
    ["action", 117, 1, this.r_G],
    ["o", -1, 1, this.r_A],
    ["ar", -1, 1, this.r_X],
    ["ear", 129, 1, this.r_Y],
    ["ier", -1, 1, this.r_A],
    ["ariser", -1, 1, this.r_A],
    ["izer", -1, 1, this.r_F],
    ["arizer", 133, 1, this.r_A],
    ["or", -1, 1, this.r_T],
    ["ator", 135, 1, this.r_A],
    ["s", -1, 1, this.r_W],
    ["'s", 137, 1, this.r_A],
    ["as", 137, 1, this.r_B],
    ["ics", 137, 1, this.r_A],
    ["istics", 140, 1, this.r_A],
    ["es", 137, 1, this.r_E],
    ["ances", 142, 1, this.r_B],
    ["ences", 142, 1, this.r_A],
    ["ides", 142, 1, this.r_L],
    ["oides", 145, 1, this.r_A],
    ["ages", 142, 1, this.r_B],
    ["ies", 142, 1, this.r_P],
    ["acies", 148, 1, this.r_A],
    ["ancies", 148, 1, this.r_A],
    ["encies", 148, 1, this.r_A],
    ["aries", 148, 1, this.r_A],
    ["ities", 148, 1, this.r_A],
    ["alities", 153, 1, this.r_A],
    ["ivities", 153, 1, this.r_A],
    ["ines", 142, 1, this.r_M],
    ["nesses", 142, 1, this.r_A],
    ["ates", 142, 1, this.r_A],
    ["atives", 142, 1, this.r_A],
    ["ings", 137, 1, this.r_N],
    ["is", 137, 1, this.r_A],
    ["als", 137, 1, this.r_BB],
    ["ials", 162, 1, this.r_A],
    ["entials", 163, 1, this.r_A],
    ["ionals", 162, 1, this.r_A],
    ["isms", 137, 1, this.r_B],
    ["ians", 137, 1, this.r_A],
    ["icians", 167, 1, this.r_A],
    ["ions", 137, 1, this.r_B],
    ["ations", 169, 1, this.r_B],
    ["arisations", 170, 1, this.r_A],
    ["entations", 170, 1, this.r_A],
    ["izations", 170, 1, this.r_A],
    ["arizations", 173, 1, this.r_A],
    ["ars", 137, 1, this.r_O],
    ["iers", 137, 1, this.r_A],
    ["izers", 137, 1, this.r_F],
    ["ators", 137, 1, this.r_A],
    ["less", 137, 1, this.r_A],
    ["eless", 179, 1, this.r_A],
    ["ness", 137, 1, this.r_A],
    ["eness", 181, 1, this.r_E],
    ["ableness", 182, 1, this.r_A],
    ["eableness", 183, 1, this.r_E],
    ["ibleness", 182, 1, this.r_A],
    ["ateness", 182, 1, this.r_A],
    ["iteness", 182, 1, this.r_A],
    ["iveness", 182, 1, this.r_A],
    ["ativeness", 188, 1, this.r_A],
    ["ingness", 181, 1, this.r_A],
    ["ishness", 181, 1, this.r_A],
    ["iness", 181, 1, this.r_A],
    ["ariness", 192, 1, this.r_E],
    ["alness", 181, 1, this.r_A],
    ["icalness", 194, 1, this.r_A],
    ["antialness", 194, 1, this.r_A],
    ["entialness", 194, 1, this.r_A],
    ["ionalness", 194, 1, this.r_A],
    ["fulness", 181, 1, this.r_A],
    ["lessness", 181, 1, this.r_A],
    ["ousness", 181, 1, this.r_A],
    ["eousness", 201, 1, this.r_A],
    ["iousness", 201, 1, this.r_A],
    ["itousness", 201, 1, this.r_A],
    ["entness", 181, 1, this.r_A],
    ["ants", 137, 1, this.r_B],
    ["ists", 137, 1, this.r_A],
    ["icists", 207, 1, this.r_A],
    ["us", 137, 1, this.r_V],
    ["ous", 209, 1, this.r_A],
    ["eous", 210, 1, this.r_A],
    ["aceous", 211, 1, this.r_A],
    ["antaneous", 211, 1, this.r_A],
    ["ious", 210, 1, this.r_A],
    ["acious", 214, 1, this.r_B],
    ["itous", 210, 1, this.r_A],
    ["ant", -1, 1, this.r_B],
    ["icant", 217, 1, this.r_A],
    ["ent", -1, 1, this.r_C],
    ["ement", 219, 1, this.r_A],
    ["izement", 220, 1, this.r_A],
    ["ist", -1, 1, this.r_A],
    ["icist", 222, 1, this.r_A],
    ["alist", 222, 1, this.r_A],
    ["icalist", 224, 1, this.r_A],
    ["ialist", 224, 1, this.r_A],
    ["ionist", 222, 1, this.r_A],
    ["entist", 222, 1, this.r_A],
    ["y", -1, 1, this.r_B],
    ["acy", 229, 1, this.r_A],
    ["ancy", 229, 1, this.r_B],
    ["ency", 229, 1, this.r_A],
    ["ly", 229, 1, this.r_B],
    ["ealy", 233, 1, this.r_Y],
    ["ably", 233, 1, this.r_A],
    ["ibly", 233, 1, this.r_A],
    ["edly", 233, 1, this.r_E],
    ["iedly", 237, 1, this.r_A],
    ["ely", 233, 1, this.r_E],
    ["ately", 239, 1, this.r_A],
    ["ively", 239, 1, this.r_A],
    ["atively", 241, 1, this.r_A],
    ["ingly", 233, 1, this.r_B],
    ["atingly", 243, 1, this.r_A],
    ["ily", 233, 1, this.r_A],
    ["lily", 245, 1, this.r_A],
    ["arily", 245, 1, this.r_A],
    ["ally", 233, 1, this.r_B],
    ["ically", 248, 1, this.r_A],
    ["aically", 249, 1, this.r_A],
    ["allically", 249, 1, this.r_C],
    ["istically", 249, 1, this.r_A],
    ["alistically", 252, 1, this.r_B],
    ["oidally", 248, 1, this.r_A],
    ["ially", 248, 1, this.r_A],
    ["entially", 255, 1, this.r_A],
    ["ionally", 248, 1, this.r_A],
    ["ationally", 257, 1, this.r_B],
    ["izationally", 258, 1, this.r_B],
    ["entally", 248, 1, this.r_A],
    ["fully", 233, 1, this.r_A],
    ["efully", 261, 1, this.r_A],
    ["ifully", 261, 1, this.r_A],
    ["enly", 233, 1, this.r_E],
    ["arly", 233, 1, this.r_K],
    ["early", 265, 1, this.r_Y],
    ["lessly", 233, 1, this.r_A],
    ["ously", 233, 1, this.r_A],
    ["eously", 268, 1, this.r_A],
    ["iously", 268, 1, this.r_A],
    ["ently", 233, 1, this.r_A],
    ["ary", 229, 1, this.r_F],
    ["ery", 229, 1, this.r_E],
    ["icianry", 229, 1, this.r_A],
    ["atory", 229, 1, this.r_A],
    ["ity", 229, 1, this.r_A],
    ["acity", 276, 1, this.r_A],
    ["icity", 276, 1, this.r_A],
    ["eity", 276, 1, this.r_A],
    ["ality", 276, 1, this.r_A],
    ["icality", 280, 1, this.r_A],
    ["iality", 280, 1, this.r_A],
    ["antiality", 282, 1, this.r_A],
    ["entiality", 282, 1, this.r_A],
    ["ionality", 280, 1, this.r_A],
    ["elity", 276, 1, this.r_A],
    ["ability", 276, 1, this.r_A],
    ["izability", 287, 1, this.r_A],
    ["arizability", 288, 1, this.r_A],
    ["ibility", 276, 1, this.r_A],
    ["inity", 276, 1, this.r_CC],
    ["arity", 276, 1, this.r_B],
    ["ivity", 276, 1, this.r_A],
  ];
}
