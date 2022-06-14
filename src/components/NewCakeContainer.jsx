import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const NewCakeContainer = ({ noOfCakes, buyCake }) => {
	const [number, setNumber] = useState(1);

	return (
		<>
			<h2>No. of Cakes: {noOfCakes}</h2>
			<input type='text' value={number} onChange={e => setNumber(e.target.value)} />
			<button onClick={() => buyCake(number)}>Buy {number} Cake</button>
		</>
	);
};

const mapStateToProps = state => {
	return {
		noOfCakes: state.cake.noOfCakes,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		buyCake: number => dispatch(buyCake(number)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
