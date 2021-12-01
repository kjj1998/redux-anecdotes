const initialNotification = ''

const notificationReducer = (state=initialNotification, action) => {
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

export const setNotification = (content, time) => {
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			data: content
		})
		setTimeout(() => dispatch(reset()), time * 1000)
	} 
}

export const createAnecdoteNotification = (content) => {
	return {
		type: 'CREATE_NOTIFICATION',
		data: `You added '${content}'`
	}
}

export const reset = () => {
	return async dispatch => {
		dispatch({
			type: 'RESET',
		})
	}
}

export default notificationReducer