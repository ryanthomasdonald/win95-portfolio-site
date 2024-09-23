import React from "react";
import "../App.css";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowQuake } from '../features/window/windowSlice';
import DosPlayer from "../common/pageComponents/DosPlayer";

function Quake(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseQuake = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowQuake(false))
    }

    return (
        <Rnd
            default={{
                x: 150,
                y: 0,
                width: 808,
                height: 685,
            }}
            minWidth={"450px"}
            minHeight={"450px"}
            lockAspectRatio={true}
            bounds={"window"}
            dragHandleClassName={"draggable"}
            className={"window-bg"}
            cancel={"no-drag"}
            resizeGrid={[10,10]}
            >
            <div className="window-content">
                <div className="row title-bar-bg-blue gx-0">
                <div className="col-11 draggable">
                    <img className="title-bar-left" src="img/quake-title-bar-left.png" />
                </div>
                <div className="col-1 d-flex justify-content-end">
                    <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeQuake" />
                    <map name="closeQuake">
                        <area onClick={(e) => handleCloseQuake(e)} shape="rect" coords="68,2,100,32" href="#" />
                    </map>
                </div>
                </div>
                <div className="row menu-bar-bg-gray gx-0">
                <div className="col-6 menu-bar-bg-gray">
                    <img className="menu-bar-left" src="img/window-header-menu-bar-left.png" />
                </div>
                </div>
                <div className="doom-window gx-0" style={{ width: "100%", height: "100%" }}>
                <DosPlayer bundleUrl="QUAKELOWERAUDIOFIX.jsdos" />
                </div>
            </div>
        </Rnd>
    )
};

export default Quake;