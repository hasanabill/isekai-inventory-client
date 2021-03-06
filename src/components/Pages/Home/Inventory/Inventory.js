import axios from 'axios';
import React from 'react';
import Items from '../Items/Items';
import useItems from './../../../../Hooks/useItems';

const Inventory = () => {
    const [items] = useItems();

    return (
        <div className='container'>
            <h2 className='text-center my-5'>Inventory Items</h2>
            <div className='row'>
                {
                    items.slice(0, 6).map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>
        </div>
    );
};

export default Inventory;