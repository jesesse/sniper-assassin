import React from 'react'
import styled from 'styled-components'

interface TimerProps {
  time: string,
  hanldeTimeIsOut: () => void,
  handleWin: (params:string) => void,
  toggleTimer: boolean
}

const Timer = ({ time, hanldeTimeIsOut, handleWin, toggleTimer }: TimerProps) => {

  const [timer, setTimer] = React.useState(time);
  const [isTimerOn, setIsTimerOn] = React.useState(false)

  React.useEffect(() => {
    //initial condition to start the timer
    if (toggleTimer && !isTimerOn) setIsTimerOn(true)
    //condition to stop the timer
    if (!toggleTimer && isTimerOn) {
      if(timer !== "0:00") handleWin(timer);
      setIsTimerOn(false)
    }
  }, [toggleTimer, isTimerOn])

  React.useEffect(() => {
    if (isTimerOn) {
      let interval = setInterval(() => {
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
      }, 100);

      return () => clearInterval(interval);

    } else return;

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