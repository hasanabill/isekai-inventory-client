import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const ItemDetails = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])

    return (
        <div className='container my-5'>
            <div className='row container align-items-center'>
                <div className='col-12 col-md-6'>
                    <img src={item.img} height='500px' alt="" />
                </div>
                <div className='col-12 col-md-6'>
                    <h2 className='py-3'>{item.name}</h2>
                    <h3 className='py-3'>Price: ${item.price}</h3>
                    <h3 className='py-3'>Quantity: {item.quantity}</h3>
                    <h4 className='py-3'>Details: {item.description}</h4>
                    <button className='btn btn-dark'>Delivered</button>
                </div>
            </div>
            <Form className='w-50 mx-auto my-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Restock the Item</Form.Label>
                    <Form.Control type="number" placeholder="Enter quantity" />
                </Form.Group>
                <Button className='' variant="dark" type="submit">
                    Add to Stock
                </Button>
            </Form>
        </div>
    );
};

export default ItemDetails;