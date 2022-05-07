import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, name, img, price, quantity, supplier, description } = item;

    const navigate = useNavigate()

    const navigateToItemDetail = _id => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className='col-md-4 col-sm-6 col-12'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" className='' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigateToItemDetail(_id)} variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Items;