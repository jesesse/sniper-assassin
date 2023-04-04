import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface LevelSelectProps {
	levelData: {
		levelNumber: number,
		characters: any[]
		levelImageUrl: string,
		levelTime: string
	}
}

function LevelSelect({ levelData }: LevelSelectProps) {

	const navigate = useNavigate();

	const goToLevel = () => {
		navigate("game/", {
			state: {
				levelData: levelData
			}
		})
	}

	return (
		<LevelSelectContainer>
			<StyledImg onClick={goToLevel} src={levelData.levelImageUrl} />
			<LevelNumber>{levelData.levelNumber}</LevelNumber>
		</LevelSelectContainer>
	);
}

const LevelSelectContainer = styled.div`
	width: 300px;
	height: 150px;
	position: relative;
`

const LevelNumber = styled.p`
	position: absolute;
	background-color: white;
	top: 0
`
const StyledImg = styled.img`
	width: 100%;
	height: 100%;
`

export default LevelSelect;
