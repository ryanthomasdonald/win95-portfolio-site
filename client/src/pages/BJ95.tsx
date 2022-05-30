import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowBJ95 } from '../features/window/windowSlice';

function BJ95(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseBJ95 = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowBJ95(false))
    }

    return(
        <Rnd
        default={{
            x: 300,
            y: 80,
            width: 800,
            height: 580,
        }}
        minWidth={"800px"}
        minHeight={"580px"}
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
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeBJ95" />
                <map name="closeBJ95">
                    <area onClick={(e) => handleCloseBJ95(e)} shape="rect" coords="68,2,100,32" href="#" />
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
                <img className="window-img-shadow" src="img/blackjack95.png" />
            </div>
                <p>
                In keeping with my theme of being "endearingly retro", I took our class assignment to build
                a blackjack app and spruced it up with a custom background. The game features 
                casino-accurate scoring (separate end-game functionality for the dealer and player), a hidden
                hole card, live hand tallying, and a wins counter.
                <br />
                <br />
                This project taught me how to incorporate my perpetually-fledgling graphic design skills 
                into the coding skills we were beginning to develop, as everything that isn't being dynamically 
                updated in the code is a static background image that I made from scratch in Photoshop. Getting 
                the functionality to line up with the background was a nice test of my critical thinking skills 
                as well as my patience.
                <br />
                <br />
                <a href="https://blackjack-95.netlify.app/" target="_blank">Live Link</a> | <a href="https://github.com/ryanthomasdonald/js-blackjack" target="_blank">GitHub Source</a>
                </p>
            </div>
        </div>
        </Rnd>
    );
};

export default BJ95;