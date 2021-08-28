import "./App.scss";
import HomePage from "./pages/Homepage/HomePage";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./component/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={SignInAndSignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
