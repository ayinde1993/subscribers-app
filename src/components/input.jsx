import React,{ useState } from "react";

function Input(props){

    const [fullInfo, setFullInfo] =  useState({
        fname: "",
        email: ""
      
      })

      function handleChange(event){
        const {name, value} = event.target;
        setFullInfo((prevValue)=>{
          return {
            ...prevValue,
            [name]: value
          };
        })
      }

    return( 
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
        <button onClick ={(event)=>{
            props.click(fullInfo);
            event.preventDefault();
            setFullInfo({
                fname: "",
                email: ""
            } )

        }}> 
              <span>Add Subscribers</span>
            </button>
    
      </form>
    )
}

export default Input;