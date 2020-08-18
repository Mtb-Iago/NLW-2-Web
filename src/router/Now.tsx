import React, { useContext } from 'react';
import AuthContext from '../contents/auth';

import Routes from '../routes';
import Auth from '../auth.routes';

function Now(){
    const {signed} = useContext(AuthContext);

    return signed ?  <Routes /> : <Auth /> //se estiver true retorna Auth se nao Routes       
    
}

export default Now;