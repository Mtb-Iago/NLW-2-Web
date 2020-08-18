import React, { FormEvent, useContext } from 'react';
import AuthContext from '../../contents/auth';

function Logoff(){

    const {singOut } = useContext(AuthContext);

    //console.log(signed);
       async function handleSignOff(e: FormEvent){
       e.preventDefault()   
       singOut();  
        
    }

    return(      

        <main>
            <form onSubmit={handleSignOff}>
                
                <button type="submit">Logoff</button>
            </form>
             
        </main>


    )
    
}

export default Logoff;