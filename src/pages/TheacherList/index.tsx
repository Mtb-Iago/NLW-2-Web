import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/pageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/teacherList';



import './styles.css';

function TeacherList(){
    return(
       <div id="page-teacher-list" className="container">
           <PageHeader title="Esses são os proffys escolhidos">
                <form id="search-teachers">
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
                   <Input name="time" type="time" label="Horário" />

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
       </div>
    )
}

export default TeacherList;