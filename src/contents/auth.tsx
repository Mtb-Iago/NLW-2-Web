import React, { createContext, useState } from 'react';
import * as auth from '../services/auth'

interface AuthContextData {
    signed: boolean;
    singIn(): Promise<void>
    user: object | null
    singOut():void;

}
//aqui vai as autenticações.
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<object | null>(null)
    
    async function singIn(){
       const response = await auth.signIn();
       
       const { user, token } = response;

       setUser(response.user)
    }

    async function singOut(){
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{signed: !!user, singIn, user, singOut}}>
         {children}
        </AuthContext.Provider>
    )
    
}


  

export default AuthContext;