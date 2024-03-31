import TokenContext from './token-context'
import { useState } from 'react'

const TokenProvider = (props) => {
    const [token, setToken] = useState(null)
    const isLoggedIn = !!token;
   

    const handleAddToken = (token) => {
         setToken(token);
    }

    const handleRemoveToken = () => {
          setToken(null);
    }

    const tokenContext = {
       token: token,
       isLogin: isLoggedIn,
       login: handleAddToken,
       logout: handleRemoveToken
    }
     return(
       <TokenContext.Provider value={tokenContext}>
         {props.children}
       </TokenContext.Provider>
     )
}

export default TokenProvider;