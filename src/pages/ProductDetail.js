import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../productsData"
import '../index.css'
import AddToCartBtn from "../components/AddToCartBtn/AddToCartBtn"
import { BsTruck } from 'react-icons/bs';
import { BiWorld , BiEuro } from 'react-icons/bi';

function ProductDetail() {
    const { productId } = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)

    return (
        <div className="main">
            <div className="left-col">
                <img
                    src={thisProduct.img}
                    alt={thisProduct.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="right-col">
                <h1 className="title">{thisProduct.name}</h1>
                <p className="desc">{thisProduct.description}</p>
                <div className="priceContainer"></div>
                <p className="price">{thisProduct.price} €</p>
                <div className="addToCartContainer"><AddToCartBtn productData={thisProduct} /></div>
                <div className="productIcons">
                    <div className="iconContainer">
                        <BsTruck />
                        <p className="text-lg">Envío 24h</p>
                    </div>
                    <div className="iconContainer">
                        <BiWorld />
                        <p className="text-lg">Envío global</p>
                    </div>
                    <div className="iconContainer">
                        <BiEuro />
                        <p className="text-lg">Envío Gratis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail