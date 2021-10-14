import React from "react";
import "./App.scss";
import HomePage from "./pages/Homepage/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./component/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth, createUserProfileDocuments } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Footer from "./component/Footer/Footer";
// import { selectCollectionsPreview } from "./redux/shop/shop.selector";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocuments(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/login"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  // collectionsArray: selectCollectionsPreview(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
