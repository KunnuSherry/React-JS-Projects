import { useContext } from "react"
import CommonForm from "../../components/common-form"
import { registerFormControls } from "../../config"
import { AuthContext } from "../../context"
import { updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function RegisterPage() {

    const { registerForData, setRegisterFormData, registerOnSubmit, user, loading } = useContext(AuthContext)
    console.log(registerForData)

    const navigate = useNavigate()

    function handleRegisterFormSubmit(event) {
        event.preventDefault();
        registerOnSubmit().then(result => {
            if (result.user) {
                updateProfile(result.user, {
                    displayName: registerForData.name
                })
            }
        })
    }

    if(loading) return <h1>Loading Please Wait...</h1>
    if(user) navigate("/profile")

    return (
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h3>Welcome Back</h3>
                <p>Register Page</p>
                <CommonForm
                    formControls={registerFormControls}
                    formData={registerForData}         // ✅ correct prop name
                    setFormData={setRegisterFormData}
                    onSubmit={handleRegisterFormSubmit}
                    buttonText={'Save'}
                />

            </div>
        </div>
    )
}

export default RegisterPage