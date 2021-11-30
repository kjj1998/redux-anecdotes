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

const setNotification = (content, time) => {
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			data: content
		})
		setTimeout(() => dispatch(reset()), time * 1000)
	} 
}

const createAnecdoteNotification = (content) => {
	return {
		type: 'CREATE_NOTIFICATION',
		data: `You added '${content}'`
	}
}

const reset = () => {
	return async dispatch => {
		dispatch({
			type: 'RESET',
		})
	}
}

const notificationReducer = { reducer, setNotification, createAnecdoteNotification, reset }
export default notificationReducer