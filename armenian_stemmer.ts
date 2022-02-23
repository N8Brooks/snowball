import { Rule, Stemmer } from "./_stemmer.ts";

const a_0: Rule[] = [
  ["\u0580\u0578\u0580\u0564", -1, 1],
  ["\u0565\u0580\u0578\u0580\u0564", 0, 1],
  ["\u0561\u056C\u056B", -1, 1],
  ["\u0561\u056F\u056B", -1, 1],
  ["\u0578\u0580\u0561\u056F", -1, 1],
  ["\u0565\u0572", -1, 1],
  ["\u0561\u056F\u0561\u0576", -1, 1],
  ["\u0561\u0580\u0561\u0576", -1, 1],
  ["\u0565\u0576", -1, 1],
  ["\u0565\u056F\u0565\u0576", 8, 1],
  ["\u0565\u0580\u0565\u0576", 8, 1],
  ["\u0578\u0580\u0567\u0576", -1, 1],
  ["\u056B\u0576", -1, 1],
  ["\u0563\u056B\u0576", 12, 1],
  ["\u0578\u057E\u056B\u0576", 12, 1],
  ["\u056C\u0561\u0575\u0576", -1, 1],
  ["\u057E\u0578\u0582\u0576", -1, 1],
  ["\u057A\u0565\u057D", -1, 1],
  ["\u056B\u057E", -1, 1],
  ["\u0561\u057F", -1, 1],
  ["\u0561\u057E\u0565\u057F", -1, 1],
  ["\u056F\u0578\u057F", -1, 1],
  ["\u0562\u0561\u0580", -1, 1],
];

const a_1: Rule[] = [
  ["\u0561", -1, 1],
  ["\u0561\u0581\u0561", 0, 1],
  ["\u0565\u0581\u0561", 0, 1],
  ["\u057E\u0565", -1, 1],
  ["\u0561\u0581\u0580\u056B", -1, 1],
  ["\u0561\u0581\u056B", -1, 1],
  ["\u0565\u0581\u056B", -1, 1],
  ["\u057E\u0565\u0581\u056B", 6, 1],
  ["\u0561\u056C", -1, 1],
  ["\u0568\u0561\u056C", 8, 1],
  ["\u0561\u0576\u0561\u056C", 8, 1],
  ["\u0565\u0576\u0561\u056C", 8, 1],
  ["\u0561\u0581\u0576\u0561\u056C", 8, 1],
  ["\u0565\u056C", -1, 1],
  ["\u0568\u0565\u056C", 13, 1],
  ["\u0576\u0565\u056C", 13, 1],
  ["\u0581\u0576\u0565\u056C", 15, 1],
  ["\u0565\u0581\u0576\u0565\u056C", 16, 1],
  ["\u0579\u0565\u056C", 13, 1],
  ["\u057E\u0565\u056C", 13, 1],
  ["\u0561\u0581\u057E\u0565\u056C", 19, 1],
  ["\u0565\u0581\u057E\u0565\u056C", 19, 1],
  ["\u057F\u0565\u056C", 13, 1],
  ["\u0561\u057F\u0565\u056C", 22, 1],
  ["\u0578\u057F\u0565\u056C", 22, 1],
  ["\u056F\u0578\u057F\u0565\u056C", 24, 1],
  ["\u057E\u0561\u056E", -1, 1],
  ["\u0578\u0582\u0574", -1, 1],
  ["\u057E\u0578\u0582\u0574", 27, 1],
  ["\u0561\u0576", -1, 1],
  ["\u0581\u0561\u0576", 29, 1],
  ["\u0561\u0581\u0561\u0576", 30, 1],
  ["\u0561\u0581\u0580\u056B\u0576", -1, 1],
  ["\u0561\u0581\u056B\u0576", -1, 1],
  ["\u0565\u0581\u056B\u0576", -1, 1],
  ["\u057E\u0565\u0581\u056B\u0576", 34, 1],
  ["\u0561\u056C\u056B\u057D", -1, 1],
  ["\u0565\u056C\u056B\u057D", -1, 1],
  ["\u0561\u057E", -1, 1],
  ["\u0561\u0581\u0561\u057E", 38, 1],
  ["\u0565\u0581\u0561\u057E", 38, 1],
  ["\u0561\u056C\u0578\u057E", -1, 1],
  ["\u0565\u056C\u0578\u057E", -1, 1],
  ["\u0561\u0580", -1, 1],
  ["\u0561\u0581\u0561\u0580", 43, 1],
  ["\u0565\u0581\u0561\u0580", 43, 1],
  ["\u0561\u0581\u0580\u056B\u0580", -1, 1],
  ["\u0561\u0581\u056B\u0580", -1, 1],
  ["\u0565\u0581\u056B\u0580", -1, 1],
  ["\u057E\u0565\u0581\u056B\u0580", 48, 1],
  ["\u0561\u0581", -1, 1],
  ["\u0565\u0581", -1, 1],
  ["\u0561\u0581\u0580\u0565\u0581", 51, 1],
  ["\u0561\u056C\u0578\u0582\u0581", -1, 1],
  ["\u0565\u056C\u0578\u0582\u0581", -1, 1],
  ["\u0561\u056C\u0578\u0582", -1, 1],
  ["\u0565\u056C\u0578\u0582", -1, 1],
  ["\u0561\u0584", -1, 1],
  ["\u0581\u0561\u0584", 57, 1],
  ["\u0561\u0581\u0561\u0584", 58, 1],
  ["\u0561\u0581\u0580\u056B\u0584", -1, 1],
  ["\u0561\u0581\u056B\u0584", -1, 1],
  ["\u0565\u0581\u056B\u0584", -1, 1],
  ["\u057E\u0565\u0581\u056B\u0584", 62, 1],
  ["\u0561\u0576\u0584", -1, 1],
  ["\u0581\u0561\u0576\u0584", 64, 1],
  ["\u0561\u0581\u0561\u0576\u0584", 65, 1],
  ["\u0561\u0581\u0580\u056B\u0576\u0584", -1, 1],
  ["\u0561\u0581\u056B\u0576\u0584", -1, 1],
  ["\u0565\u0581\u056B\u0576\u0584", -1, 1],
  ["\u057E\u0565\u0581\u056B\u0576\u0584", 69, 1],
];

const a_2: Rule[] = [
  ["\u0578\u0580\u0564", -1, 1],
  ["\u0578\u0582\u0575\u0569", -1, 1],
  ["\u0578\u0582\u0570\u056B", -1, 1],
  ["\u0581\u056B", -1, 1],
  ["\u056B\u056C", -1, 1],
  ["\u0561\u056F", -1, 1],
  ["\u0575\u0561\u056F", 5, 1],
  ["\u0561\u0576\u0561\u056F", 5, 1],
  ["\u056B\u056F", -1, 1],
  ["\u0578\u0582\u056F", -1, 1],
  ["\u0561\u0576", -1, 1],
  ["\u057A\u0561\u0576", 10, 1],
  ["\u057D\u057F\u0561\u0576", 10, 1],
  ["\u0561\u0580\u0561\u0576", 10, 1],
  ["\u0565\u0572\u0567\u0576", -1, 1],
  ["\u0575\u0578\u0582\u0576", -1, 1],
  ["\u0578\u0582\u0569\u0575\u0578\u0582\u0576", 15, 1],
  ["\u0561\u056E\u0578", -1, 1],
  ["\u056B\u0579", -1, 1],
  ["\u0578\u0582\u057D", -1, 1],
  ["\u0578\u0582\u057D\u057F", -1, 1],
  ["\u0563\u0561\u0580", -1, 1],
  ["\u057E\u0578\u0580", -1, 1],
  ["\u0561\u057E\u0578\u0580", 22, 1],
  ["\u0578\u0581", -1, 1],
  ["\u0561\u0576\u0585\u0581", -1, 1],
  ["\u0578\u0582", -1, 1],
  ["\u0584", -1, 1],
  ["\u0579\u0565\u0584", 27, 1],
  ["\u056B\u0584", 27, 1],
  ["\u0561\u056C\u056B\u0584", 29, 1],
  ["\u0561\u0576\u056B\u0584", 29, 1],
  ["\u057E\u0561\u056E\u0584", 27, 1],
  ["\u0578\u0582\u0575\u0584", 27, 1],
  ["\u0565\u0576\u0584", 27, 1],
  ["\u0578\u0576\u0584", 27, 1],
  ["\u0578\u0582\u0576\u0584", 27, 1],
  ["\u0574\u0578\u0582\u0576\u0584", 36, 1],
  ["\u056B\u0579\u0584", 27, 1],
  ["\u0561\u0580\u0584", 27, 1],
];

const a_3: Rule[] = [
  ["\u057D\u0561", -1, 1],
  ["\u057E\u0561", -1, 1],
  ["\u0561\u0574\u0562", -1, 1],
  ["\u0564", -1, 1],
  ["\u0561\u0576\u0564", 3, 1],
  ["\u0578\u0582\u0569\u0575\u0561\u0576\u0564", 4, 1],
  ["\u057E\u0561\u0576\u0564", 4, 1],
  ["\u0578\u057B\u0564", 3, 1],
  ["\u0565\u0580\u0564", 3, 1],
  ["\u0576\u0565\u0580\u0564", 8, 1],
  ["\u0578\u0582\u0564", 3, 1],
  ["\u0568", -1, 1],
  ["\u0561\u0576\u0568", 11, 1],
  ["\u0578\u0582\u0569\u0575\u0561\u0576\u0568", 12, 1],
  ["\u057E\u0561\u0576\u0568", 12, 1],
  ["\u0578\u057B\u0568", 11, 1],
  ["\u0565\u0580\u0568", 11, 1],
  ["\u0576\u0565\u0580\u0568", 16, 1],
  ["\u056B", -1, 1],
  ["\u057E\u056B", 18, 1],
  ["\u0565\u0580\u056B", 18, 1],
  ["\u0576\u0565\u0580\u056B", 20, 1],
  ["\u0561\u0576\u0578\u0582\u0574", -1, 1],
  ["\u0565\u0580\u0578\u0582\u0574", -1, 1],
  ["\u0576\u0565\u0580\u0578\u0582\u0574", 23, 1],
  ["\u0576", -1, 1],
  ["\u0561\u0576", 25, 1],
  ["\u0578\u0582\u0569\u0575\u0561\u0576", 26, 1],
  ["\u057E\u0561\u0576", 26, 1],
  ["\u056B\u0576", 25, 1],
  ["\u0565\u0580\u056B\u0576", 29, 1],
  ["\u0576\u0565\u0580\u056B\u0576", 30, 1],
  ["\u0578\u0582\u0569\u0575\u0561\u0576\u0576", 25, 1],
  ["\u0565\u0580\u0576", 25, 1],
  ["\u0576\u0565\u0580\u0576", 33, 1],
  ["\u0578\u0582\u0576", 25, 1],
  ["\u0578\u057B", -1, 1],
  ["\u0578\u0582\u0569\u0575\u0561\u0576\u057D", -1, 1],
  ["\u057E\u0561\u0576\u057D", -1, 1],
  ["\u0578\u057B\u057D", -1, 1],
  ["\u0578\u057E", -1, 1],
  ["\u0561\u0576\u0578\u057E", 40, 1],
  ["\u057E\u0578\u057E", 40, 1],
  ["\u0565\u0580\u0578\u057E", 40, 1],
  ["\u0576\u0565\u0580\u0578\u057E", 43, 1],
  ["\u0565\u0580", -1, 1],
  ["\u0576\u0565\u0580", 45, 1],
  ["\u0581", -1, 1],
  ["\u056B\u0581", 47, 1],
  ["\u057E\u0561\u0576\u056B\u0581", 48, 1],
  ["\u0578\u057B\u056B\u0581", 48, 1],
  ["\u057E\u056B\u0581", 48, 1],
  ["\u0565\u0580\u056B\u0581", 48, 1],
  ["\u0576\u0565\u0580\u056B\u0581", 52, 1],
  ["\u0581\u056B\u0581", 48, 1],
  ["\u0578\u0581", 47, 1],
  ["\u0578\u0582\u0581", 47, 1],
];

const g_v = [209, 4, 128, 0, 18];

export class ArmenianStemmer extends Stemmer {
  private I_p2 = 0;
  private I_pV = 0;

  readonly stopWords = undefined;

  r_mark_regions() {
    this.I_pV = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      golab1:
      while (true) {
        lab2: {
          if (!this.in_grouping(g_v, 1377, 1413)) {
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
          if (!this.out_grouping(g_v, 1377, 1413)) {
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
          if (!this.in_grouping(g_v, 1377, 1413)) {
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
          if (!this.out_grouping(g_v, 1377, 1413)) {
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

  r_adjective() {
    this.ket = this.cursor;
    if (this.find_among_b(a_0) == 0) {
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
    if (this.find_among_b(a_1) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_noun() {
    this.ket = this.cursor;
    if (this.find_among_b(a_2) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_ending() {
    this.ket = this.cursor;
    if (this.find_among_b(a_3) == 0) {
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

  stemHelper() {
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_3 = this.limit_backward;
    this.limit_backward = this.I_pV;
    const v_4 = this.limit - this.cursor;
    this.r_ending();
    this.cursor = this.limit - v_4;
    const v_5 = this.limit - this.cursor;
    this.r_verb();
    this.cursor = this.limit - v_5;
    const v_6 = this.limit - this.cursor;
    this.r_adjective();
    this.cursor = this.limit - v_6;
    const v_7 = this.limit - this.cursor;
    this.r_noun();
    this.cursor = this.limit - v_7;
    this.limit_backward = v_3;
    this.cursor = this.limit_backward;
    return true;
  }
}