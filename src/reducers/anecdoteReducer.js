const byVotes = (a1, a2) => a2.votes - a1.votes

const reducer = (state = [], action) => {
	switch(action.type) {
		case 'VOTE': {
			const id = action.data.id
			const anecdoteToIncreaseVote = state.find(anecdote => anecdote.id === id)
			const changedAnecdote = {
				...anecdoteToIncreaseVote,
				votes: anecdoteToIncreaseVote.votes + 1
			}
			const updatedAnecdotes = state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
			return updatedAnecdotes.sort(byVotes)
		}
		case 'NEW_ANECDOTE': {
			return [...state, action.data]
		}
		case 'INIT_ANECDOTES': {
			return action.data
		}
		default:
  		return state
	}
}

/* Action creator to increase number of votes */
const increaseVote = (id) => {
	return {
		type: 'VOTE',
		data: { id }
	}
}

/* Action creator to create new anecdote */
const newAnecdote = (data) => {
	return {
		type: 'NEW_ANECDOTE',
		data
	}
}

const initializeAnecdotes = (anecdotes) => {
	return {
		type: 'INIT_ANECDOTES',
		data: anecdotes
	}
}

const anecdoteReducer = { reducer, increaseVote, newAnecdote, initializeAnecdotes }

export default anecdoteReducer