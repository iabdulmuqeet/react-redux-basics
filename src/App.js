import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HookCakeContaner from './components/HookCakeContaner';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<CakeContainer />
				<HookCakeContaner />
			</div>
		</Provider>
	);
}

export default App;
