import { useState } from "react"

export default function Mytodo({names}){
    console.log(names);
    let namval = names.split(',')
    let Nam = namval[0];
    let des = namval[1];

    function deletebut(){
            alert('Are you want to delete?')
    }
   
    return(
        <>
            <div className="box">
                <h3>Name:{Nam}</h3>
                <h3>Description:{des}</h3>
              
                <div className="status">
                <h3 className="status">Status:</h3>
            
                <select className="option">
                    <option>Not Completed</option>
                    <option>completed</option>
                </select>
                </div>

                <br/>
                <br/>
                <button className="edit">Edit</button>
                <button className="delete" onClick={deletebut}>Delete</button>
            </div>
        </>
    )
}