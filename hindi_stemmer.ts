import { Rule, Stemmer } from "./_stemmer.ts";

const g_consonant = [255, 255, 255, 255, 159, 0, 0, 0, 248, 7];

export class HindiStemmer extends Stemmer {
  stopWords = undefined;

  r_CONSONANT = () => {
    if (!this.in_grouping_b(g_consonant, 2325, 2399)) {
      return false;
    }
    return true;
  };

  stemHelper() {
    if (this.cursor >= this.limit) {
      return false;
    }
    this.cursor++;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.ket = this.cursor;
    if (this.find_among_b(this.a_0) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.cursor = this.limit_backward;
    return true;
  }

  private readonly a_0: Rule[] = [
    ["\u0906\u0901", -1, -1],
    ["\u093E\u0901", -1, -1],
    ["\u0907\u092F\u093E\u0901", 1, -1],
    ["\u0906\u0907\u092F\u093E\u0901", 2, -1],
    ["\u093E\u0907\u092F\u093E\u0901", 2, -1],
    ["\u093F\u092F\u093E\u0901", 1, -1],
    ["\u0906\u0902", -1, -1],
    ["\u0909\u0906\u0902", 6, -1],
    ["\u0941\u0906\u0902", 6, -1],
    ["\u0908\u0902", -1, -1],
    ["\u0906\u0908\u0902", 9, -1],
    ["\u093E\u0908\u0902", 9, -1],
    ["\u090F\u0902", -1, -1],
    ["\u0906\u090F\u0902", 12, -1],
    ["\u0909\u090F\u0902", 12, -1],
    ["\u093E\u090F\u0902", 12, -1],
    ["\u0924\u093E\u090F\u0902", 15, -1, this.r_CONSONANT],
    ["\u0905\u0924\u093E\u090F\u0902", 16, -1],
    ["\u0928\u093E\u090F\u0902", 15, -1, this.r_CONSONANT],
    ["\u0905\u0928\u093E\u090F\u0902", 18, -1],
    ["\u0941\u090F\u0902", 12, -1],
    ["\u0913\u0902", -1, -1],
    ["\u0906\u0913\u0902", 21, -1],
    ["\u0909\u0913\u0902", 21, -1],
    ["\u093E\u0913\u0902", 21, -1],
    ["\u0924\u093E\u0913\u0902", 24, -1, this.r_CONSONANT],
    ["\u0905\u0924\u093E\u0913\u0902", 25, -1],
    ["\u0928\u093E\u0913\u0902", 24, -1, this.r_CONSONANT],
    ["\u0905\u0928\u093E\u0913\u0902", 27, -1],
    ["\u0941\u0913\u0902", 21, -1],
    ["\u093E\u0902", -1, -1],
    ["\u0907\u092F\u093E\u0902", 30, -1],
    ["\u0906\u0907\u092F\u093E\u0902", 31, -1],
    ["\u093E\u0907\u092F\u093E\u0902", 31, -1],
    ["\u093F\u092F\u093E\u0902", 30, -1],
    ["\u0940\u0902", -1, -1],
    ["\u0924\u0940\u0902", 35, -1, this.r_CONSONANT],
    ["\u0905\u0924\u0940\u0902", 36, -1],
    ["\u0906\u0924\u0940\u0902", 36, -1],
    ["\u093E\u0924\u0940\u0902", 36, -1],
    ["\u0947\u0902", -1, -1],
    ["\u094B\u0902", -1, -1],
    ["\u0907\u092F\u094B\u0902", 41, -1],
    ["\u0906\u0907\u092F\u094B\u0902", 42, -1],
    ["\u093E\u0907\u092F\u094B\u0902", 42, -1],
    ["\u093F\u092F\u094B\u0902", 41, -1],
    ["\u0905", -1, -1],
    ["\u0906", -1, -1],
    ["\u0907", -1, -1],
    ["\u0908", -1, -1],
    ["\u0906\u0908", 49, -1],
    ["\u093E\u0908", 49, -1],
    ["\u0909", -1, -1],
    ["\u090A", -1, -1],
    ["\u090F", -1, -1],
    ["\u0906\u090F", 54, -1],
    ["\u0907\u090F", 54, -1],
    ["\u0906\u0907\u090F", 56, -1],
    ["\u093E\u0907\u090F", 56, -1],
    ["\u093E\u090F", 54, -1],
    ["\u093F\u090F", 54, -1],
    ["\u0913", -1, -1],
    ["\u0906\u0913", 61, -1],
    ["\u093E\u0913", 61, -1],
    ["\u0915\u0930", -1, -1, this.r_CONSONANT],
    ["\u0905\u0915\u0930", 64, -1],
    ["\u0906\u0915\u0930", 64, -1],
    ["\u093E\u0915\u0930", 64, -1],
    ["\u093E", -1, -1],
    ["\u090A\u0902\u0917\u093E", 68, -1],
    ["\u0906\u090A\u0902\u0917\u093E", 69, -1],
    ["\u093E\u090A\u0902\u0917\u093E", 69, -1],
    ["\u0942\u0902\u0917\u093E", 68, -1],
    ["\u090F\u0917\u093E", 68, -1],
    ["\u0906\u090F\u0917\u093E", 73, -1],
    ["\u093E\u090F\u0917\u093E", 73, -1],
    ["\u0947\u0917\u093E", 68, -1],
    ["\u0924\u093E", 68, -1, this.r_CONSONANT],
    ["\u0905\u0924\u093E", 77, -1],
    ["\u0906\u0924\u093E", 77, -1],
    ["\u093E\u0924\u093E", 77, -1],
    ["\u0928\u093E", 68, -1, this.r_CONSONANT],
    ["\u0905\u0928\u093E", 81, -1],
    ["\u0906\u0928\u093E", 81, -1],
    ["\u093E\u0928\u093E", 81, -1],
    ["\u0906\u092F\u093E", 68, -1],
    ["\u093E\u092F\u093E", 68, -1],
    ["\u093F", -1, -1],
    ["\u0940", -1, -1],
    ["\u090A\u0902\u0917\u0940", 88, -1],
    ["\u0906\u090A\u0902\u0917\u0940", 89, -1],
    ["\u093E\u090A\u0902\u0917\u0940", 89, -1],
    ["\u090F\u0902\u0917\u0940", 88, -1],
    ["\u0906\u090F\u0902\u0917\u0940", 92, -1],
    ["\u093E\u090F\u0902\u0917\u0940", 92, -1],
    ["\u0942\u0902\u0917\u0940", 88, -1],
    ["\u0947\u0902\u0917\u0940", 88, -1],
    ["\u090F\u0917\u0940", 88, -1],
    ["\u0906\u090F\u0917\u0940", 97, -1],
    ["\u093E\u090F\u0917\u0940", 97, -1],
    ["\u0913\u0917\u0940", 88, -1],
    ["\u0906\u0913\u0917\u0940", 100, -1],
    ["\u093E\u0913\u0917\u0940", 100, -1],
    ["\u0947\u0917\u0940", 88, -1],
    ["\u094B\u0917\u0940", 88, -1],
    ["\u0924\u0940", 88, -1, this.r_CONSONANT],
    ["\u0905\u0924\u0940", 105, -1],
    ["\u0906\u0924\u0940", 105, -1],
    ["\u093E\u0924\u0940", 105, -1],
    ["\u0928\u0940", 88, -1, this.r_CONSONANT],
    ["\u0905\u0928\u0940", 109, -1],
    ["\u0941", -1, -1],
    ["\u0942", -1, -1],
    ["\u0947", -1, -1],
    ["\u090F\u0902\u0917\u0947", 113, -1],
    ["\u0906\u090F\u0902\u0917\u0947", 114, -1],
    ["\u093E\u090F\u0902\u0917\u0947", 114, -1],
    ["\u0947\u0902\u0917\u0947", 113, -1],
    ["\u0913\u0917\u0947", 113, -1],
    ["\u0906\u0913\u0917\u0947", 118, -1],
    ["\u093E\u0913\u0917\u0947", 118, -1],
    ["\u094B\u0917\u0947", 113, -1],
    ["\u0924\u0947", 113, -1, this.r_CONSONANT],
    ["\u0905\u0924\u0947", 122, -1],
    ["\u0906\u0924\u0947", 122, -1],
    ["\u093E\u0924\u0947", 122, -1],
    ["\u0928\u0947", 113, -1, this.r_CONSONANT],
    ["\u0905\u0928\u0947", 126, -1],
    ["\u0906\u0928\u0947", 126, -1],
    ["\u093E\u0928\u0947", 126, -1],
    ["\u094B", -1, -1],
    ["\u094D", -1, -1],
  ];
}
