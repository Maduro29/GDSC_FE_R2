import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard'
import './Shop.scss'
import axios from 'axios'

const Shop = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://dinomerch.onrender.com/api/products')
            .then(function (response) {
                setData(response.data.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return <>
        <div className="shop">
            <h1 className="shop-title">Chrome Dino Merch</h1>
            <div className='shop-merch'>
                {data ? data.map(item => {
                    return <ItemCard key={item.id} item={item} />
                }) : 'Loading...'}
            </div>
        </div>

    </>
}

export default Shop
