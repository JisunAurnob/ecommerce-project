import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import Toaster from "./common/Toaster";
import { Link } from "react-router-dom";
import '../assets/css/productCard.css'

const ProductCard = (props) => {

    const { product } = props;

    const { addItem } = useCart();
console.log(product);
    return (
        <>
        <Link to={`product/${product?.slug}`}>
        <div className="bg-white rounded-lg p-4 relative product-card">

            {Number(product?.discounted_price)>0 && (

                <div className="product-badge">{product?.discount} Off</div>
            )}

            {Number(product?.stock)<1 && (
                <div className="stock-badge">Out of stock</div>
            )}


            <div className="w-100 h-[300px]">
            <img src={product?.image?.medium} className="w-100 h-auto" />
            </div>
            <h3>{product?.name}</h3>
            <div className="flex justify-between items-center">
            {Number(product?.discounted_price)>0 ? (
                <div className="flex items-center discounted-price">
                    <span className="discounted">{product?.formatted_final_product_price}</span>
                    <span className="regular">{product?.formatted_regular_price}</span>
                </div>
            ) : 
            
            <span className="regular-price">{product?.formatted_final_product_price}</span>
            }

                <button className="bg-black text-white p-3 rounded-lg hover:bg-gray-600 hover:text-red-500" 
                onClick={(e)=>{
                    e.preventDefault();
                    if(Number(product?.stock)>0){
                        addItem({
                            id: product?.id,
                            name: product?.name,
                            price: product?.final_product_price,
                            image: product?.image?.small,
                            stock: product?.stock
                        }, 20);
                       Toaster('Product added to cart', 'success');
                    }
                    else{
                        Toaster('Product is out of stock', 'warn')
                    }

                }}>Add to cart</button>
            </div>
        </div>
        </Link>
        </>
    );
}

export default ProductCard;