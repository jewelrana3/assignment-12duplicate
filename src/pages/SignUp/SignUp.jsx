import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();

    const { createUser, profileUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // if (data.password !== data.confirmPass) {
        //   toast.error("Password Does not match!");
        //   return;
        // }

        console.log(data);

        createUser(data.email, data.password)
            .then((result) => {
                if (result.user) {
                    profileUser(data.name, data.photoURL)
                        .then(() => {
                            const user = {
                                name: data.name,
                                email: data.email,
                                photo: data.photoURL,
                                role: 'student'
                            };
                            fetch('http://localhost:3000/users', {
                                method:'POST',
                                headers:{
                                    'content-type':'application/json'
                                },
                                body:JSON.stringify(user)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        toast.success('sign up successfully')
                                    }
                                    navigate('/')
                                })
                        })
                }
            })


    }

    return (
        <div className="container mx-auto bg-slate-100  max-w-md mb-12">
            <h1 className="text-2xl font-bold mt-24 text-center">Please Sign Up</h1>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email'
                        placeholder="email"
                        className="input input-bordered"
                        {...register("email", { required: true, maxLength: 20 })}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password'
                        placeholder="password"
                        className="input input-bordered"
                        {...register("password", { required: true, maxLength: 20 })}
                    />
                </div>

                <div className="form-control">
                    <input className="bg-orange-400 py-2 rounded text-xl font-semibold mt-4" type="submit" value='Sign Up' />
                </div>
               <p className="text-center ">Already Have <Link className="underline" to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;