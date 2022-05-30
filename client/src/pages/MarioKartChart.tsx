import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowKart } from '../features/window/windowSlice';

function MarioKartChart(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseKart = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowKart(false))
    }

    return(
        <Rnd
        default={{
            x: 260,
            y: 0,
            width: 800,
            height: 805,
        }}
        minWidth={"800px"}
        minHeight={"805px"}
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
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeKart" />
                <map name="closeKart">
                    <area onClick={(e) => handleCloseKart(e)} shape="rect" coords="68,2,100,32" href="#" />
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
                <img className="window-img-shadow" src="img/header-final-2.png" />
            </div>
            <p>
                "Mario Kart Chart" was the final solo project in our bootcamp. Being based around React/Redux, 
                this assignment was the ultimate test of our front-end skills and I'm quite proud of what I ended 
                up with in only one week's time.
                <br />
                <br />
                The problem that I wanted to solve was this: To the uninitiated, quickly assembling your racer in Mario 
                Kart 8 Deluxe can be a daunting task, especially when playing online. This app functions as a reference 
                for new players, featuring all 13 data points that Nintendo's actual game code uses to decide the ultimate 
                performance of an assembly. Said data is then fed through Chart.js to provide far more resolution 
                than the in-game bar charts.
                <br />
                <br />
                All 118 items are accounted for and I built the API completely by hand. The data and item images were 
                pulled from <a href="https://www.mariowiki.com/Mario_Kart_8_Deluxe_in-game_statistics" target="_blank">this wiki</a> and 
                the site is rendered using a healthy mix of Chart.js, Bootstrap, custom CSS, 
                and custom Photoshop assets. I also hid myself in the app as the "Mii" option in the driver dropdown 
                menu. :)
                <br />
                <br />
                In the words of our fine, mustachioed friend, “Let’s go!”
                <br />
                <br />
                <a href="https://mario-kart-chart.netlify.app/" target="_blank">Live Link</a> | <a href="https://github.com/ryanthomasdonald/MK8-Racer-React-App" target="_blank">GitHub Source</a>
            </p>
            </div>
        </div>
        </Rnd>
    );
};

export default MarioKartChart;