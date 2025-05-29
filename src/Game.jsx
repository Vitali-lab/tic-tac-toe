
import { GameLayout } from "./GameLayout";
import {  useState } from "react";

function Game() {
 
 const [currentPlayer , setCurrentPlayer] = useState('X')
 const [isGameEnded ,setIsGameEnded ] = useState(false)
 const [isDraw , setIsDraw ] = useState(false)


 const [field , setField]= useState([
  '','','',
  '','','',
  '','','',
 ]);

 

  return (
    <GameLayout 
    field = {field}
    isDraw = {isDraw}
    setIsDraw = {setIsDraw}
    isGameEnded={isGameEnded}
    setIsGameEnded={setIsGameEnded}
    currentPlayer={currentPlayer}
    setCurrentPlayer={setCurrentPlayer}
    setField = { setField }
    />
  )
}

export default Game
