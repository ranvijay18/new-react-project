import React from "react";


const TokenContext = React.createContext({
    token:[],
    addToken: (token) => {},
    removeToken: (token) => {}
})

export default TokenContext;