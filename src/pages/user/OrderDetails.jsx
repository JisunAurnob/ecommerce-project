import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import axios from "axios";
import { UserContext } from "../../components/UserProvider";
import Toaster from "../../components/common/Toaster";
import Swal from "sweetalert2";

const OrderDetails = () => {
    const { userData, updateUserData } = useContext(UserContext);

    const { id } = useParams();

    const navigate = useNavigate();

    const [order, setOrder] = useState();

    useEffect(() => {

        if (userData?.token && !order) {
            axios
                .get("get-order/" + id)
                .then(response => {
                   if(response.data.success){

                    setOrder(response?.data?.data);
                   }

                }).catch(error => {
                    console.log(error);
                })
        }

    }, [userData, order])



    return (
        <>
            <Layout>

                <DashboardLayout>
                    <h3 className="fw-bold text-xl">Order details {order?.order_number}</h3>

                  {order?.time}

                  {/* {order?.order_details.map()} */}


                </DashboardLayout>



            </Layout>
        </>
    );
}

export default OrderDetails;