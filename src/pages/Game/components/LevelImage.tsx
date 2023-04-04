import React from 'react'
import styled from 'styled-components'

interface LevelImageProps {
  imgURL: string
  handleClick: (params: React.MouseEvent) => void
  handleHover: (params: React.MouseEvent) => void
}

const LevelImage = ({ imgURL, handleHover, handleClick }: LevelImageProps) => {

  return (
    <StyledImg
      src={imgURL}
      onClick={(e) => handleClick(e)}
      onMouseMove={(e) => handleHover(e)}
    />
  )
}

const StyledImg = styled.img`
  cursor: none;
  border: 1px solid black;
  width: 1924px;
  height: 1080px;
`

export default LevelImage