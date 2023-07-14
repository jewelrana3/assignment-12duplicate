import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const useSelect = () => {
    const {user} = useContext(AuthContext)
    const { refetch, data:select = [] } = useQuery({
        queryKey: ['select',user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:3000/select?email=${user?.email}`,)
            return res.json();
        }
     
      })
    return [refetch,select]
};

export default useSelect;