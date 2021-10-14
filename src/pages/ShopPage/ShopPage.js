import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionOverview from "../../component/CollectionOverview/CollectionOverview";
import {
  convertCollectionsSnapShotToMap,
  db,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.action";
import CollectionPage from "../CollectionPage/CollectionPage";
import "./ShopPage.scss";

import  WithSpinner from "../../component/WithSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = db.collection("collections");
    collectionRef.onSnapshot((snapShot) => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
