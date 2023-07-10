import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";


const Login = () => {
    const { register, handleSubmit,reset } = useForm();
 
    const {signIn} = useContext(AuthContext)

    const onSubmit = (data)=>{
        signIn(data.email,data.password)
        .then((result)=>{
            const user = result.user;

            toast.success('login successfully')
            console.log(user)
            reset();
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className="container mx-auto bg-slate-100  max-w-md">
            <h1 className="text-2xl font-bold mt-24 text-center">Please Login</h1>
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
                <input className="bg-orange-400 py-2 rounded text-xl font-semibold" type="submit" value='Login' />
               </div>
               <div className="divider">OR</div>
            </form>
        </div>
    );
};

export default Login;