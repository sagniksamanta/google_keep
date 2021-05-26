import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) =>
{
    const [Note , setNote] = useState({
        title : "",
        content : ""
    });

    const [expand , setExpand] = useState(false);
    const click = () => {
        setExpand(true);
    }
    const dclick = ()=>{
        setExpand(false);
    }

    const inputEvent = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setNote((prevData) =>
        {
            return{
                ...prevData,
                [name] : value,
            }
        });
        
    }

    const addEvent = () => {
        props.passNote(Note);
        setNote({
        title : "",
        content : ""
        })
    };

    return (
        <>
            <div className='main_note' >
                <div className = "form">
                    {expand ?
                    <input 
                     type='text'
                     placeholder = 'Title'
                     autoComplete="off" 
                     onChange = {inputEvent}
                     name = "title"
                     value ={Note.title}

                    /> : null}
                    <br></br>
                    <textarea 
                     rows="" column=""
                     placeholder = "write a note"
                     onChange = {inputEvent}
                     name = "content"
                     value = {Note.content}
                     onClick ={click}
                     onDoubleClick ={dclick}
                    />
                    {expand ?
                    <button className = "Button" onClick = {addEvent}>
                        <AddIcon className = "plus_sign"/>
                    </button> : null}
                </div>
            </div>

        
        </>

    );
}
export default CreateNote;