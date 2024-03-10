import React from 'react'
import './ProductItem.css'
import ProductInfo from './ProductInfo'

function ProductItem({ product }) {
    // const { product } = props
    // const myButton = document.getElementById('myButton')
    // myButton.addEventListener('click', function () {
    //     console.log('sepete eklendi!');
    // })
    const clickHandler = () => {
        console.log('Tıklandı');
    }
    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src={product.imageUrl} alt="" />
            </div>

            <ProductInfo >
                <h2>{product.productName}</h2>
                <span>{product.productPrice}₺</span>
                <br />
                <button onClick={clickHandler}>Sepete Ekle</button>
            </ProductInfo>
        </div>
    )
}

export default ProductItem