import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Add.User.module.css';
import UsersList from './UsersList';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ( props ) => {
	const [ enteredUsername, setEnteredUsername ] = useState('');
	const [ enteredAge, setEnteredAge ] = useState('');

	const addUserHandler = ( event ) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length ===
			0) {
			return;
		}
		if (+enteredAge < 1) {
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = ( event ) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = ( event ) => {
		setEnteredAge(event.target.value);
	};

	return (
		<div>
			<ErrorModal title="An error occured!"
						message="Somthing went wrong!" />
			<Card className={ classes.input }>
				<form onSubmit={ addUserHandler }>
					<label htmlFor="username">Username</label>
					<input id="username"
						   type="text"
						   value={ enteredUsername }
						   onChange={ usernameChangeHandler } />
					<label htmlFor="age"
						   onChange={ ageChangeHandler }>Age (Years)</label>
					<input id="age"
						   type="number"
						   value={ enteredAge }
						   onChange={ ageChangeHandler } />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;