import React from "react";
import "../App.css";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowQuakeReadme } from '../features/window/windowSlice';

function QuakeReadme(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseQuakeReadme = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowQuakeReadme(false))
    }

    return (
        <Rnd
            default={{
                x: 990,
                y: 30,
                width: 450,
                height: 680,
            }}
            minWidth={"450px"}
            minHeight={"680px"}
            // lockAspectRatio={true}
            bounds={"window"}
            dragHandleClassName={"draggable"}
            className={"window-bg"}
            cancel={"no-drag"}
            resizeGrid={[10,10]}
            >
            <div className="window-content">
                <div className="row title-bar-bg-blue gx-0">
                <div className="col-11">
                    <img className="title-bar-left draggable" alt="title bar" src="img/quake-readme-title-bar-left.png" />
                </div>
                <div className="col-1 d-flex justify-content-end">
                    <img className="title-bar-right" alt="title bar" src="img/window-header-title-bar-right.png" useMap="#closeQuakeReadme" />
                    <map name="closeQuakeReadme">
                        <area onClick={(e) => handleCloseQuakeReadme(e)} alt="close window" shape="rect" coords="68,2,100,32" href="#" />
                    </map>
                </div>
                </div>
                <div className="row menu-bar-bg-gray gx-0">
                <div className="col-6 menu-bar-bg-gray">
                    <img className="menu-bar-left" alt="menu bar" src="img/window-header-menu-bar-left.png" />
                </div>
                </div>
                <div className="window-body-border">
                    <p className="doom-readme-text">
                        CONTROLS:
                        <ul>
                            <li>
                                WASD - Movement
                            </li>
                            <li>
                                SPACE - Jump
                            </li>
                            <li>
                                Mouse - Look/Fire (MB1)
                            </li>
                        </ul>
                        QUICK START:
                        <ul>
                            <li>
                                1. Click the bottom-most button on the 
                                game's menu bar to fullscreen the app 
                                (if desired).
                            </li>
                            <li>
                                2. Click the mouse pointer button and 
                                select the SECOND option. This enables 
                                mouse-focus and is required for the 
                                controls to work properly.
                            </li>
                            <li>
                                3. Click the left caret (the little tab) 
                                to hide the menu bar.
                            </li>
                            <li>
                                4. Click the main window one time and the 
                            app will capture your mouse.
                            </li>
                            <li>
                                5. Press ESC at anytime to exit fullscreen
                            and regain control of the mouse.
                            </li>
                            <li>
                                6. Navigate through the game menu using the
                            arrow keys and Enter.
                            </li>
                            <li>
                                7. Seek them Runes, boi!!!
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </Rnd>
    )
};

export default QuakeReadme;