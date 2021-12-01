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

const delay = time => new Promise((resolve, reject) => {
	setTimeout(() => resolve('wait'), time)
})

export const setNotification = (content, time) => {
	return async dispatch => {
		
		//const id = setTimeout(() => dispatch(reset()), time * 1000)
		dispatch({
			type: 'SET_NOTIFICATION',
			data: content
		})
		await delay(time * 1000)
		dispatch(reset())
		
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