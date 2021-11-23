const initialFilterTerm = ''

const reducer = (state=initialFilterTerm, action) => {
	switch(action.type) {
		case 'FILTER': {
			return action.data
		}
		default:
			return state
	}
}

const filterAnecdotes = (text) => {
	return {
		type: 'FILTER',
		data: text
	}
}

const filterReducer = { reducer, filterAnecdotes }
export default filterReducer