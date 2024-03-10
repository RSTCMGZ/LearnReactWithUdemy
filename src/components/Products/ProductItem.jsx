import { useState } from 'react'
import './ProductItem.css'
import ProductInfo from './ProductInfo'

function ProductItem({ product }) {
    // const { product } = props
    // const myButton = document.getElementById('myButton')
    // myButton.addEventListener('click', function () {
    //     console.log('sepete eklendi!');
    // })
    const [title, setTitle] = useState(product.productName)
    const clickHandler = () => {
        setTitle('Güncellendi!')
    }
    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src={product.imageUrl} alt="" />
            </div>
            <ProductInfo >
                <h2 >{title}</h2>
                <span>{product.productPrice}₺</span>
                <br />
                <button onClick={clickHandler}  > Güncelle</button>
            </ProductInfo>
        </div>
    )
}

export default ProductItem