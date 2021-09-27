import React from "react";
import { Route } from "react-router";
import CollectionOverview from "../../component/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import "./ShopPage.scss";

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path ={`${match.path}`} component={CollectionOverview} />
      <Route  path ={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
