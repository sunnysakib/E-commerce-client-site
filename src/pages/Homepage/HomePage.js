import React from 'react';
import './HomePage.scss'
import Directory from '../../component/Directory/Directory';
import CollectionOverview from '../../component/CollectionOverview/CollectionOverview';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory/>
            <CollectionOverview/>
        </HomePageContainer>
    );
};

export default HomePage;