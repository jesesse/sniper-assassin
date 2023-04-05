
import React from "react";
import styled from "styled-components";

interface CrossHairProps {
  x: number
  y: number
}

function CrossHair(props: CrossHairProps) {

  return (
    <StyledCrosshair {...props}>
      <CenterPoint />
    </StyledCrosshair>
  );
}


const StyledCrosshair = styled.div.attrs<CrossHairProps>((props: CrossHairProps) => ({
  style: {
    top: props.y - 25 + 'px',
    left: props.x - 25 + 'px',
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