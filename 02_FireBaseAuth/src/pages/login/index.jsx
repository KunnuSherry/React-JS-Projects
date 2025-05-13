import { useContext } from "react"
import { LoginFormControls } from "../../config"
import { AuthContext } from "../../context"
import CommonForm from "../../components/common-form"
import { useNavigate } from "react-router-dom"

function LoginPage(){

    const {loginFormData, setLoginFormData, loginWithFirebase, user, loading} = useContext(AuthContext)
    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();
        loginWithFirebase().then((result)=>{
            console.log(result, 'result12345')
            if(result) navigate("/profile")
        })
    }

    if(loading) return <h1>Loading Please Wait...</h1>
    if(user) navigate('/profile')

    return (
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h3>Welcome Back</h3>
                <p>Login Page</p>
                <CommonForm
                    formControls={LoginFormControls}
                    formData={loginFormData}         // ✅ correct prop name
                    setFormData={setLoginFormData}
                    onSubmit={handleLogin}
                    buttonText={'Login'}
                />

            </div>
        </div>
    )
}

export default LoginPage