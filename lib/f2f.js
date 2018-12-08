/* global define */

/*!
* f2f - v0.1.0 - 2017-07-14
* https://github.com/brothersincode/f2f/
* Licensed: MIT
*/

(function (name, global, definition) {
  if (typeof module !== 'undefined') {
    module.exports = definition();
  } else if (typeof define === 'function' && typeof define.amd === 'object') {
    define(definition);
  } else if (typeof window !== 'undefined') {
    window[name] = definition();
  } else {
    global[name] = definition();
  }
}('f2f', this, function () {
  function f2f () {
    this.init();
  }

  f2f.prototype.init = function () {
    this.words = {
      'تَ': ['a', 'a'],
      'تِ': ['e', 'e'],
      'تُ': ['o', 'o'],
      'ﻁْ': ['.'],
      'ا': ['a', 'a'],
      'آ': ['a', 'a'],
      'ئ': ['a'],
      'ء': ['a'],
      'ب': ['b'],
      'پ': ['p'],
      'ت': ['t'],
      'ث': ['s'],
      'ج': ['j'],
      'چ': ['ch'],
      'ح': ['h'],
      'خ': ['kh'],
      'د': ['d'],
      'ذ': ['z'],
      'ر': ['r'],
      'ز': ['z'],
      'ژ': ['zh'],
      'س': ['s'],
      'ش': ['sh'],
      'ص': ['s'],
      'ض': ['z'],
      'ط': ['t'],
      'ظ': ['z'],
      'ع': ['', 'a'],
      'غ': ['gh'],
      'ف': ['f'],
      'ق': ['gh'],
      'ک': ['k'],
      'گ': ['g'],
      'ل': ['l'],
      'م': ['m'],
      'ن': ['n'],
      'و': ['v', 'o'],
      'ه': ['h'],
      'ی': ['y', 'i'],
      'ي': ['y', 'i']
    };

    this.vowels = ['ﺕَ'.slice(-1), 'ﺕِ'.slice(-1), 'ﺕُ'.slice(-1)];

    this.words['ﺕَ'.slice(-1)] = ['a', 'a'];
    this.words['تِ'.slice(-1)] = ['e', 'e'];
    this.words['تُ'.slice(-1)] = ['e', 'e'];
    this.words['ﻁْ'.slice(-1)] = ['.'];
  };

  // State Machine:
  // 0 - (c,?) -> 1 - (v,?) -> 2 - (c,?) -> 3 - (c) -> 4 - (c) -> 5
  //                           ^            |          |          |
  //                           |___(v,?)____<___(v,?)__<___(v,?)__|
  // in the word list first item is always consonant and the second
  // is always vowel
  f2f.prototype.simplef2f = function (word) {
    var result = '';
    var state = 0;
    var i = 0;

    while (i < word.length) {
      var ch = word.slice(i, i + 1);
      // console.log(ch);
      if (Object.keys(this.words).indexOf(ch) === -1) {
        i += 1;
        continue;
      }
      if (this.words[ch][0] === '.') {
        state = 0;
        i += 1;
        continue;
      }

      if (state === 0) {
        // definitely a consonant
        result += this.words[ch][0];
        state = 1;
      } else if (state === 1) {
        if (this.words[ch].length > 1) { // vowels and semi-vowels both have a vowel in their presentation
          result += this.words[ch][1];
        } else {
          result += 'a';
          i -= 1;
        }
        state = 2;
      } else if (state === 2) {
        result += this.words[ch][0];
        state = 3;
      } else if (state === 3) {
        if (this.words[ch].length > 1) { // vowels and semi-vowels both have a vowel in their presentation
          result += this.words[ch][1];
          state = 2;
        } else {
          result += this.words[ch][0];
          state = 4;
        }
      } else if (state === 4) {
        if (this.words[ch].length > 1) { // vowels and semi-vowels both have a vowel in their presentation
          result += this.words[ch][1];
          state = 2;
        } else {
          result += this.words[ch][0];
          state = 5;
        }
      } else if (state >= 5) { // prevent error!
        if (this.words[ch].length > 1) { // vowels and semi-vowels both have a vowel in their presentation
          result += this.words[ch][1];
          state = 2;
        } else {
          result += this.words[ch][0];
          state += 1;
        }
      } else {}
      i += 1;
    }
    result = result.replace('aa', 'a').replace('ao', 'o').replace('ae', 'e');
    return result;
  };

  f2f.prototype.pronf2f = function (pron, word) {};
  f2f.prototype.trf2f = function (pron, word) {};

  f2f.prototype.simplefi2fa = require('fingilish').jomle;
	return f2f;
}));
