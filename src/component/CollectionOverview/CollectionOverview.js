import React from "react";
import CollectionPreview from "../../component/CollectionPreview/CollectionPreview";
import { connect } from "react-redux";
import { selectCollections, selectCollectionsPreview } from "../../redux/shop/shop.selector";
import './CollectionOverview.scss'

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollectionsPreview(state),
});
export default connect(mapStateToProps)(CollectionOverview);
