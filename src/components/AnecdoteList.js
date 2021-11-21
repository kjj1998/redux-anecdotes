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
  }

	return (
		<div>
			{anecdotes.map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default AnecdoteList