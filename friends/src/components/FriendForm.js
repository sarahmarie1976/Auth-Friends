import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { FormGroup, Form, Button, Input, Label } from 'reactstrap';

const FriendForm = ({ setFriends }) => {
	const [friend, setFriend] = useState({ name: '', age: '', email: '' });
	const { name, age, email } = friend;
	const { push } = useHistory();
	const handleChange = (e) => {
		e.preventDefault();
		setFriend({ ...friend, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/friends', friend)
			.then((res) => {
				setFriends(res.data);
				setFriend({ name: '', age: '', email: '' });
				push('/friends');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Form onSubmit={handleSubmit} style={{ width: '30%', marginLeft: '35% ', color: 'Black', fontWeight: 'bolder'    }}  >
            <FormGroup  >
                <Label for='name'>Name</Label>
                <Input 
                   	type="text"
                    name="name"
                    onChange={handleChange}
                    value={name}
                    placeholder="Enter Name"
                />
            </FormGroup>
            <FormGroup>
                <Label for='age'>Age</Label>
                <Input
                    type="text"
					name="age"
					onChange={handleChange}
					value={age}
					placeholder="Enter Age"
                />
            </FormGroup>
            <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                    type="email"
					name="email"
					onChange={handleChange}
					value={email}
					placeholder="Enter Email"
                />
            </FormGroup>
            <Button type='submit'  style={{ width: '30%', marginLeft: '35%', background: '#62cdfd', color: 'whitesmoke', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 '   }}   >Submit</Button>
        </Form>
    )
}

export default FriendForm;
