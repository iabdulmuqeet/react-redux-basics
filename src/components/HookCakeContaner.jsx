import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HookCakeContaner = () => {
	const noOfCakes = useSelector(state => state.noOfCakes);
	const dispatch = useDispatch();

	return (
		<>
			<h2>No. of Cakes: {noOfCakes}</h2>
			<button onClick={() => dispatch(buyCake())}>Buy Cake</button>
		</>
	);
};

export default HookCakeContaner;
