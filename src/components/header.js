import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Header extends Component {
	state = {  }

	authButton(){
		const authenticated = this.props.authenticated;
		return (<button onClick={() => this.props.authenticate(!authenticated)}>Sign {authenticated ? 'Out' : 'In'}</button>);
	}

	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/resources">Resources</Link>
					</li>
					<li className="nav-item">
						{this.authButton()}
					</li>
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state){
	return {
		authenticated: state.authenticated
	};
}

export default connect(mapStateToProps, actions)(Header);