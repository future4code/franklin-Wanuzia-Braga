import  { useLayoutEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminTripsList } from "../routes/coordinator";

export const useUnprotectedPage = () => {
    const navigate = useNavigate();
    useLayoutEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("logado!!!");
        goToAdminTripsList(navigate);
      }
    }, [navigate]);
  };