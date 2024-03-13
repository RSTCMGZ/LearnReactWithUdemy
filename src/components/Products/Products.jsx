import React, { useState } from 'react'
import ProductItem from './ProductItem'
import './Products.css'
import { productData } from '../../productData'
import NewProduct from '../NewProduct/NewProduct'
const Products = () => {
    const [products, setProducts] = useState(productData)



    return (
        <div className='product-wrapper'>
            <NewProduct setProducts={setProducts} products={products} />
            <h1>Products</h1>
            <div className='products'>
                {products.map((product) =>
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