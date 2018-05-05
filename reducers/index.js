import {
  FETCH_QUIZZES,
  FETCH_QUIZ,
  ADD_QUESTION,
  ADD_QUIZ,
} from "../actions"

function quizzes (state={}, action){
  switch(action.type){
    case ADD_QUIZ:
      return {
        ...state,
        ...action.quiz
      }
    default:
      return state
  }
}

export default quizzes
