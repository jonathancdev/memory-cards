import React, {useState} from 'react'
import './App.css';
import Scoreboard from './Scoreboard'
import Card from './Card'
import Modal from './Modal'
import FailModal from './FailModal'
import WinModal from './WinModal'
import { 
  BorderCollie,
  GoldenRetriever,
  EnglishMastiff,
  Rottweiler,
  BassetHound,
  AfghanHound,
  Saluki,
  Borzoi,
  Greyhound,
  AlaskanMalamute,
  GreatDane,
  LabradorRetriever
} from './img/index'

function App() {

  const generateId = function() {
    const n = (Math.random() * 1000000).toFixed()
    const id = 'cardId' + n
    return id
  }

  const [cardArray, setCardArray] = useState([
    {title: "Border Collie", img: BorderCollie, key: generateId()},
    {title: "Golden Retriever", img: GoldenRetriever, key: generateId()},
    {title: "English Mastiff", img: EnglishMastiff, key: generateId()},
    {title: "Rottweiler", img: Rottweiler, key: generateId()},
    {title: "Basset Hound", img: BassetHound, key: generateId()},
    {title: "Afghan Hound", img: AfghanHound, key: generateId()},
    {title: "Saluki", img: Saluki, key: generateId()},
    {title: "Borzoi", img: Borzoi, key: generateId()},
    {title: "Greyhound", img: Greyhound, key: generateId()},
    {title: "Alaskan Malamute", img: AlaskanMalamute, key: generateId()},
    {title: "Great Dane", img: GreatDane, key: generateId()},
    {title: "Labrador Retriever", img: LabradorRetriever, key: generateId()}
  ])
  const [modalSwitch, setModalSwitch] = useState('default')
  const [currScore, setCurrScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const [totalClicks, setTotalClicks] = useState(0)

  const shuffle = function (array) {
    let currentIndex = array.length
    let randomIndex = 0
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }
    return array
  }

  const shuffleCards = function() {
    const shuffled = shuffle([...cardArray])
    setCardArray(shuffled)
  }
  const incrementScore = function() {
      setCurrScore(currScore + 1)
  }
  const incrementClicks = function () {
    setTotalClicks(totalClicks + 1)
  }
  const resetScore = function () {
    setCurrScore(0)
  }
  const resetTotalClicks = function () {
    setTotalClicks(0)
  }
  const updateClicked = function(array) {
    setClickedCards(array)
  }
  const chooseModal = function (param) {
    setModalSwitch(param)
  }
  const updateHighScore = function (value) {
    setHighScore(value)
  }
  const renderSwitch = function (param) {
    switch(param) {
      case 'default' :
        return <Modal chooseModal={chooseModal}/>;
      case 'fail' :
        return <FailModal chooseModal={chooseModal}
                          resetTotalClicks={resetTotalClicks}/>;
      case 'win' :
        return <WinModal resetScore={resetScore} 
                        updateClicked={updateClicked} 
                        chooseModal={chooseModal} 
                        resetTotalClicks={resetTotalClicks}
                        updateHighScore={updateHighScore}
                        currScore={currScore} 
                        highScore={highScore}/>;
      default :
        return null;
    }
  }
  return (
    <div className="App">
      { renderSwitch(modalSwitch) }
      <header className="App-header">
        <div className="title">
          <h2>MEMORY</h2>
          <h1>GAME</h1>
        </div>
        <Scoreboard
          currScore={currScore}
          highScore={highScore}
          totalClicks={totalClicks}
          updateHighScore={updateHighScore}
          chooseModal={chooseModal}
          updateClicked={updateClicked}
        />
      </header>
      <main className="App-main">
        <div className="grid">
          {cardArray.map( card => 
          <Card 
          key={card.key}
          dataKey={card.key}
          title={card.title} 
          img={card.img}
          clickedCards={clickedCards}
          updateClicked={updateClicked}
          increment={incrementScore}
          incrementClicks={incrementClicks}
          resetScore={resetScore}
          resetTotalClicks={resetTotalClicks}
          shuffle={shuffleCards}
          chooseModal={chooseModal}
          />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
