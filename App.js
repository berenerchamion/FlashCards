import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  View,
  Platform,
  StatusBar,
} from 'react-native'
import QuizList from './components/QuizList'
import AddQuiz from './components/AddQuiz'
import QuizDetails from './components/QuizDetails'
import AddQuestion from './components/AddQuestion'
import TakeQuiz from './components/TakeQuiz'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { orange, tan } from './utils/colors'
import reducer from './reducers'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import devToolsEnhancer from 'remote-redux-devtools';

function FlashCardsStatusBar ({backgroundColor, ...props}){
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
    Quizzes: {
      screen: QuizList,
      navigationOptions: {
        tabBarLabel: 'Quizzes',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      },
    },
    AddQuiz: {
      screen: AddQuiz,
      navigationOptions: {
        tabBarLabel: 'Add Quiz',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
      },
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? orange : tan,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? tan : orange,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })

const MainNavigator = StackNavigator({
  Quizzes: {
    screen: Tabs,
  },
  QuizDetails: {
    screen: QuizDetails,
    navigationOptions: {
      headerTintColor: tan,
      headerStyle: {
        backgroundColor: orange,
      }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: tan,
      headerStyle: {
        backgroundColor: orange,
      }
    }
  },
  TakeQuiz: {
    screen: TakeQuiz,
    navigationOptions: {
      headerTintColor: tan,
      headerStyle: {
        backgroundColor: orange,
      }
    }
  },
})

export default class App extends React.Component {

  componentDidMount(){
    debugger
  }

  render() {
    return (
      <Provider store={
        createStore(reducer,
          devToolsEnhancer({suppressConnectErrors: false,})
          )
      }>
        <View style={ {flex: 1} }>
          <FlashCardsStatusBar backgroundColor={orange} barStyle="light-content" />
          <MainNavigator/>
        </View>
      </Provider>
    )
  }
}
