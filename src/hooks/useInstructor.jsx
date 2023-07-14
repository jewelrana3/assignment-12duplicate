import React, { useEffect, useState } from 'react';

const useInstructor = () => {
    const [instructor,setInstructor] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/instructor')
        .then(res =>res.json())
        .then(data =>{
            setInstructor(data)
        })
    },[])
    return [instructor]
    
};

export default useInstructor;