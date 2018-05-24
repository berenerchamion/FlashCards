import {orange, tan} from "./colors"
import {StyleSheet} from "react-native"


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 22,
    justifyContent: 'flex-start',
  },
  quizItem: {
    flex: 1,
    padding: 5,
    fontSize: 22,
    height: 40,
  },
  addQuestionBtnText: {
    color: tan,
    fontSize: 22,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 22,
  },
  iosAddQuestionBtn: {
    backgroundColor: orange,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidAddQuestionBtn: {
    backgroundColor: orange,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
})