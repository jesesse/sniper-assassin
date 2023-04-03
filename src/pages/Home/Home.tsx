import React from 'react';
import styled from 'styled-components';
import { db, getDoc, doc, collection, getDocs } from '../../firebase/firebase';
import { useIsMobile } from '../../hooks/useIsMobile';
import LevelSelect from './components/LevelSelect';

interface LevelData {
	levelNumber: number,
	charactersAndCoords: any[]
	levelImageUrl: string,
	levelTime: string
}

function Home() {

	const isMobile = useIsMobile();
	const [levelsData, setlevelsData] = React.useState<null | LevelData[]>(null)

	React.useEffect(() => {
		getDocs(collection(db, "levels")).then(response => {
			//THIS SHOULD BE LevelData ARRAY, 
			//BUT I GUESS PROMISES CANNOT BE TYPED TO CERTAIN TYPES RIGHT AWAY?
			//THATS WHY IT IS TYPE: any[]
			let allLevelsData: any[] = [];
			response.forEach((levelData) => {
				allLevelsData.push(levelData.data())
			});
			setlevelsData(allLevelsData)
		});
	}, [])

	const levelSelectorElements = levelsData?.map((levelData: LevelData, index) => {
		return <LevelSelect key={"level" + index} levelData={levelData} />
	})

	return (
		<HomePage>
			<h1>Choose level</h1>
			<LevelSelectSection>
				{levelsData && levelSelectorElements}
				{!levelsData && "LOADING LEVELS..."}
			</LevelSelectSection>
		</HomePage>
	);
}

const LevelSelectSection = styled.div`
	display: flex;
	gap: 20px;
`

const HomePage = styled.div`
	gap: 20px;
  flex-flow: column;
  align-items: center;
  display: flex;
`

export default Home;
