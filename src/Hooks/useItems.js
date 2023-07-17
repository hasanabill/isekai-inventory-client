import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://isekai-inventory.vercel.app/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default useItems;