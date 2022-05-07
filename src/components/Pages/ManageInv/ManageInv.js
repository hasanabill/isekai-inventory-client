import React from 'react';
import useItems from './../../../Hooks/useItems';

const ManageInv = () => {

    const [items] = useItems();

    return (
        <div className='container'>
            <h2>Management: {items.length}</h2>
            <div>
                {
                    items.map(item => <div key={item._id}>
                        <div className='d-flex m-3 border p-3'>
                            <div>
                                <img className='me-5' src={item.img} height="125px" alt="" />
                            </div>
                            <div className=''>
                                <div>
                                    <h3>Product Name: {item.name}</h3>
                                    <h5>Price: ${item.price}</h5>
                                    <p>Details: {item.description}</p>
                                </div>
                                <div>
                                    <button className='btn btn-dark'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInv;