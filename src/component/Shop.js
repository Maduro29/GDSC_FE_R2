import ItemCard from './ItemCard'
import './Shop.scss'
import axios from 'axios'

const Shop = () => {

    let data;

    axios.get('https://dinomerch.onrender.com/api/products')
        .then(function (response) {
            // handle success
            data = response.data.data;
            console.log(data, 'check data');
        })
        .catch(function (error) {
            // handle error
            console.error(error);
        });

    return <>
        <div className="shop">
            <h1 className="shop-title">Chrome Dino Merch</h1>
            <div className='shop-merch'>
                <ItemCard name="Maduro" price={58} image="https://shop.googlemerchandisestore.com/store/20160512512/assets/items/images/GGOEGXXX1952.webp" />
                <ItemCard name="Maduro" price={58} image="https://shop.googlemerchandisestore.com/store/20160512512/assets/items/images/GGOEGXXX1952.webp" />
                <ItemCard name="Maduro" price={58} image="https://shop.googlemerchandisestore.com/store/20160512512/assets/items/images/GGOEGXXX1952.webp" />
            </div>
        </div>

    </>
}

export default Shop