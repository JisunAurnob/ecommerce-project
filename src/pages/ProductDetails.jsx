import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import '../assets/css/blogDetails.css'

const ProductDetails = () => {

    const [productDetails, setProductDetails] = useState();

    const { slug } = useParams();

    // console.log(slug);

    useEffect(() => {

        axios.get('get-product/' + slug)
            .then(response => {
                console.log(response);
                if (response.data.success) {

                    setProductDetails(response.data.data);
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

                    <div>
                        <h1 className=" font-bold text-2xl">{productDetails?.name}</h1>
                        <p className=""> {productDetails?.formatted_final_product_price} </p>
                    </div>

                </div>
               



            </Layout>
        </>
    );
}

export default ProductDetails;