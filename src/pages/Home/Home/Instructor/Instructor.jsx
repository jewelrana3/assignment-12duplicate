import React, { useEffect, useState } from 'react';
import useInstructor from '../../../../hooks/useInstructor';

const Instructor = () => {
   const [instructor] = useInstructor();
    return (
        <div className='mb-12'>
            <h2 className='text-center font-bold text-2xl mt-12 mb-10'>Instructor Class</h2>
            <div className="grid grid-cols-1 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    instructor.slice(0,3).map(item => <div key={item._id} style={{ width: '22rem' }} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {item.name}</h2>
                            <p>Instructor: {item.instructor}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;