import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Inventory = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

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