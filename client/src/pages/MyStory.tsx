import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowStory } from '../features/window/windowSlice';

function MyStory(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseStory = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowStory(false))
    }

    return(
        <Rnd
        default={{
            x: 160,
            y: 25,
            width: 920,
            height: 710,
        }}
        minWidth={"920px"}
        minHeight={"710px"}
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
                <img className="title-bar-left" src="img/window-header-title-bar-left.png" />
            </div>
            <div className="col-1 d-flex justify-content-end">
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeStory" />
                <map name="closeStory">
                    <area onClick={(e) => handleCloseStory(e)} shape="rect" coords="68,2,100,32" href="#" />
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
                <img className="window-img-howdy" src="img/howdy.png" />
            </div>
            
            <p>
                Thanks for taking a moment out of your busy day to travel back in time with me! 
                <br />
                <br />
                <a href="original-site/index.html">The 1.0 version of this portfolio site</a> unwittingly started its life as a simple "About Me" page
                that I was asked to make during my bootcamp's prerequisite work. While the initial site had an indelible 
                amount of what I'll call "charm", I felt like its codebase simply didn't illustrate
                just how much info I've crammed into my skull starting in September of 2021.
                <br />
                <br />
                Since I had already built a browser-within-a-browser for fun, I figured that the next 
                logical step was to replicate a classic OS using the skills I've been accumulating.
                Feel free to poke around here (and in <a href="https://github.com/ryanthomasdonald/windows-95-portfolio" target="_blank">my repo</a>), as I'll continue to add functionality in the coming 
                weeks/months/years. (And to answer the question you may have already asked yourself, yes, 
                it runs "Doom"!)
                <br />
                <br />
                Again, thanks for stopping by and hopefully our paths will cross somewhere on down the dusty trail.
                Because after all, the wild blue yonder won't ride off into itself, pardner...
            </p>
            </div>
        </div>
        </Rnd>
    );
};

export default MyStory;