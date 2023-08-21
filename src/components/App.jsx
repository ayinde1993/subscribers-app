import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Sublist from './SubList';
import Input from './input';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

const [userList, setUserList]=useState([]);

function handleClick(fullInfo){

  setUserList((prevUserInfo)=>{
    return([ ...prevUserInfo, 
     fullInfo]);
  })

}

function deleteItem(id){
  console.log("yes");
  setUserList((prevItems)=>{
    return prevItems.filter((index)=>{
      return index !== id;
    });
  });

}


  return (

  <div className="container">

  <h2>SUBSCRIBERS</h2>
    <Input click={handleClick}/>
  <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
         
          {userList.map((user,index)=>{
            return (
              <Sublist key ={index} id={index} firstName ={user.fname} 
              email={user.email} onChecked={deleteItem}/>
            )
              
          })}
           
       
         
        </tbody>
      </table>
  
</div>

  
  );
}

export default App;

