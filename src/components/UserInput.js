import React from 'react';

function UserInput(props){
	return (
		<input 
			type="text" 
			value={props.username} 
			onChange={props.onChangeHandler}
		/>
	);
}

export default UserInput;