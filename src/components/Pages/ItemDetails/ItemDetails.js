import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {

    const { itemId } = useParams()

    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [itemId])

    return (
        <div>
            <h2>Name {service.name}</h2>
        </div>
    );
};

export default ItemDetails;