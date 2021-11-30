import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'

const Anecdote = ({anecdote, vote}) => {
	return (
		<div>
			<div>
				{anecdote.content}
			</div>
			<div>
				has {anecdote.votes}
				<button onClick={() => vote(anecdote)}>vote</button>
			</div>
		</div>
)}

const AnecdoteList = () => {
	const dispatch = useDispatch()
	const anecdotes = useSelector(({anecdotes, filterTerm}) => {
		let res = anecdotes
		if (filterTerm) {
			res = res.filter(anecdote => 
				anecdote.content.toLowerCase().includes(filterTerm.toLowerCase()))
		}
		return res
	})
	
  const vote = (anecdote) => {
		dispatch(anecdoteReducer.increaseVote(anecdote))
		dispatch(notificationReducer.setNotification(`you voted '${anecdote.content}'`))
    console.log('vote', anecdote.id)
		setTimeout(() => dispatch(notificationReducer.reset()), 5000)
  }

	return (
		<div>
			{anecdotes.map(anecdote => 
				<Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />
			)}
		</div>
	)
}

export default AnecdoteList