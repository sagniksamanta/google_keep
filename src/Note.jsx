 
 import React from 'react';
 import DeleteIcon from '@material-ui/icons/Delete';


 const Note = (props) =>
 {

    const deleteNote = () =>{
        props.deleteItem(props.id);
    }
     return (
         <>
            <div className="note">
                <h2>{props.title}</h2>
                <br />
                <p> {props.content} </p>
                <button onClick = {deleteNote}>
                    <DeleteIcon  className = "deleteicon" />
                </button>


            </div>
 
         
         </>
 
     );
 }
 export default Note;