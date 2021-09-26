import React, { Component } from 'react';
import './ShopPage.scss';
import CollectionPreview from '../../component/CollectionPreview/CollectionPreview';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) => {
     return (
            <div className="shop-page">
               {
                   collections.map(({id, ...otherProps})=> (
                       <CollectionPreview key={id} {...otherProps}/>
                   ))
               }
            </div>
        );
    }

    const mapStateToProps = (state) => ({
        collections: selectCollections(state)
    })

export default connect(mapStateToProps)(ShopPage);