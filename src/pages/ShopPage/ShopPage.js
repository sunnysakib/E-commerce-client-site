import React, { Component } from 'react';
import './ShopPage.scss';
import SHOP_DATA from '../../Data/shop-data';
import CollectionPreview from '../../component/CollectionPreview/CollectionPreview';

class ShopPage extends Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections} = this.state;
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
}

export default ShopPage;