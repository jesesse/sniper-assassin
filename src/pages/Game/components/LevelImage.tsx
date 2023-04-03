import React from 'react'
import styled from 'styled-components'

interface LevelImageProps {
  imgURL: string
  handleClick: (params: React.MouseEvent) => void
}

const LevelImage = ({ imgURL, handleClick }: LevelImageProps) => {

  return (
    <StyledImg
      src={imgURL}
      onClick={(e)=> handleClick(e)}
    />
  )
}

const StyledImg = styled.img`
  border: 1px solid black;
  width: 1924px;
  height: 1080px;
`

export default LevelImage