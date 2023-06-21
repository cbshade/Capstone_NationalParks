import React from 'react';
import './Navbar.css';
//import Logo from './components/images/logo.png';
export default function Navbar(props) {




    return (
        <>
            <nav className='container'>
                <div className="site-title">National Adventures</div>
                <ul>
                    <li>
                        <a href="https://www.google.com" onClick={(event) => { props.setPage("Home"); event.preventDefault(); }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" onClick={(event) => { props.setPage("Parks"); event.preventDefault(); }}>
                            National Parks
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" onClick={(event) => { props.setPage("Mountains"); event.preventDefault(); }}>
                            Mountains
                        </a>
                    </li>
                </ul>
            </nav>
        </>

    )
};