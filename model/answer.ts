
export default class AnswerModel {
  #value: string;
  #isCorrect: boolean;
  #isShowing: boolean;

  constructor(value: string, isCorrect: boolean, isShowing = false) {
    this.#value = value;
    this.#isCorrect = isCorrect;
    this.#isShowing = isShowing;
  }

  static correct(value: string) {
    return new AnswerModel(value, true);
  }
  static wrong(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get isCorrect() {
    return this.#isCorrect;
  }

  get isShowing() {
    return this.#isShowing;
  }

  toShow() {
    return new AnswerModel(this.#value, this.#isCorrect, true)
  }


  toObject() {
    return {
      value: this.#value,
      isCorrect: this.#isCorrect,
      isShowing: this.#isShowing
    }
  }
}