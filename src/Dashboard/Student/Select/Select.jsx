import React from 'react';
import useSelect from '../../../hooks/useSelect';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Select = () => {
    const [refetch, select] = useSelect();

    const handleDelete = (item) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/select/${item._id}`,{
                    method:'DELETE',
                })
                .then(res =>res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'successfully delete',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
          })
       
    }
 
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-xl font-bold'>
                        
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Pay</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    select.map((item,idx) =>  <tr key={item._id}>
                    <th>
                        <label>
                           {idx + 1}
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.instructor}</td>
                    <td>$ {item.amount}</td>
                    <th>
                       <Link to={`/dashboard/payment/${item.classesId}`}><button className="btn btn-primary text-white bg-blue-500 py-2 px-2">pay</button></Link>
                    </th>
                    <th>
                        <button onClick={()=> handleDelete(item)} className="btn btn-primary bg-blue-500 py-2 text-white px-2">remove</button>
                    </th>
                </tr>)
                 }
                </tbody>
             
            </table>
        </div>
    );
};

export default Select;