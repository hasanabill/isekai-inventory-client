import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import useItems from './../../../../Hooks/useItems';

const Inventory = () => {
    const [items] = useItems();

    return (
        <div className='container'>
            <h2>Inventory Items: {items.length}</h2>
            <div className='row'>
                {
                    items.map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>
        </div>
    );
};

export default Inventory;