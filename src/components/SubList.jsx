import React from "react";

function SubList(props){
    const {firstName, email, onCheked, id, eddit} = props;
    return(
    <tr>
     <td>{firstName}</td>
     <td>{email}</td>
     <input className="btn btn-primary"
      type="submit" 
      value="Delete"
       onClick={()=>{
        onCheked(id)
        }}>
       </input>

    </tr>
    );
}

export default SubList;
