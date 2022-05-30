import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowVerse } from '../features/window/windowSlice';

function IntroVerse(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseVerse = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowVerse(false))
    }

    return(
        <Rnd
        default={{
            x: 260,
            y: 0,
            width: 930,
            height: 740,
        }}
        minWidth={"930px"}
        minHeight={"740px"}
        bounds={"window"}
        lockAspectRatio={false}
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
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeVerse" />
                <map name="closeVerse">
                    <area onClick={(e) => handleCloseVerse(e)} shape="rect" coords="68,2,100,32" href="#" />
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
                <img className="window-img" src="img/introverse.png" />
            </div>
            <p>
                After four grueling months of learning full-stack web design from the ground up, 
                our trusty "dream team" of four ended up building "The IntroVerse" as our capstone 
                project.
                <br />
                <br />
                Our goal was to build a service which would help introverts navigate an increasingly
                extroverted world. The user starts by creating a simple account which includes
                a short quiz to determine their level of introversion. After the account is set 
                up, the user is then directed to the bulk of the site.
                <br />
                <br />
                We combined six different APIs to create the main piece of functionality and
                it was quite a challenge to get them all talking to each other properly. We 
                also had a bit longer than other classes to build this (due to a holiday break),
                so we opted to begin to teach ourselves TypeScript during said break. I'm glad 
                we did, as that gave me the courage to use TypeScript as the basis for this
                portfolio site!
                <br />
                <br />
                Our bootcamp actually had us make a video walkthrough of our capstone projects
                for our final presentations, so the YouTube link below will give you an in-depth
                overview of everything that the site has to offer.
                <br />
                <br />
                <a href="https://www.youtube.com/watch?v=iHgATn8byhI" target="_blank">Video Walkthrough</a> | <a href="https://github.com/ryanthomasdonald/introverse-client" target="_blank">GitHub Source</a>
            </p>
            </div>
        </div>
        </Rnd>
    );
};

export default IntroVerse;