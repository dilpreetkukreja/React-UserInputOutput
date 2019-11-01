import React from 'react';
import './UserOutput.css'
function UserOutput(props){
	const style = {
		color:'red'
	}
	return (
		<div>
			<p style={style}>Below are my details:</p>
			<p className="usr">My name is:{props.username}</p>
		</div>
	);
}

export default UserOutput;