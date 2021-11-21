import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
	anecdotes: anecdoteReducer.reducer,
	notification: notificationReducer.reducer
})

const store = createStore(reducer, composeWithDevTools())

export default store