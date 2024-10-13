// card.js
import { CARD_TYPES, CARD_QUANTITY, POINT_VALUES } from './const.js';
export class Card {
    constructor(tip, value = null) {
      this.tip = tip;
      this.value = value;
    }
  
  // String to card
  toString() {
      if (this.tip === CARD_TYPES.POINTS) {
          return `${this.tip} ${this.value}`; // Tip and values of points
      } else {
          return this.tip; // Only tip
      }
  }
}