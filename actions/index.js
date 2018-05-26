
export const FETCH_QUIZZES = 'FETCH_QUIZZES'
export const FETCH_QUIZ = 'FETCH_QUIZ'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUIZ = 'ADD_QUIZ'

export function fetchAllQuizzes(quizzes){
  return {
    type: FETCH_QUIZZES,
    quizzes: quizzes,
  }
}

export function getQuiz (quiz){
  return {
    type: FETCH_QUIZ,
    quiz: quiz
    }
}

export function addNewQuiz (quiz){
  return {
    type: ADD_QUIZ,
    quiz: quiz,
  }
}

export const addQuestion = (postData) => {
  return {
    type: ADD_QUESTION,
    question: postData,
  }
}
