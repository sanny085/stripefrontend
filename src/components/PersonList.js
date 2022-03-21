import React from 'react'

const PersonList = ({persons}) => {
  return (
    <div>
    {
        persons && persons.map((person)=>{
            return(
                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    {person.name}
                    <span class="badge bg-primary rounded-pill">{person.age}</span>
                </li> 
                </ul>
            )
        })
    }   
    </div>
  )
}

export default PersonList