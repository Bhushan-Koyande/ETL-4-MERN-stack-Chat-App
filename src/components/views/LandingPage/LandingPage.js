import React from 'react'
import { FaRegComments } from "react-icons/fa";

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaRegComments style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Chatting !</span>
            </div>
            <div style={{ float:'right' }}>MERN Stack project</div>
        </>
    )
}

export default LandingPage
