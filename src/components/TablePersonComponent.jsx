import React from 'react';

const TablePersonComponent = () => {
  const myPerson = [
    {"Firstname": "Lalia",   "Lastname": "SY"},
    {"Firstname": "Youssou", "Lastname": "GUEYE"},
    {"Firstname": "Babacar", "Lastname": "DOUMBOUYA"},
    {"Firstname": "Fatou",   "Lastname": "DOUMBOUYA"},
    
]
    

  return ( 
    <div>
      <h1>TablePersonComponent</h1>
      <table className="table table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
      </thead>
      <tbody>
      {
          myPerson.map((person, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{person.Firstname}</td>
              <td>{person.Lastname}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>);
}
 
export default TablePersonComponent;