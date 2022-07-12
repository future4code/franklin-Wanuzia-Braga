import  { useLayoutEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

export const useProtectedPage = () => {
    const navigate = useNavigate();
    useLayoutEffect(() => {
      const token = localStorage.getItem("token");

      if (token === null) {
        console.log("Não está logado!!!");
        goToLogin(navigate);
      }
    }, [navigate]);
  };