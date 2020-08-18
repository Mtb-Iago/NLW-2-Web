import React, { FormEvent, useContext } from 'react';
import AuthContext from '../../contents/auth';

import  './styles.css';



function Login(){

    const { signed, singIn } = useContext(AuthContext);

    console.log(signed);
       async function handleSignIn(e: FormEvent){
       e.preventDefault()   
       singIn();  
        
    }

    return(
        

        <main>
            <form onSubmit={handleSignIn}>
                <label htmlFor="user">Email</label>   
                <input type="email" name="user"  />

                <label htmlFor="passworld">Senha</label>   
                <input type="password" name="password"  />

                <button type="submit">Login</button>
            </form>
             
        </main>


    )
    
}

export default Login;