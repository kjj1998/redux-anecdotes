import anecdoteServices from "../services/anecdotes"

const byVotes = (a1, a2) => a2.votes - a1.votes

const anecdoteReducer = (state = [], action) => {
	switch(action.type) {
		case 'VOTE': {
			const votedAnecdote = action.data.votedAnecdote
			const updatedAnecdotes = state.map(
				anecdote => anecdote.id !== votedAnecdote.id ? anecdote : votedAnecdote)
			return updatedAnecdotes.sort(byVotes)
		}
		case 'NEW_ANECDOTE': {
			return [...state, action.data]
		}
		case 'INIT_ANECDOTES': {
			return action.data.sort(byVotes)
		}
		default:
  		return state
	}
}

/* Action creator to increase number of votes */
export const increaseVote = (anecdote) => {
	return async dispatch => {
		const changedAnecdote = {
			...anecdote,
			votes: anecdote.votes + 1
		}
		const votedAnecdote = await anecdoteServices.updateAnecdote(changedAnecdote)
		dispatch ({
			type: 'VOTE',
			data: { votedAnecdote }
		})
	}
}

/* Action creator to create new anecdote */
export const newAnecdote = content => {
	return async dispatch => {
		const newAnecdote = await anecdoteServices.createNew(content)
		dispatch({
			type: 'NEW_ANECDOTE',
			data: newAnecdote
		})
	}
}

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteServices.getAll()
		dispatch({
			type: 'INIT_ANECDOTES',
			data: anecdotes
		})
	}
}

export default anecdoteReducer