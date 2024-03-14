import { useState } from "react";
import Counter from "../Counter";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

const ProductItem = ({ product, setProducts, products }) => {
    const { imageUrl, productName, productPrice } = product;
    const [title, setTitle] = useState(productName);
    const [counter, setCounter] = useState(Number(productPrice));

    const clickHandler = () => {
        setTitle("Güncellendi!");
    };
    const deleteHandler = () => {
        setProducts(products.filter((item) => item.id !== product.id))
    };
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={imageUrl} alt="" />
            </div>
            <ProductInfo>
                <h2>{title}</h2>

                <Counter
                    productPrice={productPrice}
                    counter={counter}
                    setCounter={setCounter}
                >
                    <span>{counter}₺</span>
                </Counter>
                <br />
                <button onClick={clickHandler}>Güncelle</button>
                <button className="btn-delete" onClick={deleteHandler}>Sil</button>
            </ProductInfo>
        </div>
    );
};

export default ProductItem;
