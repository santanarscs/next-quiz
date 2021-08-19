import questions from '../database'

export default (req, res) => {
  const { id } = req.query
  const isExistQuestion = questions.filter(question => question.id === +id)
  if (isExistQuestion) {
    const selectedQuestion = isExistQuestion[0].sortAnswer()
    res.status(200).json(selectedQuestion.toObject())
  } else {
    res.status(204).send()
  }
}