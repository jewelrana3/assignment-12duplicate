import React, { useContext } from 'react';
import usePopular from '../../hooks/usePopular';
import AllPopularItem from './AllPopularItem';

const AllPopular = () => {
    const [popular] = usePopular();
    

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 pt-28 mb-28 ">
        {
        popular.map(items => <AllPopularItem
        key={items._id}
        items={items}
        ></AllPopularItem>)
        }
    </div>
    )
   


};

export default AllPopular;