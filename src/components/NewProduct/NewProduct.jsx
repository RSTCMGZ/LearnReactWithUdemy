import React from 'react'
import ProductForm from './ProductForm'

function NewProduct({ setProducts }) {

    const onSaveProduct = (newProductData) => {
        setProducts((prevState) => [newProductData, ...prevState])
    }
    return (
        <div className='new-product-wrapper'>
            <ProductForm onSaveProduct={onSaveProduct} />
        </div>
    )
}

export default NewProduct