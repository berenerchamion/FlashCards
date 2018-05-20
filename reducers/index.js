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
    case ADD_QUESTION: {
      var q = state.quiz
      var qs = q.questions.slice()
      qs.push(question)
      q.questions = qs
      return{
        ...state,
        quiz: q
      }

    }

    default:
      return{
        ...state
      }
  }
}

export default quizzes
