import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
	class Authentication extends Component {
		render(){
			console.log('rendering composed component', this.props)
			return <ComposedComponent {...this.props} />
		}
	}

	return connect(mapStateToProps)(Authentication);
}

function mapStateToProps(state){
	return { authenticated: state.authenticated };
}


/*
// In some other location (not in this file), we'd like to use this HOC above:

import Authentication // This is my HOC
import ResourceList // This is the component I want to wrap.


const ComposedComponent = Authentication(ResourseList);


// In some render function: - I am running the:
<ComposedComponent resources={resources} />

// Higher order component is a function called with our existing component that returns an existing component.

*/