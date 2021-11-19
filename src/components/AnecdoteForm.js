import React from 'react'
import { useDispatch } from 'react-redux'
import anecdoteReducer from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
	const dispatch = useDispatch()

	const addAnecdote = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		dispatch(anecdoteReducer.newAnecdote(content))
	}

	return (
		<form onSubmit={addAnecdote}>
		  <div><input name='anecdote'/></div>
			<button type='submit'>create</button>
    </form>
	)
}

export default AnecdoteForm