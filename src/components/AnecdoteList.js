import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
	const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
		dispatch(anecdoteReducer.increaseVote(anecdote.id))
		dispatch(notificationReducer.increaseVoteNotification(anecdote.content))
    console.log('vote', anecdote.id)
		setTimeout(() => dispatch(notificationReducer.reset()), 5000)
  }

	return (
		<div>
			{anecdotes.map(anecdote => 
				anecdote.shown ? 
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
				: null
			)}
		</div>
	)
}

export default AnecdoteList