import { useState } from 'react'
import axios from 'axios'
import './App.css';


function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [country, setcountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState('')

  const [employees, setEmployees] = useState([])


// create employee func
const createEmployee = () => {
   axios.post('http://localhost:3500/employees/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
   }).then((data) =>{
      console.log(data)
   }).catch((err) =>{
      console.log(err)
   })
}

// fetch employees
const displayEmployee = () => {
   axios.get('http://localhost:3500/employees')
   .then((res) =>{
      console.log(res)
      setEmployees(res.data.data)
   })
   .catch((err) =>{
      console.log(err)
   })
}

  return (
   <div className="App">
     <div className="container">
        <div className="form-controls">
           <label>Name</label>
           <input type="text"  onChange={ (e) => {setName(e.target.value)}}/>
        </div>
        <div className="form-controls">
           <label>Age</label>
           <input type="number" onChange={ (e) => {setAge(e.target.value)}}/>
        </div>
        <div className="form-controls">
           <label>Country</label>
           <input type="text" onChange={ (e) => {setcountry(e.target.value)}}/>
        </div>
        <div className="form-controls">
           <label>Position</label>
           <input type="text" onChange={ (e) => {setPosition(e.target.value)}} />
        </div>
        <div className="form-controls">
           <label>Wage</label>
           <input type="number"onChange={ (e) => {setWage(e.target.value)}} />
        </div>
        <button onClick={ createEmployee}>create Employee</button>
        <br />
        <button onClick={ displayEmployee}>show  Employees</button>
    </div>

    <div  className='result-div'>
        {employees.map((val) =>{
             return (
             <div key={val.id}  className="result-container"> 
                  <li>Name: {val.name}</li>
                  <li>Age: {val.age}</li>
                  <li>Country: {val.country}</li>
                  <li>Position: {val.position}</li>
                  <li>Wage: {val.wage}</li>
             </div>)
         })
        }
    </div>
   </div>
  );
}

export default App;
