import React from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import Timer from './components/Timer'
import styled from 'styled-components';

const Game = () => {

  const location = useLocation();
  const isMobile = useIsMobile();
  const [isTimerOn, setIsTimerOn] = React.useState(false)
  const [levelTime, setLevelTime] = React.useState(() => location.state.levelData.levelTime)
  const [charactersAndCoords, setCharactersAndCoords] = React.useState(() => location.state.levelData.charactersAndCoords)

  console.log(charactersAndCoords)


  return (
    <div>
      <Timer isTimerOn={isTimerOn} time={levelTime}></Timer>
      <LevelImage src={location.state.levelData.levelImageUrl}></LevelImage>
    </div>
  )
}

const LevelImage = styled.img`
  width: 500px;
`
export default Game