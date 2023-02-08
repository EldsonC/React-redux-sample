import { useSelector } from "react-redux"
import { selectUser } from "../redux/userSlice";


export const User = () => {
    const  nome  = useSelector(selectUser);

    return (
        <div>
            <h1>Usuário: { nome } </h1>
        </div>
    )
}