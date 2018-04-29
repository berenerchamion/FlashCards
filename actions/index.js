import {
  fetchQuizzes,
  fetchQuiz,
  addQuiz,
  addQuestionToQuiz,
} from "../utils/FlashCardsAPI"

export const FETCH_QUIZZES = 'FETCH_QUIZZES'
export const FETCH_QUIZ = 'FETCH_QUIZ'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUIZ = 'ADD_QUIZ'

export const fetchAllQuizzes = () => {
  return dispatch => {
    fetchQuizzes().then(quizzes => {
      dispatch({ type: FETCH_QUIZZES, quizzes })
    })
  }
}

export const fetchOneQuiz = id => {
  return dispatch => {
    fetchQuiz(id).then(quiz => {
      dispatch({ type: FETCH_QUIZ, quiz })
    })
  }
}

export const addNewQuiz = (postData, cb) => {
  return dispatch => {
    addQuiz(postData).then(() => cb())
    dispatch({ type: ADD_QUIZ, postData})
  }
}

export const addNewQuestionToQuiz = (postData, cb) => {
  return dispatch => {
    addQuestionToQuiz(postData).then(() => cb())
    dispatch({ type: ADD_QUESTION, postData})
  }
}