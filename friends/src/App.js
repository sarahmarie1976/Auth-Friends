import React, { useState, useEffect } from 'react';
import { Card,  CardHeader, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
	const [friends, setFriends] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	console.log(isLoggedIn);
	useEffect(() => {
		axiosWithAuth()
			.get('/api/friends')
			.then((res) => {
				setFriends(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [isLoggedIn]);
	console.log(friends);
	return (
		<div className="App">
            <Router>
			<header>
                <Nav style={{ margin: '2%', marginLeft: '42%', fontsize: '22px', fontWeight: 'bold' }}>
                        <NavItem style={{ marginRight: '40px', textAlign: 'center'}}>
							<NavLink to="/friends">Friends</NavLink>
						</NavItem>
						<NavItem style={{marginRight: '40px', textAlign: 'center'}}>
							<NavLink to="/add-friend">Add a Friend</NavLink>
                        </NavItem>
                        <NavItem style={{marginRight: '40px', textAlign: 'center'}}>
							<NavLink to="/login">Login</NavLink>
                        </NavItem>
                    </Nav>
			</header>
            <Card  style={{ width: '33%', marginLeft: '33%', textAlign: 'center', border: 'none', background: 'transparent', border: 'none' }}>
        <CardHeader style={{ border: 'none', fontSize: '25px', color: 'orange', fontWeight: 'bolder' }}>
          They're the Friends we've grown to Love...
          </CardHeader>
      </Card>
			<Switch>
				<PrivateRoute
					exact
					path="/friends"
					component={FriendsList}
					friends={friends}
					setFriends={setFriends}
				/>
				{/* <FriendsList friends={friends} /> */}

				<PrivateRoute
					exact
					path="/add-friend"
					component={FriendForm}
					setFriends={setFriends}
				/>
				{/* <FriendForm setFriends={setFriends} /> */}

				{/* <Route path="/" component={Login} isLoggedIn={isLoggedIn} /> */}
				<Route path="/">
					<Login setIsLoggedIn={setIsLoggedIn} />
				</Route>
			</Switch>
            </Router>
		</div>
	);
}

export default App;
