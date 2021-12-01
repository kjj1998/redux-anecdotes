import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'


const Filter = (props) => {

	const handleChange = (event) => {
		event.preventDefault()
		const filterTerm = event.target.value
		props.filterAnecdotes(filterTerm)
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

export default connect(
	null,
	{ filterAnecdotes }
)(Filter)