import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/api";

const Logout = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function performLogout() {
      try {
        const response = await axiosInstance.post("/auth/logout", {});
        if (response.status === 200) {
          auth?.setIsLoggedIn({ userName: "", status: false });
          navigate("/");
        }
      } catch (e) {
        console.log("Error while logging out", e);
      }
    }
    performLogout();
  }, []);

  return null;
};

export default Logout;
