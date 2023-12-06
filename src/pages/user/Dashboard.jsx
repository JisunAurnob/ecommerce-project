import React, { useContext, useEffect } from "react";
import Layout from "../../layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { UserContext } from "../../components/UserProvider";
import Toaster from "../../components/common/Toaster";

const Dashboard = () => {

    const { userData } = useContext(UserContext);

    return (
        <>
            <Layout>


                <DashboardLayout>
                    
                  <div>
                    <h3>Hello, {userData?.name}</h3>
                    <p>Email: {userData?.email}</p>
                    <p>Phone: {userData?.phone}</p>
                  </div>

                </DashboardLayout>



            </Layout>
        </>
    );
}

export default Dashboard;