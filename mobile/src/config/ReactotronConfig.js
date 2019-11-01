import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
	const tron = Reactotron.configure({ host: '10.10.0.8' })
		.use(reactotronRedux())
		.use(reactotronSaga())
		.useReactNative()
		.connect();

	console.tron = tron;

	tron.clear();
}
