import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
const [fullInfo, setFullInfo] =  useState({
  fname: "",
  email: ""

})

console.log(test);


const [userList, setUserList]=useState([{}]);

function handleChange(event){
  const {name, value} = event.target;
  setFullInfo((prevValue)=>{
    return {
      ...prevValue,
      [name]: value
    };
  })
}

function handleClick(event){
  const { name, value } = event.target;
  setUserList((prevUserInfo)=>{
    return[{...prevUserInfo, fullInfo}]
  })

}

  return (

  <div className="container">

  <h2>SUBSCRIBERS</h2>
  <form className = "formulaire">
    <div class="group">      
      <input onChange={handleChange} type="text" name = "fname"  value = {fullInfo.fname} required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Name</label>
     
    </div>
      
    <div className="group">      
      <input onChange ={handleChange} type="text" name = "email"  value = {fullInfo.email}  required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Email</label>
    </div>
    <button onClick ={handleClick}> 
          <span>Add Subscribers</span>
        </button>

  </form>
  <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
         
          {userList.map((user)=>{
            console.log(user);
            return 
              <tr>
              <td>{user.fname}</td>
              <td>{user.email}</td>
            </tr>
          })}
           
       
         
        </tbody>
      </table>
  
</div>

  
  );
}

export default App;

