import React from 'react'
import './ProductItem.css'

function ProductItem({ product }) {
    // const { product } = props

    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src={product.imageUrl} alt="" />
            </div>
            <div className='product-info'>
                <h2>{product.productName}</h2>
                <span>{product.productPrice}₺  </span>
            </div>
        </div>
    )
}

export default ProductItem