import React from 'react'
import './ProductItem.css'
import ProductInfo from './ProductInfo'

function ProductItem({ product }) {
    // const { product } = props

    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src={product.imageUrl} alt="" />
            </div>

            <ProductInfo >
                <h2>{product.productName}</h2>
                <span>{product.productPrice}₺</span>
            </ProductInfo>
        </div>
    )
}

export default ProductItem