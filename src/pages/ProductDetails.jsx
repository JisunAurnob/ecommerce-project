import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import '../assets/css/blogDetails.css'

const ProductDetails = () => {

    const [productDetails, setProductDetails] = useState();
    const [productPrice, setProductPrice] = useState(0);
    const [attributeId, setAttributeId] = useState();

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
                            {productDetails?.attributes.map((attribute,index)=>{
                                return(
                                    <button key={index} className={`p-4 rounded-lg mr-4 ${(attributeId==attribute?.id) ? 'bg-green-600 text-white' : 'bg-green-200'}`} onClick={()=>{
                                        setProductPrice(attribute.attribute_final_price);
                                        setAttributeId(attribute?.id)}}>{attribute?.attribute_value}</button>
                                );
                            })}
                        </div>
                    </div>

                </div>
               



            </Layout>
        </>
    );
}

export default ProductDetails;