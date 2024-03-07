import React from 'react'
import './ProductItem.css'

function ProductItem() {
    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src="https://destekar.org/wp-content/uploads/2021/08/sinirsiz-unisex-tisort-siyah-1050.jpg" alt="" />
            </div>
            <div className='product-info'>
                <h2>Product Title</h2>
                <span>Product Price</span>
            </div>
        </div>
    )
}

export default ProductItem