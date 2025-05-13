import { useContext } from "react"
import { AuthContext } from "../../context"

function ProfilePage(){

    const {user, logout} = useContext(AuthContext)

    return(
        <div>{user.displayName}
        <br />
        {user.email}
        <br />
        <button onClick={logout}>Logout</button>
        </div>
    )
}

export default ProfilePage