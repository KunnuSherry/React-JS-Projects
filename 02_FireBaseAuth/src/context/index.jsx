import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
    const [registerForData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loginFormData, setLoginFormData] = useState({
        email : '',
        password : ''
    })

    function loginWithFirebase(){
        const {email, password} = loginFormData
        return signInWithEmailAndPassword(auth, email, password)
    }

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    console.log(user);

    function registerOnSubmit() {
        const { email, password } = registerForData;
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        return signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ registerForData, setRegisterFormData, registerOnSubmit, loading, user, loginFormData, setLoginFormData, loginWithFirebase, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
