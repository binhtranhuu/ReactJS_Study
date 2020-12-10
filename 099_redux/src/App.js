import logo from './logo.svg';
import './App.css';

function App() {
  var redux = require('redux');
  var oldState = {
    num: [1,2,3,4,5],
    status: true
  }

  const reducer1 = (state = oldState, action) => {
    switch (action.type) {
      case "EDIT":
        return {...state, status: !state.status}
      case "ADD":
        return {...state, num: [...state.num, action.addItem]}
      case "DELETE":
        return {...state, num: state.num.filter((value, key) => key !== action.deleteItem)}
      default:
        return state
    }
  }

  var store1 = redux.createStore(reducer1);
  store1.subscribe(() => {
    console.log(store1.getState());
  })

  store1.dispatch({
    type: "EDIT",
  })

  store1.dispatch({
    type: "ADD",
    addItem: 6
  })

  store1.dispatch({
    type: "DELETE",
    deleteItem: 0
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
