import React from 'react'

interface TimerProps{
  isTimerOn: boolean,
  time: string | null
}

const Timer = ({isTimerOn, time}: TimerProps) => {
  return (
    <>
      <div>{isTimerOn}</div>
      <div>{time}</div>
    </>
  )
}

export default Timer