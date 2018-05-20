import {
  FETCH_QUIZZES,
  FETCH_QUIZ,
  ADD_QUESTION,
  ADD_QUIZ,
} from "../actions"

const initialState = {
  quizzes:[],
  quiz: {
    key:'',
    title:'',
    questions:[],
  }
}

function quizzes (state=initialState, action){
  const { quizzes } = action
  const { quiz } = action
  const { key } = action
  const { question } = action

  switch(action.type){
    case ADD_QUIZ:
      return{
        ...state,
        quizzes: state.quizzes.concat(quiz)
      }
        quizzes.concat(quiz)
    case FETCH_QUIZZES:
        return{
          ...state,
          quizzes: Object.keys(quizzes).map(function(k) { return quizzes[k] })
        }
    case FETCH_QUIZ:
      return {
        ...state,
        quiz: quiz
      }
    case ADD_QUESTION:
      console.log(state.quizzes)
      console.log(key)
      console.log(question)
      return{
        ...state,
        quizzes: state[key].questions.concat(question)
      }
    default:
      return{
        ...state
      }
  }
}

export default quizzes
