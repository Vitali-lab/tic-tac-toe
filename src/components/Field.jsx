
import { FieldLayout } from './FieldLayout'
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from "react-redux";
import { useRedux } from '../hooks/useRedux';

export const Field = () => {

    const [state, dispatch] = useRedux()

 
 const isGameEnded = state.isGameEnded
 const currentPlayer = state.currentPlayer
 const field = state.field
   
//  const dispatch = useDispatch()
//  const isGameEnded = useSelector((state)=> state.isGameEnded) 
//  const currentPlayer = useSelector((state)=> state.currentPlayer)
//  const field = useSelector((state)=> state.field) 
 



     const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6] 
];

    function content(styles) {
       
    const draw = field.every(el => el !== '')                 
     if(draw === true && isGameEnded === false) {
             dispatch({type:'SET_IS_DRAW', payload:true})
             dispatch({type:'SET_GAME_ENDED', payload:true})
          
      }
       
       return field.map((el,index)=>{
                return(
                    <button className={styles.zone} key={index} onClick={(e)=>{ 
                        
                    if (field[index] === ''&& !isGameEnded) {
                    const newfield = [...field]
                    newfield[index] = currentPlayer
                    dispatch({type:"SET_FIELD",payload:newfield})
                    dispatch({type:'TOGGLE_PLAYER'})
                    

                    for (let i = 0 ; i < WIN_PATTERNS.length; i++ ){
                    const [f,s,t] = WIN_PATTERNS[i]
                    if(newfield[f] && newfield[f] === newfield[s] && newfield[f] === newfield[t]) {
                    dispatch({type:'SET_GAME_ENDED', payload:true})
                    dispatch({type:'TOGGLE_PLAYER'})
                    break
                    }}
                        
                    }}}>{el}</button>
                )})
        }

    
    return (
        <FieldLayout  content = {content} />
    )
}

Field.propTypes = {
  field: PropTypes.array,
  setIsDraw: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  setField: PropTypes.func,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
}; 

