import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowBirDB } from '../features/window/windowSlice';

function BirDB(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseBirDB = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowBirDB(false))
    }

    return(
        <Rnd
        default={{
            x: 260,
            y: 0,
            width: 800,
            height: 795,
        }}
        minWidth={"800px"}
        minHeight={"795px"}
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
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeBirDB" />
                <map name="closeBirDB">
                    <area onClick={(e) => handleCloseBirDB(e)} shape="rect" coords="68,2,100,32" href="#" />
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
                <img className="window-img-shadow" src="img/birDB.png" />
            </div>
                <p>
                "birDB" (a play on "bird database") is a light social media site based around birdwatching. The 
                bulk of the site functions as a bird journal, allowing users to upload information about  
                their sightings along with a photo. From there, the user can view sightings from other birdwatchers, 
                comment on their posts, search for similar sightings, and converse with other users in a standalone 
                chat window.
                <br />
                <br />
                We utilized and HEAVILY modified a template due to the time constraint, but other than that, the site was 
                built entirely from scratch in one week by a team of four. My role was to design
                a simple logo and then tackle a major part of the functionality. I opted to take on the 
                challenge of creating the page that passes all of the bird information to our database along with 
                passing a photo to an external image hosting service. Said functionality then retrieves a secure
                image URL from the image API and displays it along with the post.
                <br />
                <br />
                <a href="http://birdb.io/login" target="_blank">Live Link</a> | <a href="https://github.com/ryanthomasdonald/birDB-1" target="_blank">GitHub Source</a>
                </p>
            </div>
        </div>
        </Rnd>
    );
};

export default BirDB;