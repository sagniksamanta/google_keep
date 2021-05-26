import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


const App = () =>
{

    const [addItem , setAddItem] = useState([]);

    const addNote = (Note) => {
       setAddItem((prevData)=>{
           return [...prevData , Note];
       })

    }

    const onDelete = (id) =>{
        console.log("delete item");

        setAddItem((olddata) =>
            olddata.filter((currdata , indx) =>{
                return indx != id ;
            })
        );
    };

    return (
        <>
            <Header/>
            <CreateNote 
                passNote = {addNote}
            />
            
            {addItem.map((val , index) =>{
                return (
                    <Note 
                    key  = {index}
                    id = {index}
                    title = {val.title}
                    content = {val.content}
                    deleteItem = {onDelete}
                />
                );
            })}


            <Footer/>

        </>

    );
}
export default App;