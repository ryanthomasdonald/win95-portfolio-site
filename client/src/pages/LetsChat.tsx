import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowChat } from '../features/window/windowSlice';

function LetsChat(): JSX.Element {

    const dispatch = useAppDispatch();
    const [resumeImg, setResumeImg] = useState("img/resume.png")

    const handleCloseChat = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowChat(false))
    }

    const ShowResumeLetters = () => {
        setResumeImg("img/resume-letters.png")
    }

    const HideResumeLetters = () => {
        setResumeImg("img/resume.png")
    }

    return(
        <Rnd
        default={{
            x: 315,
            y: 0,
            width: 520,
            height: 630,
        }}
        minWidth={"520px"}
        minHeight={"630px"}
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
                <img className="title-bar-left" alt="title bar" src="img/lets-chat-title-bar-left.png" />
            </div>
            <div className="col-1 d-flex justify-content-end">
                <img className="title-bar-right" alt="title bar" src="img/window-header-title-bar-right.png" useMap="#closeChat" />
                <map name="closeChat">
                    <area onClick={(e) => handleCloseChat(e)} alt="close window" shape="rect" coords="68,2,100,32" href="#" />
                </map>
            </div>
            </div>
            <div className="row menu-bar-bg-gray gx-0">
            <div className="col-6 menu-bar-bg-gray">
                <img className="menu-bar-left" alt="menu bar" src="img/window-header-menu-bar-left.png" />
            </div>
            </div>
            <div className="window-body-border">
            <p className="p-without-img-above">
                I'm excited to continue this new chapter in my life and if I've learned ANYTHING from my years 
                as a professional musician, it's that having a healthy network is a must when searching for 
                new opportunities.
                <br />
                <br />
                Connect with me via the links below!
                <br />
                <div className="row gx-0">
                    <div className="col-6 d-flex justify-content-end px-3 py-4">
                        <a href="https://github.com/ryanthomasdonald" target="blank"><img src="img/github-logo.png" alt="GitHub" width="130px" /></a>
                    </div>
                    <div className="col-6 d-flex justify-content-start px-3 py-4">
                        <a href="https://www.linkedin.com/in/ryan-donald-96351221a/" target="blank"><img src="img/li-logo.png" alt="LinkedIn" width="130px" /></a>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="col-6 d-flex justify-content-end px-3">
                        <a href="mailto:ryanthomasdonald@gmail.com" target="blank"><img src="img/gmail-logo.png" alt="Gmail" width="130px" /></a>
                    </div>
                    <div className="col-6 d-flex justify-content-start px-4">
                        <a className="resume-align" href="files/ryan-thomas-donald-resume-2023.pdf" target="blank"><img width="104px" src={resumeImg} onMouseOver={() => ShowResumeLetters()} onMouseOut={() => HideResumeLetters()} alt="resume" /></a>
                    </div>
                </div>
            </p>
            </div>
        </div>
        </Rnd>
    );
};

export default LetsChat;