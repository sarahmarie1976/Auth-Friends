import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormGroup, Form, Button, Input, Label } from 'reactstrap';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = (props) => {
	const { push } = useHistory();
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});

	const { username, password } = credentials;

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        console.log('look at me!')
		axiosWithAuth()
			.post('/api/login', credentials)
			.then((res) => {
				window.localStorage.setItem('token', res.data.payload);
				 props.setIsLoggedIn(true);
				// push('/friends');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Form style={{ width: '30%', marginLeft: '35% ', color: 'black', fontWeight: 'bold'  }} >
            <FormGroup >
                <Label for='username'>Username</Label>
                <Input 
                    type='text'
                    name='username'
                    onChange={handleChange}
                    value={username}
                    placeholder='Enter Username'
                />
            </FormGroup>
            <FormGroup>
                <Label for='password'>Password</Label>
                <Input
                    type="password"
					name="password"
					onChange={handleChange}
					value={password}
					placeholder="Enter Password"
                />
            </FormGroup>
            <Button onClick={handleSubmit} style={{ width: '30%', marginLeft: '35%', background: '#62cdfd', color: 'whitesmoke', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 '   }} >Submit</Button>
        </Form>
    )
}


export default Login;
