import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'HOBFlashCards:quizzesv1'

export const fetchQuizzes = () => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      return JSON.parse(results)
    })
}

export const fetchQuiz = (id) => {
  return null
}

export function addQuiz(id, title) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [id]: { key: id, title: title, questions:[] }
  }))
}

export const addQuestionToQuiz = (key, postData) => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      const quizzes = JSON.parse(results)
      if(quizzes[key] !== undefined){
        quizzes[key].questions.push(postData)
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(quizzes))
      }
    })
}

/**
 * Function scraped from Stack Overflow: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @returns {string}
 */

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
