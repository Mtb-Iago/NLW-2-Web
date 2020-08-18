import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
//import Login from './pages/Login';
import Logoff from './pages/Logoff';
import TeacherForm from './pages/TheacherForm';
import TeacherList from './pages/TheacherList';

//aqui vai as rotas sem logar
function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/logoff" component={Logoff} />
            
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;