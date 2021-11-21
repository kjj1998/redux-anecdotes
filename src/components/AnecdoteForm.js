import React from 'react'
import { useDispatch } from 'react-redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const dispatch = useDispatch()

	const addAnecdote = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		dispatch(anecdoteReducer.newAnecdote(content))
		dispatch(notificationReducer.createAnecdoteNotification(content))

		setTimeout(() => dispatch(notificationReducer.reset()), 5000)
	}

	return (
		<div>
		<h2>create new </h2>
		<form onSubmit={addAnecdote}>
		  <div><input name='anecdote'/></div>
			<button type='submit'>create</button>
    </form>
		</div>
	)
}

export default AnecdoteForm