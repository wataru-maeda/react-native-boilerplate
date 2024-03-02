import { Provider } from 'react-redux';
import Navigator from '@navigator';
import store from '@utils/store';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
