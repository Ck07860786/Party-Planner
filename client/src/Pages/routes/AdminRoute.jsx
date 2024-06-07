import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import Spinner from "../Spinner";
import axios from "axios";
import { Outlet } from "react-router";
import { BASE_URL } from "../../Helper/PortUrl";

export default function AdminRoute(){
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        const checkAuth =async()=>{
            const res = await axios.get(`${BASE_URL}/api/v1/auth/admin-auth`);
          
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