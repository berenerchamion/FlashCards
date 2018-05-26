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
        quiz: state.quizzes.filter( x => x.key === quiz.key)[0]
      }
    case ADD_QUESTION: {
      //quiz to be updated - get a copy from state
      let q = state.quiz
      //get the questions array we want to add a question too
      let qs = q.questions.slice()
      //get the full quiz list from state
      let ql = state.quizzes
      //add the new question to the question list on the quiz object
      qs.push(question)
      //assign the new question list to the quiz object
      q.questions.push(question)
      let updatedql = ql.map(x => {
        if (x.key === q.key) {
          x.questions = qs
        }
        return x
      })
      return{
        ...state,
        quizzes: updatedql,
      }
    }

    default:
      return{
        ...state
      }
  }
}

export default quizzes
