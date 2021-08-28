import "./App.scss";
import HomePage from "./pages/Homepage/HomePage";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./component/Header/Header";


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
}

export default App;
