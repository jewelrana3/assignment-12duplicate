import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";


const SignUp = () => {
    const { register, handleSubmit,reset } = useForm();
 
    const {createUser,profileUser} = useContext(AuthContext)

    const onSubmit = (data) => {
        // if (data.password !== data.confirmPass) {
        //   toast.error("Password Does not match!");
        //   return;
        // }
    
        console.log(data);
        // createUser(data.email, data.password)
        //   .then((result) => {
        //     if (result.user) {
        //         profileUser(data.name, data.photoURL)
        //         .then(() => {
                  
        //           const user = {
                   
        //             name: data.name,
        //             email: data.email,
        //             image : data.photoURL,
                 
        //           };
        //         })
        //         .catch((err) => {
        //           console.log(err);
        //         });
        //     }
        //   })
        
      };
      
    return (
        <div className="container mx-auto bg-slate-100  max-w-md">
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
                <input className="bg-orange-400 py-2 rounded text-xl font-semibold" type="submit" value='Sign Up' />
               </div>
               <div className="divider">OR</div>
            </form>
        </div>
    );
};

export default SignUp;