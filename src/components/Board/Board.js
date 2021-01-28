import React, {useState, useEffect} from 'react'
import Card from '../Card/Card';
import Noty from 'noty';
import "../../../node_modules/noty/lib/noty.css";  
import "../../../node_modules/noty/lib/themes/mint.css"; 

// styled-component
import BoardDiv from "./styled/BoardStyle";



const Board = props => {
  const [cards, setCards] = useState(props.cards);
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [count, setCount] = useState(61);
  const [score, setScore] = useState(0);
  


  const onCardClick = card => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return
    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type])
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }
    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }
    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id
    }
    function checkersFull(checkers){
      return checkers.length === 2
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([])
      }, time)
    }
  }

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped:
        checkers.find(c => c.id === card.id) ||
        completed.includes(card.type),
    }))
    setCards(newCards);
    
    if(completed.length === 8){
      new Noty({
        text: 'Yoo! All Cards Matched',
        type: 'success',
        layout: 'topLeft',
        theme: "mint"
      }).show();
    }

    setCount(() => count -1);

    if(completed.length === 1){
      setScore(() => 20)
    }else if(completed.length === 2){
      setScore(() => 40)
    }else if(completed.length === 3){
      setScore(() => 60)
    }else if(completed.length === 4){
      setScore(() => 80)
    }else if(completed.length === 5){
      setScore(() => 100)
    }else if(completed.length === 6){
      setScore(() => 120)
    }else if(completed.length === 7){
      setScore(() => 140)
    }else if(completed.length === 8){
      setScore(() => 160)
    }


  }, [checkers, completed])


  if(count < 1){
    // window.location.reload();
    // alert("No tries Left");
    new Noty({
      text: 'No Tries Left',
      type: 'warning',
      layout: 'topRight',
      theme: "mint"
    }).show();

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  const handleReset = () => {
    window.location.reload();
  }

  var color = count < 15 ? "red" : count < 40 ? "#FFDF00" : "black";

  const h2Styles = {
    // float: "right",
    // marginRight: "10%",
    textAlign: "center"
  }

  
  return (
    <React.Fragment>
      <h2 style={h2Styles}> <span style={{color: 'black'}}>Tries</span>: <span style={{color}}>{count}</span>/60</h2>
      <h3 style={h2Styles}>Score: {score}/160</h3>
      <BoardDiv className="Board">
        {cards.map(card => (
          <Card {...card} onClick={onCardClick(card)} key={card.id} />
        ))}
      </BoardDiv>
      <div id="select">
        <button className="reset-btn" onClick={handleReset}>Restart</button>
      </div>
    </React.Fragment>
  )
}

export default Board
