import React from 'react'
import styled from 'styled-components'

interface TimerProps {
  time: string,
  hanldeTimeIsOut: () => void,
  toggleTimer: boolean
}

const Timer = ({ time, hanldeTimeIsOut, toggleTimer }: TimerProps) => {

  const [timer, setTimer] = React.useState(time);
  const [timerIsOn, setTimerIsOn] = React.useState(false)

  React.useEffect(() => {
    if (toggleTimer) setTimerIsOn(prev => !prev)
  }, [toggleTimer])

  React.useEffect(() => {
    if (timerIsOn) {
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
      }, 1000);

      return () => clearInterval(interval);

    } else return;

  }, [timerIsOn])

  React.useEffect(() => {
    if (timer === "0:00") {
      setTimerIsOn(false)
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