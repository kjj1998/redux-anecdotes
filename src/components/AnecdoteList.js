import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import anecdoteReducer from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
	const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
		dispatch(anecdoteReducer.increaseVote(id))
    console.log('vote', id)
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
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default AnecdoteList