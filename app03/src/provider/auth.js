import React from 'react'

export const AuthContext = React.createContext({});

export const AuthProvider = (props) =>  {
    const dados = {
        disciplina: 'Programação Front-End',
        professor: 'Márcio Bueno',
        dias: '2ªs e 4ªs'
    }
    return(

        <AuthContext.Provider value={(dados)}>
        {props.children}
        </AuthContext.Provider>
    )
}