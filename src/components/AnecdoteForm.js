import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { reset, setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''

		dispatch(newAnecdote(content))
		dispatch(setNotification(`new anecdote '${content}'`, 5))

		setTimeout(() => dispatch(reset()), 5000)
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