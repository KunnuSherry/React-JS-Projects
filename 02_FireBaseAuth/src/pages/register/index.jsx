import { useContext } from "react"
import CommonForm from "../../components/common-form"
import { registerFormControls } from "../../config"
import { AuthContext } from "../../context"

function RegisterPage() {

    const { registerForData, setRegisterFormData, registerOnSubmit } = useContext(AuthContext)
    console.log(registerForData)
    return (
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h3>Welcome Back</h3>
                <p>Register Page</p>
                <CommonForm
                    formControls={registerFormControls}
                    formData={registerForData}         // ✅ correct prop name
                    setFormData={setRegisterFormData}
                    onSubmit={registerOnSubmit}
                    buttonText={'Save'}
                />

            </div>
        </div>
    )
}

export default RegisterPage