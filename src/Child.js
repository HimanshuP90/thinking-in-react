/**
 * Child 

*/

import React from 'react';
import ReactDOM from 'react-dom';
import GrandChild from './GrandChild';

export default class Child extends React.Component {
	componentDidMount() {
		console.log('Child did mount.');
	}

	value() {
		return this.refs.grandchild.value();
	}

	render(){
		return(
			<div>
			Child
			<GrandChild ref="grandchild" />
			</div>
		);
	}
}