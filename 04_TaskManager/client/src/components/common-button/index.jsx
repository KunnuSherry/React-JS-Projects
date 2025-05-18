import {Button} from "../ui/button"
function CommonButton({onClick, buttonText, type, disabled}) {
    return ( 
        <Button
            type={type || "submit"} 
            onClick={onClick || null} 
            disabled={disabled || null}
            className="bg-black text-white"
        >
            {buttonText || "Click"}
        </Button>
     );
}

export default CommonButton;