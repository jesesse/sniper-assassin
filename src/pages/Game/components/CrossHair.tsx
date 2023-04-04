
import React from "react";
import styled from "styled-components";

interface Props {
  x: number
  y: number
}

function CrossHair({ x, y }: Props) {
  let joo = {x,y}
  return (
    <StyledCrosshair {...joo}>
      <CenterPoint />
    </StyledCrosshair>
  );
}

const StyledCrosshair = styled.div.attrs<Props>(({x, y}: Props) => ({
  style: {
    top: y - 25 + 'px',
    left: x - 25 + 'px',
  },
}))`
display: flex;
justify-content: center;
align-items: center;
pointer-events: none;
position: absolute;
border-radius: 50%;
border: 3px solid black;
background-color: #0000003b;
width: 50px;
height: 50px;
z-index: 500;
`

const CenterPoint = styled.div`
border-radius: 50%;
width: 5px;
height: 5px;
background-color: red;
`

export default CrossHair;