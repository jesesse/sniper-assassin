import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface LevelSelectProps {
	levelInfo: {
		number: number;
		name: string;
		difficulty: string;
	},
	imageUrl: string,
}

function LevelSelect({ levelInfo, imageUrl }: LevelSelectProps) {

	const navigate = useNavigate();
	
	const goToLevel = () =>{
		navigate("game/", { state: { levelNumber: levelInfo.number } })
	}

	return (
		<div>
			<button onClick={goToLevel}>{levelInfo.number}</button>
		</div>
	);
}

export default LevelSelect;
