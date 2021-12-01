const initialFilterTerm = ''

const filterReducer = (state=initialFilterTerm, action) => {
	switch(action.type) {
		case 'FILTER': {
			return action.data
		}
		default:
			return state
	}
}

export const filterAnecdotes = (text) => {
	return {
		type: 'FILTER',
		data: text
	}
}

export default filterReducer