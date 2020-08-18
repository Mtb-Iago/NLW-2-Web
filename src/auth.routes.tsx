import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import Landing from './pages/Landing';
import Login from './pages/Login';
//import Logoff from './pages/Logoff';

//aqui vai as rotas depois de logar.
function Auth(){
    return (
        <BrowserRouter>
            <Route Path="/login" component={Login} />
            
        </BrowserRouter>
    )
}



export  default Auth;