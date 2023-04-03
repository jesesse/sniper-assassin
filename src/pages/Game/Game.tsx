import React from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import Timer from './components/Timer'
import styled from 'styled-components';

const Game = () => {

  const isMobile = useIsMobile();
  const location = useLocation();
  const [isTimerOn, setIsTimerOn] = React.useState(false)
  const [levelTime, setLevelTime] = React.useState(() => location.state.levelData.levelTime)
  const [charactersAndCoords, setCharactersAndCoords] = React.useState(() => location.state.levelData.charactersAndCoords)

  function timeIsOut() {
    setIsTimerOn(false)
  }
  
  return (
    <div>
      <Timer isTimerOn={isTimerOn} time={levelTime} timeIsOut={timeIsOut}></Timer>
      <LevelImage src={location.state.levelData.levelImageUrl}></LevelImage>
      <button onClick={()=>setIsTimerOn(prev => !prev)}>TIMER</button>
    </div>
  )
}

const LevelImage = styled.img`
  width: 500px;
`
export default Game