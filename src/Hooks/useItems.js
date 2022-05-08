import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://powerful-bastion-77525.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default useItems;