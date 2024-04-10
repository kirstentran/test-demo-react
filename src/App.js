import logo from './logo.svg';
//Mot . la con, .. la cha roi moi den con
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      Hello World voi Uyen Tran &amp; Phuong Uyen
      <MyComponent></MyComponent>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Tran Nguyen P Uyen
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  );
}

export default App;
