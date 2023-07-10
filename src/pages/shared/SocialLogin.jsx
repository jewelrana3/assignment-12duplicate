import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SocialLogin = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default SocialLogin;