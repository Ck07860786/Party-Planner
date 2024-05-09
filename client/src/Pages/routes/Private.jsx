import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import Spinner from "../Spinner";
import axios from "axios";
import { Outlet } from "react-router";

export default function PrivateRoute(){
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        const checkAuth =async()=>{
            const res = await axios.get('http://localhost:8080/api/v1/auth/user-auth');
          
            if(res.data.ok){
                setOk(true)
            }
            else{
                setOk(false)
            }
        }
        if(auth?.token) checkAuth();
    
    }, [auth?.token]);

    
        return ok ? <Outlet/> : <Spinner/>
    

}