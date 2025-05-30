
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout'
import { useEffect, useState } from 'react';

export const Information = ({setIsGameEnded, setIsDraw,setField,isDraw, setCurrentPlayer, isGameEnded, currentPlayer ,userNameX ,userNameO}) => {
 const [winsX, setWinsX] = useState(0)
 const [winsO, setWinsO] = useState(0)
 const [draws , setDraws] = useState(0)

    const result = () => {
        if (isDraw === true) {
            return 'Ничья'
        }else if (isDraw === false && isGameEnded === true) {
            return `Победа : ${currentPlayer === 'X'? userNameX + ' X ':userNameO + ' O '} `
        }else if (isDraw === false && isGameEnded === false){
            return `Ходит :  ${currentPlayer === 'X'? userNameX + ' X ':userNameO + ' O '} `
        }
    }

    const info = result()

    
    const resultTable = ( ) => {
        const winObj = {
            userNameX : winsX,
            userNameO : winsO, 
            draws : draws,
        }
         
        if (info.includes(`Победа : ${userNameX} X`)) {
            localStorage.setItem('table', JSON.stringify(winObj))
           return setWinsX(winsX + 1) 
        } else if(info.includes(`Победа : ${userNameO} O`)) {
            localStorage.setItem('table', JSON.stringify(winObj))
           return setWinsO(winsO + 1)
        } else if(info.includes(`Ничья`)){
            localStorage.setItem('table', JSON.stringify(winObj))
           return setDraws(draws + 1)
        }
    }

  
   
    const results = JSON.parse(localStorage.getItem('table'))

    useEffect(()=>{
         if (info.includes(`Победа : ${userNameX} X`)) {
           return setWinsX(winsX + 1) 
        } else if(info.includes(`Победа : ${userNameO} O`)) {
           return setWinsO(winsO + 1)
        } else if(info.includes(`Ничья`)){
           return setDraws(draws + 1)
        }
    },[isGameEnded])
    
    const refresh = () => {
               setIsDraw(false)
               setIsGameEnded(false)
               setField([ '','','','','','','','','',])
               setCurrentPlayer('X')

            }

    return (<InformationLayout 
          setIsDraw={setIsDraw}
          setIsGameEnded={setIsGameEnded}
          result = {result}
          setCurrentPlayer={setCurrentPlayer}
          setField={setField}
          isGameEnded={isGameEnded}
          refresh={refresh}
          results={results}
          userNameX={userNameX}
          userNameO={userNameO}
          resultTable={resultTable}
          winsX={winsX}
          winsO = {winsO}
          draws = {draws}
          
          />)
    
}

Information.propTypes = {
  setCurrentPlayer: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  setIsDraw: PropTypes.func,
  setField: PropTypes.func,
  refresh:PropTypes.func,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
  userNameX: PropTypes.string,
  userNameO: PropTypes.string,
}; 
