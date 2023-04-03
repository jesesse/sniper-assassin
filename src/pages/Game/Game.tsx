import React from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import LevelImage from './components/LevelImage';
import Timer from './components/Timer'
import styled from 'styled-components';
import BloodSplash from './components/BloodSplash';

const Game = () => {

  const isMobile = useIsMobile();
  const location = useLocation();
  const [gameOver, setGameOver] = React.useState(false)
  const [levelImgURL, setLevelImageUrl] = React.useState(() => location.state.levelData.levelImageUrl)
  const [toggleTimer, setToggleTimer] = React.useState(false)
  const [levelTime, setLevelTime] = React.useState(() => location.state.levelData.levelTime)
  const [charactersAndCoords, setCharactersAndCoords] = React.useState(() => location.state.levelData.charactersAndCoords)
  const [clickedX, setClickedX] = React.useState<null | number>(null)
  const [clickedY, setClickedY] = React.useState<null | number>(null)
  const [splashElements, setSplashElements] = React.useState<null | JSX.Element[]>(null)
  
  React.useEffect(() => {
    setToggleTimer(true)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    setSplashElements(prev => {
      if (prev === null) return [<BloodSplash x={e.pageX} y={e.pageY}></BloodSplash>]
      else return prev.concat(<BloodSplash x={e.pageX} y={e.pageY}></BloodSplash>)
    })
    
  }

  const hanldeTimeIsOut = () => {
    console.log("aikahan se loippu notta")
    setGameOver(true)
  }

  return (
    <GamePage>
      {!gameOver &&
        <>
        <Timer time={levelTime} hanldeTimeIsOut={hanldeTimeIsOut} toggleTimer={toggleTimer}></Timer>
          <LevelImage
            imgURL={levelImgURL}
            handleClick={handleClick}
          />
        {splashElements}
        </>
      }
      {gameOver && "TIME IS OUT YOU LOSER"}

    </GamePage>
  )
}

const GamePage = styled.div`
  position: relative;
  text-align: center;
`


export default Game