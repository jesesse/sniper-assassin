import React from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../hooks/useIsMobile';
import LevelSelect from './components/LevelSelect';

function Home() {
	const isMobile = useIsMobile();

	const levelInfo = {
		name: "Paha",
		number: 4,
		difficulty: "easy"
	}

	console.log(isMobile)

	return (
		<HomePage>
			<h1>Choose level</h1>
			<div>
				<LevelSelect levelInfo={levelInfo} imageUrl={"sd"}></LevelSelect>
			</div>
		</HomePage>
	);
}

const HomePage = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

export default Home;
