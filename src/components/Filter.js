import React from 'react'
import { useDispatch } from 'react-redux'
import anecdoteReducer from '../reducers/anecdoteReducer'


const Filter = (props) => {
	const dispatch = useDispatch()

	const handleChange = (event) => {
		event.preventDefault()
		const filterTerm = event.target.value
		dispatch(anecdoteReducer.filterAnecdotes(filterTerm))
	}
	const style = {
		marginBottom: 10
	}

	return (
		<div style={style}>
			filter <input name='filter' onChange={handleChange} />
		</div>
	)
}

export default Filter