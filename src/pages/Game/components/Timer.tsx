import React from 'react'

interface TimerProps {
  isTimerOn: boolean,
  time: string,
  timeIsOut: () => void;
}

const Timer = ({ isTimerOn, time, timeIsOut }: TimerProps) => {

  const [timer, setTimer] = React.useState(time);

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
      }, 10);
      return () => clearInterval(interval);
    } else return;

  }, [isTimerOn])

  React.useEffect(() => {
    if (timer === "0:00") {
      timeIsOut();
    }
  },[timer])


  return (
    <>
      <div>{timer}</div>
    </>
  )
}

export default Timer