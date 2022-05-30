import React from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks'
import { selectShowStory, selectShowMusic, selectShowTech, selectShowWeb, selectShowChat, selectShowVerse, selectShowKart, selectShowBirDB, selectShowWB, selectShowBJ95, selectShowLarry, selectShowDoom, selectShowQuake, selectShowDoomReadme, selectShowQuakeReadme, selectShowTodo } from './features/window/windowSlice';
import { updateShowStory, updateShowMusic, updateShowTech, updateShowWeb, updateShowChat } from './features/window/windowSlice';
import './App.css';
// import "../public/fonts/W95FA.otf"
import MyStory from "./pages/MyStory";
import MyMusic from "./pages/MyMusic";
import MyTech from "./pages/MyTech";
import WebWork from "./pages/WebWork";
import LetsChat from "./pages/LetsChat";
import IntroVerse from "./pages/IntroVerse";
import MarioKartChart from "./pages/MarioKartChart";
import BirDB from "./pages/BirDB";
import Whereback from "./pages/Whereback";
import BJ95 from "./pages/BJ95";
import Larry from "./pages/Larry";
import Doom from "./pages/Doom";
import Quake from "./pages/Quake";
import DoomReadme from "./pages/DoomReadme";
import QuakeReadme from "./pages/QuakeReadme";
import Todo from "./pages/Todo";

function App(): JSX.Element {

  const dispatch = useAppDispatch();
  const showMyStory = useAppSelector(selectShowStory);
  const showMyMusic = useAppSelector(selectShowMusic);
  const showMyTech = useAppSelector(selectShowTech);
  const showWebWork = useAppSelector(selectShowWeb);
  const showLetsChat = useAppSelector(selectShowChat);
  const showIntroVerse = useAppSelector(selectShowVerse);
  const showMarioKartChart = useAppSelector(selectShowKart);
  const showBirDB = useAppSelector(selectShowBirDB);
  const showWhereback = useAppSelector(selectShowWB);
  const showBJ95 = useAppSelector(selectShowBJ95);
  const showLarry = useAppSelector(selectShowLarry);
  const showDoom = useAppSelector(selectShowDoom);
  const showQuake = useAppSelector(selectShowQuake);
  const showDoomReadme = useAppSelector(selectShowDoomReadme);
  const showQuakeReadme = useAppSelector(selectShowQuakeReadme);
  const showTodo = useAppSelector(selectShowTodo);

  // const windowOrder: string[] = ["MyStory", "MyMusic", "MyTech", "WebWork", "LetsChat", "IntroVerse", "MarioKartChart", "BirDB", "Whereback", "BJ95", "Larry", "Doom", "DoomReadme"];

  const handleStoryDoubleClick = (e: Event | any) => {
    e.preventDefault();
    dispatch(updateShowStory(true));
  }

  const handleMusicDoubleClick = (e: Event | any) => {
    e.preventDefault()
    dispatch(updateShowMusic(true));
  }

  const handleTechDoubleClick = (e: Event | any) => {
    e.preventDefault()
    dispatch(updateShowTech(true));
  }

  const handleWebDoubleClick = (e: Event | any) => {
    e.preventDefault()
    dispatch(updateShowWeb(true));
  }

  const handleChatDoubleClick = (e: Event | any) => {
    e.preventDefault()
    dispatch(updateShowChat(true));
  }

  return (
    <>
      <div>
        <img className="story-icon no-text-select" src="img/desktop-icons/my-story-no-text.png" onDoubleClick={(e) => handleStoryDoubleClick(e)} />
        <div className="story-icon-text no-text-select" onDoubleClick={(e) => handleStoryDoubleClick(e)}>
          My Story
        </div>
      </div>
      <div>
        <img className="music-icon no-text-select" src="img/desktop-icons/my-music-no-text.png" onDoubleClick={(e) => handleMusicDoubleClick(e)} />
        <div className="music-icon-text no-text-select" onDoubleClick={(e) => handleMusicDoubleClick(e)}>
          My Music
        </div>
      </div>
      <div>
        <img className="tech-icon no-text-select" src="img/desktop-icons/my-tech-no-text.png" onDoubleClick={(e) => handleTechDoubleClick(e)} />
        <div className="tech-icon-text no-text-select" onDoubleClick={(e) => handleTechDoubleClick(e)}>
          My Tech
        </div>
      </div>
      <div>
        <img className="web-icon no-text-select" src="img/desktop-icons/web-work-no-text.png" onDoubleClick={(e) => handleWebDoubleClick(e)} />
        <div className="web-icon-text no-text-select" onDoubleClick={(e) => handleWebDoubleClick(e)}>
          Web Work
        </div>
      </div>
      <div>
        <img className="chat-icon no-text-select" src="img/desktop-icons/lets-chat-no-text.png" onDoubleClick={(e) => handleChatDoubleClick(e)} />
        <div className="chat-icon-text no-text-select" onDoubleClick={(e) => handleChatDoubleClick(e)}>
          Let's Chat!
        </div>
      </div>

      {/* {windowOrder.map(window => {
            {(Boolean(`show${window}`)) === false
              ?
              <>
              </>
              :
              <>
                {(`<${window} />`)}
              </>
              }
      })} */}

      {/* {(Boolean(`show${windowOrder[0]}`)) === false
      ?
      <>
      </>
      :
      <>
        {windowOrder[0]}
      </>
      } */}

      {showMyStory === false
      ?
      <>
      </>
      :
      <>
        <MyStory />
      </>
      }

      {showMyMusic === false
      ?
      <>
      </>
      :
      <>
        <MyMusic />
      </>
      }

      {showMyTech === false
      ?
      <>
      </>
      :
      <>
        <MyTech />
      </>
      }

      {showWebWork === false
      ?
      <>
      </>
      :
      <>
        <WebWork />
      </>
      }

      {showIntroVerse === false
      ?
      <>
      </>
      :
      <>
        <IntroVerse />
      </>
      }

      {showMarioKartChart === false
      ?
      <>
      </>
      :
      <>
        <MarioKartChart />
      </>
      }

      {showBirDB === false
      ?
      <>
      </>
      :
      <>
        <BirDB />
      </>
      }

      {showWhereback === false
      ?
      <>
      </>
      :
      <>
        <Whereback />
      </>
      }

      {showBJ95 === false
      ?
      <>
      </>
      :
      <>
        <BJ95 />
      </>
      }

      {showLarry === false
      ?
      <>
      </>
      :
      <>
        <Larry />
      </>
      }

      {showDoom === false
      ?
      <>
      </>
      :
      <>
        <Doom />
      </>
      }

      {showQuake === false
      ?
      <>
      </>
      :
      <>
        <Quake />
      </>
      }

      {showDoomReadme === false
      ?
      <>
      </>
      :
      <>
        <DoomReadme />
      </>
      }

      {showQuakeReadme === false
      ?
      <>
      </>
      :
      <>
        <QuakeReadme />
      </>
      }

      {showTodo === false
      ?
      <>
      </>
      :
      <>
        <Todo />
      </>
      }

      {showLetsChat === false
      ?
      <>
      </>
      :
      <>
        <LetsChat />
      </>
      }
    </>
  );
}

export default App;