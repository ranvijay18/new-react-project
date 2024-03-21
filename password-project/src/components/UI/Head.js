import { useContext } from "react"
import PasswordContext from "../../store/password-context"


const Head =()=>{

    const {passwords} = useContext(PasswordContext)
    return(
        <>
        <h1>Password Keeper</h1>
        <p>Total Passwords: {passwords.length}</p>
        </>
    )
}

export default Head;