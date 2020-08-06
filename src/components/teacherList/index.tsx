import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';



function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/61812132?s=460&u=c705640c8ecfac9b51d9e4268c404502273b4e0d&v=4" alt="Iago Oliveira"/>
                        <div>
                            <strong>Iago Oliveira</strong>
                            <span>Educação Física</span>
                        </div>
                    </header>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, nisi non pharetra gravida, risus nisl fringilla ligula, sed laoreet diam dui nec ipsum. Nulla maximus tristique leo, id interdum ex sagittis sed.<br /> Quisque dui erat, euismod quis mollis sit amet, posuere ut neque.<br /> Curabitur vehicula tristique dolor, eget ultrices nisl efficitur et. Aenean non accumsan nisl. Curabitur felis tellus, vulputate dignissim pellentesque non, interdum suscipit erat
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}
export default TeacherItem;
