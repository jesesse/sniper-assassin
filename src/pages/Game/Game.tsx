import React from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import LevelImage from './components/LevelImage';
import Timer from './components/Timer'
import styled from 'styled-components';
import BloodSplash from './components/BloodSplash';
import TargetsContainer from './components/TargetsContainer';
import CrossHair from './components/CrossHair';

interface LevelData {
  levelData: {
    levelNumber: number,
    characters: any[]
    levelImageUrl: string,
    levelTime: string
  }
}

const Game = () => {

  const isMobile = useIsMobile();
  const location = useLocation();
  const [cursorLocation, setCursorLocation] = React.useState({x: 1, y: 1})
  const { levelData } = location.state as LevelData;
  const [gameOver, setGameOver] = React.useState(false)
  const [toggleTimer, setToggleTimer] = React.useState(false)
  const [splashElements, setSplashElements] = React.useState<null | JSX.Element[]>(null)

  React.useEffect(() => {
    setToggleTimer(true)
  }, [])

  React.useEffect(() => {
    if (levelData.characters.length === 0) {
      setToggleTimer(false)
      console.log("LÄPI MENI")
    }
  }, [levelData.characters])

  const handleHover = (e: React.MouseEvent) => {
    setCursorLocation({x: e.pageX, y:e.pageY})
  }

  const handleClick = (e: React.MouseEvent) => {
    levelData.characters.forEach(char => {
      let name = char.name;
      if (((char.coordinates.x - 25 < e.pageX) && (char.coordinates.x + 25 > e.pageX)) &&
        ((char.coordinates.y - 25 < e.pageY) && (char.coordinates.y + 25 > e.pageY))
      ) {
        levelData.characters = levelData.characters.filter(char => char.name !== name);
        setSplashElements(prev => {
          if (prev === null) return [<BloodSplash key={e.pageX + e.pageY} x={e.pageX} y={e.pageY}></BloodSplash>]
          else return prev.concat(<BloodSplash key={e.pageX + e.pageY} x={e.pageX} y={e.pageY}></BloodSplash>)
        })
      }

    })


  }

  const hanldeTimeIsOut = () => {
    console.log("aikahan se loippu notta")
    setGameOver(true)
  }

  return (
    <GamePage>
      <LevelInfoBar>
        <LevelNameHeader>LEVEL NAME</LevelNameHeader>
        <Timer time={levelData.levelTime} hanldeTimeIsOut={hanldeTimeIsOut} toggleTimer={toggleTimer}></Timer>
        <TargetsContainer characters={levelData.characters}></TargetsContainer>
      </LevelInfoBar>
      {!gameOver &&
        <div>
          <LevelImage
            imgURL={levelData.levelImageUrl}
            handleHover={handleHover}
            handleClick={handleClick}
          />
          <CrossHair {...cursorLocation}></CrossHair>
          {splashElements}
        </div>
      }
      {gameOver && "TIME IS OUT YOU LOSER"}

    </GamePage>
  )
}

const GamePage = styled.div`

`

const LevelInfoBar = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  margin: auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffffac;
`

const LevelNameHeader = styled.h2`
  flex: 1;
  display: flex;
  justify-content: center;
`


export default Game