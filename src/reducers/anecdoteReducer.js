const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
		shown: true
  }
}

const initialState = anecdotesAtStart.map(asObject)

const byVotes = (a1, a2) => a2.votes - a1.votes

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
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
		case 'FILTER': {
			const filteredAnecdotes = state.map(anecdote => {
				if (action.data === '') {
					anecdote.shown = true
					return anecdote
				}
				else if (anecdote.content.toLowerCase().includes(action.data.toLowerCase())) {	
					anecdote.shown = true
					return anecdote
				}
				else {
					anecdote.shown = false
					return anecdote
				} 
			})
			return filteredAnecdotes
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
const newAnecdote = (content) => {
	return {
		type: 'NEW_ANECDOTE',
		data: {
			content,
			id: getId(),
			votes: 0
		}
	}
}

const filterAnecdotes = (searchTerm) => {
	return {
		type: 'FILTER',
		data: searchTerm
	}
}


const anecdoteReducer = { reducer, increaseVote, newAnecdote, filterAnecdotes }

export default anecdoteReducer