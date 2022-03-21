import React, {useState} from 'react'
import PersonForm from './PersonForm';
import PersonList from './PersonList';

const PersonCard = () => {
  const [persons, setPersons] = useState([]);

 
  const handlePerson = (name, age) => {
    setPersons( (prevState)=> {
      return [...prevState, {name:name, age:age}] 
    })
  }
  console.log('PersonName', persons);
  return (
    <div className="text-start">
        <PersonForm onSavePerson={handlePerson}/>
        <PersonList persons={persons}/> 
    </div>
  )
}

export default PersonCard