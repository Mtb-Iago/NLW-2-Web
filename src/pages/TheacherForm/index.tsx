import React, {useState} from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/pageHeader';
import TextArea from '../../components/TextArea';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Select from '../../components/Select';



function TeacherForm(){

    const [scheduleItems, setScheduleItems] = useState([ 
        { week_day: 0,  from: '', to: ''}
    ])

    

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0,  from: '', to: ''}
        ]);
    }
    return(
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Que incrível que você quer dar aulas!"
            description="O primeiro passo é preencher esse formulário de inscrição"
         />

         <main>
             <fieldset>
                 <legend>Seus dados</legend>


                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                    <TextArea name="bio" label="bio" />
             </fieldset>

             <fieldset>
                 <legend>Sobre a aula</legend>

                    <Select
                        name="subect"
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Matématica', label: 'Matématica'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Lp1', label: 'Lp1'},
                            {value: 'Cálculo', label: 'Cálculo'},
                            {value: 'Sistemas Operacionais', label: 'Sistemas Operacionais'},
                            
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>
                    
             </fieldset>
             <fieldset>
                 <legend>Hórarios disponíveis
                 <button type="button" onClick={addNewScheduleItem}>
                    + Novo Horário
                 </button>
                 </legend>

                {scheduleItems.map(scheduleItem => {
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
                        <Select
                               name="week_day"
                               label="Dia da semana"
                               options={[
                                   {value: '0', label: 'Domingo'},
                                   {value: '1', label: 'Segunda-feira'},
                                   {value: '2', label: 'Terça-feira'},
                                   {value: '3', label: 'Quarta-feira'},
                                   {value: '4', label: 'Quinta-feira'},
                                   {value: '5', label: 'Sexta-feira'},
                                   {value: '6', label: 'Sábado'},
                                                               
                               ]}
                           />
                           <Input name="from" type="time" label="Das" />
                           <Input name="to" type="time" label="Até" />
                       </div>
                    )
                })}                 
             </fieldset>



             <footer>
                 <p>
                     <img src={warningIcon} alt="Aviso importante"/>
                     Importante! <br />
                     Preencha todos os dados
                 </p>
                 <button type="button">
                    Salvar cadastro
                 </button>
             </footer>
         </main>
    </div>
    )
}

export default TeacherForm;