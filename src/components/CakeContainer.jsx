import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const CakeContainer = ({ noOfCakes, buyCake }) => {
	return (
		<>
			<h2>No. of Cakes: {noOfCakes}</h2>
			<button onClick={buyCake}>Buy Cake</button>
		</>
	);
};

const mapStateToProps = state => {
	return {
		noOfCakes: state.noOfCakes,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
