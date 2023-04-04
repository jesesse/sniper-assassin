import React from 'react'
import styled from 'styled-components'

interface TargetsContainerProps {
  characters: any[]
}

const TargetsContainer = ({ characters }: TargetsContainerProps) => {


  return (
    <StyledTargetContainer>
      <h2>TARGETS:</h2>
      {characters.map(char => {
        return <TargetImage key={char.name} src={char.characterImageUrl}></TargetImage>
      })}
    </StyledTargetContainer>
  )
}
const StyledTargetContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap:10px;
  align-items: center;
`
const TargetImage = styled.img`
  width: 50px;
  height: 50px;
`

export default TargetsContainer