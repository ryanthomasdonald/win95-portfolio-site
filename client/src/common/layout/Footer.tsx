import React from 'react';
// import { Link } from 'react-router-dom';
import Clock from "../pageComponents/Clock"
import "./Footer.css"

function Footer(): JSX.Element {
    return (
        <>
        {/* <div className="container-fluid gx-0"> */}
            <div className="row startBarBG gx-0">
                <div className="col-6">
                    <img className="startBarLeft" src="img/start-bar-full-left-side-test.png" />
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <img className="startBarRight" src="img/start-bar-full-right-side-no-clock.png" />
                    <div className="clock-text">
                        <Clock />
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default Footer;