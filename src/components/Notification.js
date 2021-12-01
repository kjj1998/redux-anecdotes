import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  
  return (
    <div style={props.style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
	let style = {}
	if (state.notification !== '') {
		style = {
			border: 'solid',
			padding: 10,
			borderWidth: 1
		}
	}
	return {
		notification: state.notification,
		style
	}
}

export default connect(
	mapStateToProps,
	null
)(Notification)