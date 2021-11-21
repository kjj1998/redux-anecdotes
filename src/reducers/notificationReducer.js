const initialNotification = 'render some notifications'

const reducer = (state=initialNotification, action) => {
	console.log('state now: ', state)
  console.log('action', action)
	switch(action.type) {
		case 'VOTE_NOTIFICATION': {
			return action.data
		}
		default:
			return state
	}
}

const increaseVoteNotification = (content) => {
	return {
		type: 'VOTE_NOTIFICATION',
		data: `You voted for ${content}`
	}
}

const notificationReducer = { reducer, increaseVoteNotification }

export default notificationReducer