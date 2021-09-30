import React from 'react';
import './HomePage.scss'
import Directory from '../../component/Directory/Directory';
import CollectionOverview from '../../component/CollectionOverview/CollectionOverview';

const HomePage = () => {
    return (
        <div>
            <Directory/>
            <CollectionOverview/>
        </div>
    );
};

export default HomePage;