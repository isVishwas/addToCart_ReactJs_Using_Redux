import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import {Provider} from 'react-redux';
import {store} from './store';
function App() {
  // console.log(store.getState());
  return (
    <div className="container">
    <Provider store={store}>
      <Product/>
    </Provider>
    </div>
  );
}

export default App;
