import React from "react";

function Sublist(props){
    return(
    <tr key = {props.key} >
     <td>{props.firstName}</td>
     <td>{props.email}</td>
     <input class="btn btn-primary" type="submit" value="Delete" onClick={()=>{props.onChecked(props.id)}}></input>

    </tr>
    )
}

export default Sublist;
