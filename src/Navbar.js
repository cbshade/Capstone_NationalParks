import React from 'react';

export default function Navbar(props) {

    


    return (
        <>
            <div>
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
            </div>
        </>

    )
};