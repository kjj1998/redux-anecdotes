import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer'

const store = createStore(anecdoteReducer.reducer, composeWithDevTools())

export default store