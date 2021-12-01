import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'


const Filter = () => {
	const dispatch = useDispatch()

	const handleChange = (event) => {
		event.preventDefault()
		const filterTerm = event.target.value
		dispatch(filterAnecdotes(filterTerm))
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