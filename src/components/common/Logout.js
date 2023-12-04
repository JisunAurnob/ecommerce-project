import axios from "axios";
import Toaster from "./Toaster";
// import { UserContext } from "../UserProvider";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

export default function logOut(token) {
    // const { userData, updateUserData } = useContext(UserContext);
    // const navigate = useNavigate();

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.post("customer/logout")
        .then(function (resp) {
            if (resp.data.success) {

                Toaster('Successfully logged out', 'success');
                localStorage.removeItem("user");
                // updateUserData(null);

                // navigate("/", { replace: true });

                return true;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}