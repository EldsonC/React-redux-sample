import { logout } from "../redux/userSlice"
import { useDispatch } from "react-redux"

export const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}