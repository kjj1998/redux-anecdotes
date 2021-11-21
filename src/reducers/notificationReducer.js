const initialNotification = ''

const reducer = (state=initialNotification, action) => {
	console.log('state now: ', state)
  console.log('action', action)
	switch(action.type) {
		case 'VOTE_NOTIFICATION': {
			return action.data
		}
		case 'CREATE_NOTIFICATION': {
			return action.data
		}
		case 'RESET': {
			return initialNotification
		}
		default:
			return state
	}
}

const increaseVoteNotification = (content) => {
	return {
		type: 'VOTE_NOTIFICATION',
		data: `You voted for '${content}'`
	}
}

const createAnecdoteNotification = (content) => {
	return {
		type: 'CREATE_NOTIFICATION',
		data: `You added '${content}'`
	}
}

const reset = () => {
	return {
		type: 'RESET',
	}
}

const notificationReducer = { reducer, increaseVoteNotification, createAnecdoteNotification, reset }

export default notificationReducer