import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionOverview from "../../component/CollectionOverview/CollectionOverview";

import { fetchCollectionsAsync } from "../../redux/shop/shop.action";
import CollectionPage from "../CollectionPage/CollectionPage";
import "./ShopPage.scss";

import  WithSpinner from "../../component/WithSpinner/WithSpinner";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };
  // unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
    
    // const collectionRef = db.collection("collections");
    // collectionRef.get.then(snapShot => {
    //   const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }
  render() {
    const { match ,isCollectionFetching, isCollectionLoaded} = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: ()=> dispatch(fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
