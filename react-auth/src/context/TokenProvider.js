import TokenContext from './token-context'
import { useState } from 'react'

const TokenProvider = (props) => {
    const [token, setToken] = useState([])

    const handleAddToken = (token) => {
         setToken(token);
         console.log(token);
    }

    const handleRemoveToken = () => {
          setToken([]);
    }

    const tokenContext = {
       token: token,
       addToken: handleAddToken,
       removeToken: handleRemoveToken
    }
     return(
        <TokenContext.Provider value={tokenContext}>
            {props.chidren}
        </TokenContext.Provider>
     )
}

export default TokenProvider;