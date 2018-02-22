/**
 * Parent 

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';

export default class Parent extends React.Component {
	componentDidMount() {
		console.log('Parent did mount.');
		console.log('Child value: ', this.refs.child.value());

	}

	value() {
		return this.refs.grandchild.value();
	}

	render(){
		return(
			<div>
			Parent
			<Child ref="child" />
			</div>
		);
	}
}