import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowMusic } from '../features/window/windowSlice';

function MyMusic(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseMusic = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowMusic(false))
    }

    return(
        <Rnd
        default={{
            x: 725,
            y: 200,
            width: 500,
            height: 470,
        }}
        minWidth={"500px"}
        minHeight={"470px"}
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
                <img className="title-bar-left" src="img/my-music-title-bar-left.png" />
            </div>
            <div className="col-1 d-flex justify-content-end">
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeMusic" />
                <map name="closeMusic">
                    <area onClick={(e) => handleCloseMusic(e)} shape="rect" coords="68,2,100,32" href="#" />
                </map>
            </div>
            </div>
            <div className="row menu-bar-bg-gray gx-0">
            <div className="col-6 menu-bar-bg-gray">
                <img className="menu-bar-left" src="img/window-header-menu-bar-left.png" />
            </div>
            </div>
            <div className="window-body-border">
                <p className="p-without-img-above">
                    No webpage about music is complete without a diatribe outlining the pros and 
                    cons of streaming services, but as a humble bassist, I'll spare you that soapbox for now.
                    <br />
                    <br />
                    Regardless, click the link below!
                    <br />
                    <br />
                    <div className="row gx-0">
                        <div className="col d-flex justify-content-center">
                            <a href="https://open.spotify.com/artist/4wzILxEdnni4pGRUyJIVAp?si=5aGMnCRYSQucJCb_GDLYrA&dl_branch=1" target="blank"><img src="img/spotify-logo.png" alt="Spotify"
                        width="150"
                        height="auto" />
                        </a>
                        </div>
                    </div>
                </p>
            </div>
        </div>
        </Rnd>
    );
};

export default MyMusic;