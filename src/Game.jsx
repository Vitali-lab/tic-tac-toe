
import { GameLayout } from "./GameLayout";
import {  useState } from "react";

function Game() {
 
 const [currentPlayer , setCurrentPlayer] = useState('X')
 const [isGameEnded ,setIsGameEnded ] = useState(false)
 const [isDraw , setIsDraw ] = useState(false)
 const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(true)
 const [userNameX, setUserNameX] = useState('')
 const [userNameO, setUserNameO] = useState('')
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
    isFirstMenuOpen={isFirstMenuOpen}
    setIsFirstMenuOpen={setIsFirstMenuOpen}
    userNameX = {userNameX}
    userNameO = {userNameO}
    setUserNameX = {setUserNameX}
    setUserNameO = {setUserNameO}/>
  )
}

export default Game
