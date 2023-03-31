import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import Timer from './components/Timer'
import styled from 'styled-components';
import { JsxElement } from 'typescript';


const Game = () => {

  const location = useLocation();
  const isMobile = useIsMobile();
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [levelTime, setLevelTime] = useState<null | string>(null)

  return (
    <div>
      <Timer isTimerOn={isTimerOn} time={levelTime}></Timer>
      <LevelImage src={location.state.imageUrl}></LevelImage>
    </div>
  )
}

const LevelImage = styled.img`
  width: 500px;
`
export default Game