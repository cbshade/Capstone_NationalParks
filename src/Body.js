import React from 'react';
import Home from './components/pages/Home';
import Park from './components/pages/Parks';
import Mountain from './components/pages/Mountains';


export default function Body(props) {

    

    const pages = {
        home: <Home />,
        parks: <Park />,
        mountains: <Mountain />
    }

    return (
        <>
        <div>
            {pages[props.page]}
        </div>
        </>
    )    
}