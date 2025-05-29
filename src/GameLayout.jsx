import { Field } from './components/Field';
import { Information } from './components/Information'
import  styles  from "./Game.module.css";
import PropTypes from 'prop-types';

export const GameLayout = ({ field, isDraw, setField, isGameEnded, currentPlayer,setIsDraw,setIsGameEnded, setCurrentPlayer}) =>{

    return(
        <div className={styles.main}>
            <Information 
        setField = {setField} 
        setIsDraw={setIsDraw}
        setIsGameEnded ={setIsGameEnded} 
        setCurrentPlayer = {setCurrentPlayer}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
         />
        <Field 
        field = {field} 
        currentPlayer={currentPlayer}
        setCurrentPlayer = {setCurrentPlayer}
        isGameEnded = {isGameEnded} 
        setField = {setField}
        setIsGameEnded ={setIsGameEnded} 
        setIsDraw={setIsDraw}
        />
        
        </div>
    )
}

GameLayout.propTypes = {
  field: PropTypes.string.isRequired
};