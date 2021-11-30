import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

import anecdoteReducer from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(anecdoteReducer.initializeAnecdotes())
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
			<Notification />
			<Filter />
			<AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App