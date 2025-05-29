

import { InformationLayout } from './InformationLayout'

export const Information = ({setIsGameEnded, setIsDraw,setField,isDraw, setCurrentPlayer, isGameEnded, currentPlayer}) => {


    const result = () => {
        if (isDraw === true) {
            return 'Ничья'
        }else if (isDraw === false && isGameEnded === true) {
            return `Победа: ${currentPlayer}`
        }else if (isDraw === false && isGameEnded === false){
            return `Ходит: ${currentPlayer}`
        }
    }

    return (<InformationLayout 
          setIsDraw={setIsDraw}
          setIsGameEnded={setIsGameEnded}
          result = {result}
          setCurrentPlayer={setCurrentPlayer}
          setField={setField}
          isGameEnded={isGameEnded}
          />)
    
}