import React from 'react'
import ProductItem from './ProductItem'
import './Products.css'
function Products() {
    const imageUrl = 'https://destekar.org/wp-content/uploads/2021/08/sinirsiz-unisex-tisort-siyah-1050.jpg'
    const productTitle = 'T-shirt'
    const productPrice = '20 TL'
    return (
        <div className='product-wrapper'>
            <h1>Products</h1>
            <div className='products'>
                <ProductItem imageUrl={imageUrl} productTitle={productTitle} productPrice={productPrice} />
                <ProductItem imageUrl='https://www.saglikligiyim.com/562-large_default/klimali-bayan-askili-atlet.jpg' productTitle='atlet' productPrice='30TL' />
            </div>
        </div>
    )
}

export default Products