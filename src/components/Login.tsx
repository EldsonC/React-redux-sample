import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeUser } from "../redux/userSlice";
import { StyleLogin } from "../style/login-style";

export const Login = () => {
    const [ name, setName ] = useState('');
    const dispatch = useDispatch()

    const handleLogin = (e:any) => {
        e.preventDefault()
        dispatch(changeUser(name))
    }
    return (
        <form>
            <h1>Login</h1>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleLogin}>
                Login
            </button>
            <hr />
        </form>
    )
}