import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import '../assets/css/blogDetails.css'
import { useCart } from "react-use-cart";
import Toaster from "../components/common/Toaster";

const ProductDetails = () => {

    const [productDetails, setProductDetails] = useState();
    const [productPrice, setProductPrice] = useState(0);
    const [attributeId, setAttributeId] = useState();
    const [quantity, setQuantity] = useState(1);

    const {addItem} = useCart();

    const [selectedAttribute, setSelectedAttribute] = useState();

    const { slug } = useParams();

    // console.log(slug);

    useEffect(() => {

        axios.get('get-product/' + slug)
            .then(response => {
                console.log(response);
                if (response?.data?.success) {

                    setProductDetails(response?.data?.data);

                    setProductPrice(response?.data?.data?.final_product_price)
                }
            })

    }, [])
    // console.log(blogDetails);
    return (
        <>
            <Layout>

                <h3 className="text-red-500">This is prodic details page</h3>

                <div className="grid grid-cols-2">
                    <div>
                        <img src={productDetails?.image?.large} className="" />
                    </div>

                    <div className="p-4">
                        <h1 className=" font-bold text-2xl">{productDetails?.name}</h1>
                        <p className="text-2xl pt-2"> ৳{productPrice} </p>
                        <br />

                        <div className="attribute_section">
                            {productDetails?.attributes.map((attribute, index) => {
                                return (
                                    <button key={index} className={`p-4 rounded-lg mr-4 ${(attributeId == attribute?.id) ? 'bg-green-600 text-white' : 'bg-green-200'}`} onClick={() => {
                                        setProductPrice(attribute.attribute_final_price);
                                        setAttributeId(attribute?.id)

                                        setSelectedAttribute(attribute)
                                    }
                                    }>{attribute?.attribute_value}</button>
                                );
                            })}
                        </div>

                        <div className="flex my-4">
                            <input className="w-[4rem] mr-2" type="number" min={1} max={100} name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            <button className="bg-green-600 rounded-lg text-white px-4 py-2" onClick={(e) => {
                                e.preventDefault();
                                if(!selectedAttribute){
                                    Toaster('Please select variation first!', 'warn')
                                }
                                else if (Number(selectedAttribute?.stock) > 0) {
                                    addItem({
                                        id: selectedAttribute?.id + '-' + selectedAttribute?.product_id,
                                        product_id: selectedAttribute?.product_id,
                                        name: productDetails?.name + ' (' + selectedAttribute?.attribute_value + ')',
                                        slug: productDetails?.slug,
                                        price: selectedAttribute?.attribute_final_price,
                                        image: productDetails?.image?.small,
                                        stock: selectedAttribute?.stock
                                    }, quantity);
                                    Toaster('Product added to cart', 'success');
                                }
                                else {
                                    Toaster('Product is out of stock', 'warn')
                                }

                            }}>Add To Cart</button>
                        </div>
                    </div>

                </div>




            </Layout>
        </>
    );
}

export default ProductDetails;