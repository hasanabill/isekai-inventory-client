import React from 'react';
import useItems from './../../../Hooks/useItems';

const ManageInv = () => {

    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })
        }
    }

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
                            <div className='w-100 d-flex justify-content-between align-items-center'>
                                <div>
                                    <h3>Product Name: {item.name}</h3>
                                    <h5>Price: ${item.price}</h5>
                                    <p>Details: {item.description}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-dark'>Delete</button>
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