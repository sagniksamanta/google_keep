import React from 'react';
import logo from './logo/logo.png';


const Header = () =>
{
    return (
        <>
            <div className = 'header'>
                <img src = {logo} alt = "logo" width = "100" height = "70" />
                <h1>  copy of google keep </h1>
            </div>

        
        </>

    );
}
export default Header;