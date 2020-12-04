import './App.css';
import Menu from './Component/Menu';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Content from './Component/Content';
import Category from './Component/Category';
import Contact from './Component/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DieuHuong from './Component/DieuHuong';

function App() {
  return (
    <Router>
      <div className="Test">
        <Menu></Menu>
        <DieuHuong></DieuHuong>
        {/* <Home></Home> */}
        {/* <Content></Content> */}
        {/* <Category></Category> */}
        {/* <Contact></Contact> */}
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
