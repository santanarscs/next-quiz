import { sortItems } from '../../../functions/arrays'
import questions from '../database'

export default (req, res) => {
  const ids = questions.map(question => question.id)
  res.status(200).json(sortItems(ids))
}