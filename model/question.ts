import { sortItems } from "../functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #title: string;
  #answers: AnswerModel[];
  #isCorrect: boolean;

  constructor(id: number, title: string, answers: AnswerModel[], isCorrect = false) {
    this.#id = id
    this.#title = title
    this.#answers = answers
    this.#isCorrect = isCorrect
  }
  get id() {
    return this.#id
  }
  get title() {
    return this.#title
  }
  get answers() {
    return this.#answers
  }
  get isCorrect() {
    return this.#isCorrect
  }
  get isAnswer() {
    for (let answer of this.#answers) {
      if(answer.isShowing) return true
    }
  }
  get isNotAnswer() {
    return !this.isAnswer
  }

  replyWith(index: number): QuestionModel {
    const { isCorrect } = this.#answers[index]
    const answers = this.#answers.map((answer, i) => {
      const answerSelected = index == i
      const isShow = answerSelected || answer.isCorrect
      return isShow ? answer.toShow() : answer
    })
    return new QuestionModel(this.id, this.title, answers, isCorrect)
  }

  sortAnswer() {
    let sortAnswers = sortItems(this.#answers)
    return new QuestionModel(this.#id, this.#title, sortAnswers, this.#isCorrect)
    
  }

  static fromObject(object: QuestionModel): QuestionModel {
    const answers = object.answers.map(answer => AnswerModel.fromObject(answer))
    return new QuestionModel(
      object.id,
      object.title,
      answers,
      object.isCorrect
    )
  }

  toObject() {
    return {
      id: this.#id,
      title: this.#title,
      isAnswers: this.isAnswer,
      isCorrect: this.#isCorrect,
      answers: this.#answers.map(answer => answer.toObject())
    }
  }
}