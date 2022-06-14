import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HookCakeContaner from './components/HookCakeContaner';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<CakeContainer />
				<HookCakeContaner />
				<IceCreamContainer />
			</div>
		</Provider>
	);
}

export default App;
