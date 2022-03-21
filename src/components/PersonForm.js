import React, {useState} from 'react'

const PersonForm = ({onSavePerson}) => {
  
  const [formValues, setFormValues] = useState({
    name : '',
    age: '',
  })
  const {name, age} = formValues;
 
  const handleChange = (e) =>{
    console.log('e',e)
    setFormValues({
        ...formValues,
        [e.target.name] : e.target.value
    })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();  
    if(formValues.name.trim().length === 0 || formValues.age.trim().length === 0){
      return
    }

    if(+formValues.age < 1){
      return
    }
    onSavePerson(formValues.name, formValues.age);
    setFormValues({
        name : '',
        age: '',
    })
    console.log('Handlechange 2 ', formValues)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="namelabel" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" id="name"
                 onChange={handleChange} value={name}   />
                 
            </div>
            <div className="mb-3">
                <label for="agelabel" className="form-label">Age</label>
                <input type="text" className="form-control" id="age" name="age" 
                onChange={handleChange}  value={age} />
            </div>
             
            <button type="submit" className="btn btn-primary">Add Subject</button>
        </form>
    </>
  )
}

export default PersonForm