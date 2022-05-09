import React from 'react';
import Banner from './Banner/Banner';
import Charts from './Charts/Charts';
import Inventory from './Inventory/Inventory';
import DataTable from './TableData/DataTable';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Charts></Charts>
            <DataTable></DataTable>
        </div>
    );
};

export default Home;