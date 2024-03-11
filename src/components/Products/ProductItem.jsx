import { useState } from 'react'
import './ProductItem.css'
import ProductInfo from './ProductInfo'
import Counter from '../Counter'

function ProductItem({ product }) {
    // const { product } = props
    // const myButton = document.getElementById('myButton')
    // myButton.addEventListener('click', function () {
    //     console.log('sepete eklendi!');
    // })
    const { imageUrl, productName, productPrice } = product
    const [title, setTitle] = useState(productName)
    const [counter, setCounter] = useState(productPrice)
    const clickHandler = () => {
        setTitle('Güncellendi!')
    }
    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src={imageUrl} alt="" />
            </div>
            <ProductInfo >
                <h2 >{title}</h2>
                <Counter
                    productPrice={productPrice} counter={counter} setCounter={setCounter}
                >
                </Counter>
                <br />
                <button onClick={clickHandler}  > Güncelle</button>
            </ProductInfo>
        </div>
    )
}

export default ProductItem