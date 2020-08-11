import React from 'react';
import {
	Card, CardText, CardBody, CardHeader} from 'reactstrap';

const Friend = ({ friend }) => {
	return (
		<Card style={{ width: '30%', margin: '20px', marginLeft: '35% ', background: '#FFFACD', color: '#30839f', fontWeight: 'bold', textAlign: 'center',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }} > 
			<CardBody>
			<CardHeader style={{ background: 'transparent', border: 'none', fontSize: '20px'  }} >{friend.name}</CardHeader>

			<CardText>Age: {friend.age}</CardText>
			<CardText>Email: {friend.email}</CardText>
			</CardBody>
		</Card>
	);
};

export default Friend;
