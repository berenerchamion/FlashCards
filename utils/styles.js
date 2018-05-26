import {orange, tan} from "./colors"
import {StyleSheet} from "react-native"


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  quizItem: {
    flex: 1,
    padding: 5,
    fontSize: 22,
    height: 40,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  quizItem: {
    flex: 1,
    padding: 5,
    fontSize: 14,
  },
  addQuestionBtnText: {
    color: tan,
    fontSize: 22,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 22,
  },
  iosBtn: {
    backgroundColor: orange,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  androidBtn: {
    backgroundColor: orange,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
    marginBottom: 10,
    marginRight: 2,
    marginLeft: 2,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    padding: 5,
    fontSize: 22,
    height: 40,
    alignItems: 'center',
  },
  submitBtnText: {
    color: tan,
    fontSize: 22,
    textAlign: 'center',
  },
  txtLabel: {
    fontSize: 22,
    padding: 5,
  },
  txtHeader: {
    fontSize: 24,
    padding: 10,
  },
  quizHeader: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonBlock: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: orange,
    borderWidth: 1,
  },
})