import React from "react";


const curr_date  = new Date();
const curr_time = curr_date.getHours();
const time = curr_date.toLocaleTimeString();
var event = "";
const styleCss = {
};
if(curr_time >=5 && curr_time <=11)
{
  event = "Morning";
  styleCss.color = "green";
}
else if(curr_time >11 && curr_time <=16)
{
  event = "Noon";
  styleCss.color = 'yellow';
}
else if(curr_time >16 && curr_time <=18)
{
  event = "After Noon";
  styleCss.color = 'orange';
}
else if(curr_time >18 && curr_time <=22)
{
  event = "evening .";
  styleCss.color = 'red';
}
else if(curr_time >22 || curr_time <5)
{
  event = "Night .";
  styleCss.color = 'black';
}



function Heading()
{
    return (
        <div>
            <h1> Welcome Sagnik .....</h1>
            <h2> wish you a very good <span style = {styleCss}>{event}</span></h2>
            <h2> Now time is {time}</h2>
        </div>
    );
}

export default Heading;