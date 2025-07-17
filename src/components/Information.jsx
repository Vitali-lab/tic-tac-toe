
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout'
import { useEffect, useState } from 'react';
// import { useSelector , useDispatch } from "react-redux";
import { useRedux } from '../hooks/useRedux';

export const Information = ( ) => {
 const [winsX, setWinsX] = useState(0)
 const [winsO, setWinsO] = useState(0)
 const [draws , setDraws] = useState(0)
 const [state, dispatch] = useRedux()
    // const userNameX = useSelector((state)=> state.userNameX)
    // const userNameO = useSelector((state)=> state.userNameO)
    // const isDraw = useSelector((state)=> state.isDraw)
    // const isGameEnded = useSelector((state)=> state.isGameEnded) 
    // const currentPlayer = useSelector((state)=> state.currentPlayer) 

    const userNameX = state.userNameX
    const userNameO = state.userNameO
    const isDraw = state.isDraw
    const isGameEnded = state.isGameEnded
    const currentPlayer = state.currentPlayer


    

    

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
            dispatch({type:'SET_IS_DRAW', payload:false})
            dispatch({type:'SET_GAME_ENDED', payload:false})
            dispatch({type:"SET_FIELD",payload:[ '','','','','','','','','',]})
            dispatch({type:'SET_CURRENT_PLAYER', payload:'X'})

            }

    return (<InformationLayout 
          result = {result}
          refresh={refresh}
          results={results}
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
