import React from 'react'
import './ProductItem.css'

function ProductItem(props) {

    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src={props.imageUrl} alt="" />
            </div>
            <div className='product-info'>
                <h2>{props.productTitle}</h2>
                <span>{props.productPrice}  </span>
            </div>
        </div>
    )
}

export default ProductItem