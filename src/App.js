import React from 'react'
import Board from './components/Board/Board'

// assets

import backImg from './assets/images/Card-Back.png';
import pair1 from './assets/images/pair-1.jpg';
import pair2 from './assets/images/pair-2.jpg';
import pair3 from './assets/images/pair-3.jpg';
import pair4 from './assets/images/pair-4.jpg';
import pair5 from './assets/images/pair-5.jpg';
import pair6 from './assets/images/pair-6.jpg';
import pair7 from './assets/images/pair-7.jpg';
import pair8 from './assets/images/pair-8.jpg';
import pair9 from './assets/images/pair-9.jpg';
import pair10 from './assets/images/pair-10.jpg';



function buildCards() {
  let id = 0
  const images = {pair1, pair2, pair3, pair4, pair5, pair6, pair7, pair8, pair9, pair10};
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}


const handleReset = () => {
  window.location.reload();
}

function App() {
  const cards = buildCards()
  return (
    <div className="App">
      <div id="main">
        <h1>Card-Match Game (React)</h1>
        <Board cards={cards} />
      </div>
      <div id="select">
        <button className="reset-btn" onClick={handleReset}>Restart</button>
      </div>
    </div>
  )
}

export default App;

