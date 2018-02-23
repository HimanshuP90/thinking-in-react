/**
 * GrandChild 

*/

import React from 'react';
import ReactDOM from 'react-dom';

export default class GrandChild extends React.Component {
	componentDidMount() {
		console.log('GrandChild did mount.');
	}

	value() {
		return ReactDOM.findDOMNode(this.refs.input).value;
	}

	render(){
		return(
			<div>
			<p>GrandChild</p>
			<input ref="input" type="text" defaultValue="foo" />
			</div>
		);
	}
}
