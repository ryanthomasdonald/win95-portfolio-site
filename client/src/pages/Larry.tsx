import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowLarry } from '../features/window/windowSlice';

function Larry(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseLarry = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowLarry(false))
    }

    return(
        <Rnd
        default={{
            x: 300,
            y: 80,
            width: 800,
            height: 635,
        }}
        minWidth={"800px"}
        minHeight={"635px"}
        lockAspectRatio={false}
        bounds={"window"}
        dragHandleClassName={"draggable"}
        className={"window-bg"}
        cancel={"no-drag"}
        resizeGrid={[10,10]}
        >
        <div className="window-content">
            <div className="row title-bar-bg-blue gx-0">
            <div className="col-11 draggable">
                <img className="title-bar-left" src="img/web-work-title-bar-left.png" />
            </div>
            <div className="col-1 d-flex justify-content-end">
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeLarry" />
                <map name="closeLarry">
                    <area onClick={(e) => handleCloseLarry(e)} shape="rect" coords="68,2,100,32" href="#" />
                </map>
            </div>
            </div>
            <div className="row menu-bar-bg-gray gx-0">
            <div className="col-6 menu-bar-bg-gray">
                <img className="menu-bar-left" src="img/window-header-menu-bar-left.png" />
            </div>
            </div>
            <div className="window-body-border">
            <div className="row d-flex justify-content-center gx-0">
                <img className="window-img-shadow" src="img/larryquest.png" />
            </div>
                <p>
                "LarryQuest" was the final project in our Python module and was a test to see if we could build
                a text-based RPG using object oriented programming. I wanted to recreate the experience of 
                playing the games of yesteryear, so I presented the project as if it were an actual game 
                one would play on an old DOS machine.
                <br />
                <br />
                I wrote out a full backstory for the characters, made the exposition scroll programmatically, 
                and ultimately just had a lot of fun coding my first game ever from scratch. I was particularly 
                proud of the robot character who you can get back on your side by rewiring him after his battery 
                drains to 0%.
                <br />
                <br />
                If you'd like to see the game in action, simply run "larryquest.py" from the GitHub repo in your 
                Terminal. 
                <br />
                <br />
                <a href="https://github.com/ryanthomasdonald/dc-rpg-game" target="_blank">GitHub Source</a>
                </p>
            </div>
        </div>
        </Rnd>
    );
};

export default Larry;