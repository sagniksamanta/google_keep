import React from 'react';


const Footer = () =>
{
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <p>copyright    ©     {year}</p>
                <br />
                <p>By Sagnik   Samanta </p>
                <br />
            </div>

        
        </>

    );
}
export default Footer;