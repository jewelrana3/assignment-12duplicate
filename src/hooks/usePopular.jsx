import React, { useEffect, useState } from 'react';

const usePopular = () => {
    const [populars, setPopulars] = useState([])
    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => {
                setPopulars(data)
            })
    }, [])
   return[populars]
};

export default usePopular;