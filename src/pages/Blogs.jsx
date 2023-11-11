import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {

    const [blogs, setBlogs] = useState();

    useEffect(() => {

        axios.get('https://uol-v-2.hostprohub.com/api/blogs')
            .then(response => {
                console.log(response.data);
                setBlogs(response.data);
            })

    }, [])

    return (
        <>
            <Layout>

                <h3 className="text-red-500">This is blog page</h3>


                {blogs && blogs.map((blog, index) => {
                    return (
                        <Link to={`/blog/${blog.slug}`} key={index}>
                            <div className="bg-white m-6 p-6 rounded-lg flex">

                                <img src={blog.image} className="h-auto px-6" width={300} />

                                <div className="">
                                    <h3 className="text-2xl">{blog.title}</h3>
                                    <p>{blog.sub_title}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}


            </Layout>
        </>
    );
}

export default Blogs;