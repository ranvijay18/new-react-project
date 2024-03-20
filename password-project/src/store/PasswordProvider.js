import PasswordContext from "./password-context"



const PasswordProvider = (props) => {

     const passwordContext = {
        passwords: [{...props.onAdd}]
     }

    return(
        <PasswordContext.Provider value={passwordContext}>
               {props.children}
        </PasswordContext.Provider>
    )
}

export default PasswordProvider;