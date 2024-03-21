import React from "react";

const PasswordContext = React.createContext({
    passwords:[],
    addPassword: (password) => {},
    deletePassword: (id) => {},
    editPassword: (id) => {},
    updatePassword:[],
});



export default PasswordContext;