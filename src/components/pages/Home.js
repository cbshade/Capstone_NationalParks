import React from 'react';
import Logo from '../images/logo.png';
import Images from '../../CarouselImages';


export default function Home() {

    return (
        <>
            <h1>Discover the outdoors with National Adventures</h1>
            <div>
                <img src={Logo} alt="capstone logo" />
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div>
                <Images />
            </div>
        </>
    )
}