import React from 'react'
import ProductItem from './ProductItem'
import './Products.css'
import { productData } from '../../productData'
function Products() {
    // const imageUrl = 'https://destekar.org/wp-content/uploads/2021/08/sinirsiz-unisex-tisort-siyah-1050.jpg'
    // const productTitle = 'T-shirt'
    // const productPrice = '20 TL'
    return (
        <div className='product-wrapper'>
            <h1>Products</h1>
            <div className='products'>
                {/* <ProductItem
                    imageUrl={productData[0].imageUrl} productTitle={productData[0].productName} productPrice={productData[0].productPrice} />
                <ProductItem
                    imageUrl={productData[1].imageUrl} productTitle={productData[1].productName} productPrice={productData[1].productPrice} />
                <ProductItem
                    imageUrl={productData[2].imageUrl} productTitle={productData[2].productName} productPrice={productData[2].productPrice} /> */}



                {productData.map((product) =>
                    <ProductItem
                        key={product.productName}
                        product={product}
                    />
                )}
            </div>
        </div>
    )
}

export default Products