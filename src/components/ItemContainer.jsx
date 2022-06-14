import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = ({ noOfItems, buyItem }) => {
	return (
		<>
			<h2>No. of Items: {noOfItems}</h2>
			<button onClick={buyItem}>Buy Item</button>
		</>
	);
};

const mapStateToProps = (state, ownProps) => {
	const noOfItems = ownProps.cake
		? state.cake.noOfCakes
		: state.iceCream.noOfIceCreams;

	return {
		noOfItems,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const buyItem = ownProps.cake
		? () => dispatch(buyCake())
		: () => dispatch(buyIceCream());

	return {
		buyItem,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
