import { Navigate } from "react-router-dom"
import {useContext} from "react"
import { AuthContext } from "../../context"

function AuthPage({children}){

    const {user, loading} = useContext(AuthContext)

    if(loading) return <h1>Loading the data</h1>

    if(user) return children

    return <Navigate to={"/login"}/>
}

export default AuthPage