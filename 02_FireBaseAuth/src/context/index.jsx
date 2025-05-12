import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebaseConfig";

export const AuthContext = createContext(null);


export default function AuthState({children}){
    const [registerForData, setRegisterFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    function registerOnSubmit(event){
        event.preventDefault();
        const { email, password } = registerForData;
        return createUserWithEmailAndPassword(auth,email, password)
    }

    return <AuthContext.Provider value={{registerForData, setRegisterFormData, registerOnSubmit}}>{children}</AuthContext.Provider>
}