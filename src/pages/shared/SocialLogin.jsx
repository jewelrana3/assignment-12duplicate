import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const handleGoogle = () => {
        let from = location.state?.from?.pathanme || '/'

        signInGoogle()
        .then((result)=>{
            const user = result.user;
            console.log(user)

            const saveUser = {name:user.name,email:user.email,photo:user.photoURL,role:'student'};
            fetch("http://localhost:3000/users",{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res=>res.json())
            .then(data=>{

                navigate(from,{replace:true})
            })
        })
        .catch((err)=> console.log(err.message))
    }

    return (
        <div className="flex items-center justify-center mb-12 pb-6">
            <button  onClick={handleGoogle}>
               <FcGoogle className="h-16 w-12"></FcGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;