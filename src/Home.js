import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

class Home extends React.Component {
	render(){
		return(
			<div>
			      <Jumbotron>
			        <h1 className="display-3">Hello, world!</h1>
					<h1>Home Page</h1><Badge color="secondary">New</Badge>
					<Link to='/MyNewsApp'>News</Link>
					<Link to='/login'> Login</Link>
					<Link to='/Pagination'> Pagination</Link>
					<Button color="danger">Danger!</Button>
					<p className="lead">
			          <Button color="primary">Learn More</Button>
			        </p>
			      </Jumbotron>
			</div>
		);
	}
}

export default Home;