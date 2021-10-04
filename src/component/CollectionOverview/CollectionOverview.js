import React from "react";
import CollectionPreview from "../../component/CollectionPreview/CollectionPreview";
import { connect } from "react-redux";
import {selectCollectionsPreview } from "../../redux/shop/shop.selector";
import { CollectionOverviewContainer } from "./CollectionOverview.styles";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollectionsPreview(state),
});
export default connect(mapStateToProps)(CollectionOverview);
