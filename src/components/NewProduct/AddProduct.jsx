import React from 'react'

function AddProduct({ setIsOpen }) {

    const handleOpen = () => {
        setIsOpen(true)
    }
    return (
        <div>
            <button onClick={handleOpen}>Yeni Ürün Ekle</button>
        </div>
    )
}

export default AddProduct