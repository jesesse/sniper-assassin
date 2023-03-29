import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import Timer from './components/Timer'




const Game = () => {

  const location = useLocation();
  const isMobile = useIsMobile();
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [levelTime, setLevelTime] = useState<null | string>(null)

  console.log(location.state.levelNumber)


  return (
    <div>
      <div>THIS IS LEVEL {location.state.levelNumber}</div>
      <Timer isTimerOn={isTimerOn} time={levelTime}></Timer>
    </div>
  )
}   

export default Game