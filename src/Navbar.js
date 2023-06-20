import React from 'react';
import './Navbar.css';
import Logo from './components/images/logo.png';
export default function Navbar(props) {

    


    return (
        <>
            <nav className='container'>
            <div className="site-title">National Adventures</div>
                <ul>
                    <li>
                        <a href="#" onClick={() => props.setPage("Home")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => props.setPage("Parks")}>
                            National Parks
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => props.setPage("Mountains")}>
                            Mountains
                        </a>
                    </li>
                </ul>
            </nav>
        </>

    )
};