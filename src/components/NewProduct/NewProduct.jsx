import React from 'react'
import ProductForm from './ProductForm'

function NewProduct({ products, setProducts }) {

    const onSaveProduct = (newProductData) => {
        setProducts([...products, newProductData])
    }
    return (
        <div className='new-product-wrapper'>
            <ProductForm onSaveProduct={onSaveProduct} />
        </div>
    )
}

export default NewProduct