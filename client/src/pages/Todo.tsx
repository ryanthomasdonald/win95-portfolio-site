import React from "react";
import "../App.css";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowTodo } from '../features/window/windowSlice';

function Todo(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseTodo = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowTodo(false))
    }

    return (
        <Rnd
            default={{
                x: 610,
                y: 50,
                width: 450,
                height: 420,
            }}
            minWidth={"450px"}
            minHeight={"420px"}
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
                    <img className="title-bar-left draggable" src="img/todo-title-bar-left.png" />
                </div>
                <div className="col-1 d-flex justify-content-end">
                    <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeTodo" />
                    <map name="closeTodo">
                        <area onClick={(e) => handleCloseTodo(e)} shape="rect" coords="68,2,100,32" href="#" />
                    </map>
                </div>
                </div>
                <div className="row menu-bar-bg-gray gx-0">
                <div className="col-6 menu-bar-bg-gray">
                    <img className="menu-bar-left" src="img/window-header-menu-bar-left.png" />
                </div>
                </div>
                <div className="window-body-border">
                    <p className="doom-readme-text">
                        PRIORITY:
                        <ul>
                            <li>
                                1. FIGURE OUT A PLAN FOR MOBILE!!!
                            </li>
                            <li>
                                2. Devise a solution for "bring to
                                front when clicked" window functionality.
                            </li>
                        </ul>
                        <br />
                        SECONDARY:
                        <ul>
                            <li>
                                1. See if there's ANY way to get 
                                JS-DOS to render with a 4:3 aspect
                                ratio.
                            </li>
                            <li>
                                2. Work on getting the Start menu
                                functional (if only for looks).
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </Rnd>
    )
};

export default Todo;