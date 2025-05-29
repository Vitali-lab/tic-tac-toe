import { useState } from 'react'
import { FieldLayout } from './FieldLayout'

export const Field = ({ field,setIsDraw, setCurrentPlayer, setIsGameEnded ,isGameEnded, currentPlayer , setField}) => {
   
    const [disabled,setDisabled] = useState(false)
 

     const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6] 
];

    

    function content(styles) {
       
    const draw = field.every(el => el !== '')                 
     if(draw === true) {
             setIsDraw(true)
             setIsGameEnded(true)
          
      }
       
       return field.map((el,index)=>{
                return(
                    <button className={styles.zone} key={index} onClick={(e)=>{ 
                        
                    if (field[index] === ''&& !isGameEnded) {
                    const newfield = [...field]
                    newfield[index] = currentPlayer
                    setField(newfield)
                    setCurrentPlayer(prev => prev === 'X'?'O':'X')
                     

                    for (let i = 0 ; i < WIN_PATTERNS.length; i++ ){
                    const [f,s,t] = WIN_PATTERNS[i]
                    if(newfield[f] && newfield[f] === newfield[s] && newfield[f] === newfield[t]) {
                    setIsGameEnded(true)
                    setCurrentPlayer(prev => prev === 'O'?'X':'O')
                    break
                    }}
                        
                    }}}>{el}</button>
                )})
        }

    
    return (
        <FieldLayout field={field} content = {content} />
    )
}

