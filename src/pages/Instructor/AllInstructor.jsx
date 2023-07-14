import React from 'react';
import useInstructor from '../../hooks/useInstructor';

const AllInstructor = () => {
    const [instructor] = useInstructor();
    return (
        <div className="pt-40 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                instructor?.map(item => <div style={{ width: '23rem' }} key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">

                    <figure><img src={item.image} alt="Shoes" /></figure>

                    <div className="card-body">
                        <h2 className="card-title"> {item.name}</h2>
                        <p>{item.email}</p>
                        <p>Teaching: {item.title}</p>
                        <p>Student: {item.student}</p>
                     

                    </div>
                </div>)
            }
        </div>
    </div>
    );
};

export default AllInstructor;