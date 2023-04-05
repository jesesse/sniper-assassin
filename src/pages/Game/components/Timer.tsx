import React from 'react'
import styled from 'styled-components'

interface TimerProps {
  time: string,
  hanldeTimeIsOut: () => void,
  isTimerOn: boolean
}

const Timer = ({ time, isTimerOn, hanldeTimeIsOut }: TimerProps) => {

  const [timer, setTimer] = React.useState(time);

  React.useEffect(() => {
   
    //TIMERI EI SAMMU MISSÄÄN VAIHEESSA. GAME COMPONENTIN KÄSKY "EI MENE PERILLE"
    if (isTimerOn) {

      //TIMERI EI SAMMU MISSÄÄN VAIHEESSA. GAME COMPONENTIN KÄSKY "EI MENE PERILLE"
      let interval = setInterval(() => {
        console.log(isTimerOn)
        setTimer((prev) => {
          const currentTime = prev.split(':');
          const newTimeInSeconds = (+currentTime[0] * 60 + +currentTime[1]) - 1;
          const mins = Math.floor((newTimeInSeconds % 3600) / 60);
          const secs = Math.floor(newTimeInSeconds % 60);
          let newTime = "";
          newTime += "" + mins + ":" + (secs < 10 ? "0" : "");
          newTime += "" + secs;
          return newTime;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isTimerOn])


  React.useEffect(() => {
    if (timer === "0:00") {
      hanldeTimeIsOut();
    }
  }, [timer])


  return (
    <StyledTimer>{timer}</StyledTimer>
  )
}

const StyledTimer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 2rem;
`

export default Timer