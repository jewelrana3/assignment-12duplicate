import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useSelect from '../../hooks/useSelect';

const AllPopularItem = ({items}) => {
    
    const [refetch] = useSelect();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const { image, name, instructor, student, amount, availableSeats, _id } = items;

    const addToCart = (items) => {
        console.log(items)
        if (user && user?.email) {
            const navItem = { classesId: _id, name, instructor, image, amount, email: user?.email }
            fetch('http://localhost:3000/select',{
                method: 'POST',
                headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(navItem)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        navigate('')
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

    }
    return (
        <div className="pt-40 mb-12">
           <div style={{ width: '21rem' }} className="card w-96 bg-base-100 shadow-xl ">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className={`card-body ${availableSeats === 0 ? 'bg-red-500' : ''}`}>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p>Instructor: {instructor}</p>
                        <p>available_seat: {availableSeats}</p>
                        <p>Total Inroll: {student}</p>
                        <p>fees:$ {amount}</p>
                        <div className="card-actions justify-end">
                            <button  onClick={() => addToCart(items)} className="btn btn-outline btn-accent">Select</button>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default AllPopularItem;