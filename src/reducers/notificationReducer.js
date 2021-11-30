const initialNotification = ''

const reducer = (state=initialNotification, action) => {
	switch(action.type) {
		case 'SET_NOTIFICATION': {
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

const setNotification = (content) => {
	return {
		type: 'SET_NOTIFICATION',
		data: content
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

const notificationReducer = { reducer, setNotification, createAnecdoteNotification, reset }
export default notificationReducer