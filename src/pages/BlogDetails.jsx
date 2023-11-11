import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import '../assets/css/blogDetails.css'

const BlogDetails = () => {

    const [blogDetails, setBlogDetails] = useState();

    const { slug } = useParams();

    // console.log(slug);

    useEffect(() => {

        axios.get('blog/' + slug)
            .then(response => {
                console.log(response);
                if (response.data.success) {

                    setBlogDetails(response.data.data);
                }
            })

    }, [])
    // console.log(blogDetails);
    return (
        <>
            <Layout>

                <h3 className="text-red-500">This is blog details page</h3>

                {blogDetails && (

                    <div className="bg-white p-10 product_details">
                        <h2 className="text-2xl font-bold">{blogDetails.title}</h2>
                        <img src={blogDetails.image} className="" width={300} alt={blogDetails.alter_txt} />

                        <p>{HTMLReactParser(blogDetails.description)}</p>
                    </div>
                )}



            </Layout>
        </>
    );
}

export default BlogDetails;