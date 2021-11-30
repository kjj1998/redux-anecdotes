import anecdoteServices from "../services/anecdotes"

const byVotes = (a1, a2) => a2.votes - a1.votes

const reducer = (state = [], action) => {
	switch(action.type) {
		case 'VOTE': {
			const votedAnecdote = action.data.votedAnecdote
			/*
			const anecdoteToIncreaseVote = state.find(anecdote => anecdote.id === id)
			const changedAnecdote = {
				...anecdoteToIncreaseVote,
				votes: anecdoteToIncreaseVote.votes + 1
			}*/
			const updatedAnecdotes = state.map(
				anecdote => anecdote.id !== votedAnecdote.id ? anecdote : votedAnecdote)
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
const increaseVote = (anecdote) => {
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
const newAnecdote = content => {
	return async dispatch => {
		const newAnecdote = await anecdoteServices.createNew(content)
		dispatch({
			type: 'NEW_ANECDOTE',
			data: newAnecdote
		})
	}
}

const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteServices.getAll()
		dispatch({
			type: 'INIT_ANECDOTES',
			data: anecdotes
		})
	}
}

const anecdoteReducer = { reducer, increaseVote, newAnecdote, initializeAnecdotes }

export default anecdoteReducer