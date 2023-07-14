import React, { useEffect, useState } from 'react';

const useUser = () => {
    const [user,setuser] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res =>res.json())
        .then(data =>{
            setuser(data)
        })
    },[])
    return [user]
    
};

export default useUser;