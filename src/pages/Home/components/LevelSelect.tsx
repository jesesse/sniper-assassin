import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface LevelSelectProps {
	levelData: {
		levelNumber: number,
		charactersAndCoords: any[]
		imageUrl: string,
		levelTime: string
	}
	
}

function LevelSelect({ levelData }: LevelSelectProps) {

	const navigate = useNavigate();
	
	const goToLevel = () =>{
		navigate("game/", { state: { 
			
		 } })
	}

	return (
		<div>
			<StyledImg onClick={goToLevel} src={levelData.imageUrl}/>
		</div>
	);
}

const StyledImg = styled.img`
	width: 300px;
	height: 150px;
`

export default LevelSelect;
