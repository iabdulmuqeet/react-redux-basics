import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = ({ noOfIceCreams, buyIceCream }) => {
	return (
		<>
			<h2>No. of IceCreams: {noOfIceCreams}</h2>
			<button onClick={buyIceCream}>Buy Ice Cream</button>
		</>
	);
};

const mapStateToProps = state => {
	return {
		noOfIceCreams: state.iceCream.noOfIceCreams,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		buyIceCream: () => dispatch(buyIceCream()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
