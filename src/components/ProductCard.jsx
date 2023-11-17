import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const ProductCard = (props) => {

    const { product } = props;

    const { addItem } = useCart();

    return (
        <>
        <div className="bg-white rounded-lg p-4">
            <div className="w-[300px] h-[300px]">
            <img src={product?.image?.medium} className="w-100 h-auto" />
            </div>
            <h3>{product?.name}</h3>
            <div className="flex justify-between items-center">
                <span className="text-xl">{product?.formatted_final_product_price}</span>
                <button className="bg-black text-white p-3 rounded-lg hover:bg-gray-600 hover:text-red-500" 
                onClick={()=>{
                    addItem({
                        id: product?.id,
                        name: product?.name,
                        price: product?.final_product_price,
                        image: product?.image?.small,
                        stock: product?.stock
                    })
                }}>Add to cart</button>
            </div>
        </div>
        </>
    );
}

export default ProductCard;