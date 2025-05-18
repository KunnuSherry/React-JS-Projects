import { useState } from "react";
import Signin from "../../components/auth/signin";
import Signup from "../../components/auth/signup";
import CommonButton from "../../components/common-button";

function Auth() {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="w-full h-full flex flex-col">
                {/* Header */}
                <div className="w-full p-6 text-center bg-white shadow-sm">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome</h1>
                </div>
                
                {/* Auth Component - Full Screen */}
                <div className="flex-1 w-full h-full overflow-hidden">
                    {isLoginView ? <Signin /> : <Signup />}
                </div>
                
                {/* Toggle Button */}
                <div className="w-full p-6 flex justify-center bg-white shadow-sm">
                    <CommonButton 
                        className="text-white bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors duration-200" 
                        onClick={() => setIsLoginView(!isLoginView)}
                        buttonText={isLoginView ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Auth;