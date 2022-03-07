import React from 'react'
import productData from '../../productsData'
import './featuredCard.css'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'

const FeaturedCard = ({ id }) => {

    function getFeaturedName(id) {
        const name = productData.filter(product => product.id == id);
        return name[0].name;
    };
    function getFeaturedPrice(id) {
        const price = productData.filter(product => product.id == id);
        return price[0].price + '€';
    };
    function getFeaturedImg(id) {
        const img = productData.filter(product => product.id == id);
        return img[0].img;
    };

    function getFeaturedProd(id) {
        const featuredProd = productData.filter(product => product.id == id);
        console.log(featuredProd);
    }

    return (
        <div className='cardContainer'>
            <div className='imgContainer'>
                <img src={getFeaturedImg(id)} />
            </div>
            <div className='infoContainer'>
                <h2>{getFeaturedName(id)}</h2>
                <h2>{getFeaturedPrice(id)}</h2>
            </div>
            <div className='buttonContainer'>
                <AddToCartBtn productData={productData.filter(product => product.id == id)[0]} />
            </div>
        </div>
    )
}

export default FeaturedCard