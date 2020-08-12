import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = ({ friends }) => {
	
	return (
		<div>
			{friends.map((friend) => (
				<Friend key={friend.id} friend={friend} />
			))}
		</div>
	);
};

export default FriendsList;
