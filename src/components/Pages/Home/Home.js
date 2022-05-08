import React from 'react';
import Banner from './Banner/Banner';
import Charts from './Charts/Charts';
import Inventory from './Inventory/Inventory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Charts></Charts>
        </div>
    );
};

export default Home;