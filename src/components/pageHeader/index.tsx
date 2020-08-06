import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

//para atribuir propriedades para os components, com isso posso usar a mesma função em vários lugares mudando seus parametros
interface PageHeaderProps {
    title: string;
    description?: string;  //propriedade do component opcional
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
               <div className="top-bar-container">
                   <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                   </Link>
                   <img src={logoImg} alt="proffy"/>
               </div>
               <div className="header-content">
                    <strong>{props.title}</strong>

                    { props.description && <p>{props.description}</p> }

                    {props.children}
               </div>               
           </header>
    );
}

export default PageHeader;