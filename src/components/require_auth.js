import React, { Component } from 'react';

export default function(ComposedComponent){
	class Authentication extends Component {
		render(){
			console.log(this.props.resources);
			return <ComposedComponent {...this.props} />
		}
	}

	return Authentication;
}

// In some other location (not in this file), we'd like to use this HOC above:

import Authentication // This is my HOC
import ResourceList // This is the component I want to wrap.


const ComposedComponent = Authentication(ResourseList);


// In some render function: - I am running the:
<ComposedComponent resources={resources} />

// Higher order component is a function called with our existing component that returns an existing component.