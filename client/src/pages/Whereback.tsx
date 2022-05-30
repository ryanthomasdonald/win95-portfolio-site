import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowWB } from '../features/window/windowSlice';

function Whereback(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseWB = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowWB(false))
    }

    return(
        <Rnd
        default={{
            x: 292,
            y: 50,
            width: 790,
            height: 635,
        }}
        minWidth={"790px"}
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
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeWB" />
                <map name="closeWB">
                    <area onClick={(e) => handleCloseWB(e)} shape="rect" coords="68,2,100,32" href="#" />
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
                <img className="window-img-wb-shadow" src="img/background-neon.png" />
            </div>
                <p>
                "The Whereback Machine" is a site that takes in either today's date or a user-chosen date and 
                displays a "this-day-in-time" page. Along with scraping Wikipedia for the event information, 
                the site also utilizes Google Maps' API to display the location of the event.
                <br />
                <br />
                I opted to focus mostly on the design elements of the site, as this project was front-end-only 
                in addition to being our newly-formed group's first outing. I used HTML, CSS, and Photoshop to 
                get the basic design scaffolding in place and then built the date input form along with the JavaScript 
                needed to pass the user's chosen date to the bulk of the functionality. Being a one-size-fits-all 
                dropdown menu, the JS functionality checks for dates that don't exist. (February 29th is included
                at no extra cost!)
                <br />
                <br />
                <a href="https://thewherebackmachine.netlify.app/" target="_blank">Live Link</a> | <a href="https://github.com/ryanthomasdonald/Front-End-Project" target="_blank">GitHub Source</a>
                </p>
            </div>
        </div>
        </Rnd>
    );
};

export default Whereback;