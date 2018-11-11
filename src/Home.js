import React from 'react';
import { Jumbotron } from 'reactstrap';

class Home extends React.Component {
	render(){
		return(
			<div>
			      <Jumbotron>
			        <h1 className="display-3">Hello, world!</h1>
					<h1>Home Page</h1>
			      </Jumbotron>
			</div>
		);
	}
}

export default Home;