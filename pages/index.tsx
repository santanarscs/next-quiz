import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Quiz } from '../components/Quiz'
import QuestionModel from '../model/question'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
 
  const router = useRouter()
  
  const [question, setQuestion] = useState<QuestionModel>()
  const [totalAnswerCorrect, setTotalAnswerCorrect] = useState<number>(0)
  const [questionsIds, setQuestionsIds] = useState<number[]>([])

  async function loadQuestionsIds() {
    const response = await fetch(`${BASE_URL}/quiz`)
    const questionsIds = await response.json()
    setQuestionsIds(questionsIds)
  }

  async function loadQuestion(id: number) {
    const response = await fetch(`${BASE_URL}/questions/${id}`)
    const json = await response.json()
    const newQuestion = QuestionModel.fromObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadQuestionsIds()
  }, [])
  
  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  },[questionsIds])

  function handleAnswerReply(question: QuestionModel) {
    setQuestion(question)
    const correct = question.isCorrect
    setTotalAnswerCorrect(totalAnswerCorrect + (correct ? 1 : 0))
  }

  function nextAnswerId() {
    const nextIndex = questionsIds.indexOf(question.id) + 1
    return questionsIds[nextIndex]
  }

  function goNextStep() {
    const nextId = nextAnswerId()
    nextId ? goNextAnswer(nextId) : finish()
  }

  function goNextAnswer(nextId: number) {
    loadQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: '/result',
      query: {
        total: questionsIds.length,
        corrects: totalAnswerCorrect
      }
    })
  }
  return question ? (
    <Quiz
      question={question}
      lastAnswer={nextAnswerId() === undefined}
      handleAnswerReply={handleAnswerReply}
      goNextStep={goNextStep}
    />
  ) : false
}
