import React from "react";


const TokenContext = React.createContext({
    token:'',
    isLogin: false,
    login: (token) => {},
    logout: () => {},
})

export default TokenContext;