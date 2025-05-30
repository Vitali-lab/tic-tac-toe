import { Field } from './components/Field';
import { Information } from './components/Information'
import { FirstMenu } from './components/FirstMenu';
import  styles  from "./Game.module.css";
import PropTypes from 'prop-types';

export const GameLayout = ({ field, isDraw, setField, isGameEnded,setIsFirstMenuOpen, isFirstMenuOpen, currentPlayer,setIsDraw,setIsGameEnded, setCurrentPlayer , userNameX, userNameO , setUserNameX,setUserNameO}) =>{

    return(
      
        <div className={styles.main}>
           {isFirstMenuOpen && <div className={styles.startGame}>
                <FirstMenu 
                setIsFirstMenuOpen={setIsFirstMenuOpen}
                setUserNameX = {setUserNameX}
                setUserNameO = {setUserNameO}
                userNameX = {userNameX}
                userNameO = {userNameO} />
            </div>}
            <Information 
        setField = {setField} 
        setIsDraw={setIsDraw}
        setIsGameEnded ={setIsGameEnded} 
        setCurrentPlayer = {setCurrentPlayer}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
        userNameX = {userNameX}
        userNameO = {userNameO}
         />
        <Field 
        field = {field} 
        currentPlayer={currentPlayer}
        setCurrentPlayer = {setCurrentPlayer}
        isGameEnded = {isGameEnded} 
        setField = {setField}
        setIsGameEnded ={setIsGameEnded} 
        setIsDraw={setIsDraw}
        setUserNameX = {setUserNameX}
        setUserNameO = {setUserNameO}
        />
        
        </div>
    )
}

GameLayout.propTypes = {
  field: PropTypes.array,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  isFirstMenuOpen: PropTypes.bool,
  currentPlayer: PropTypes.string,
  setField: PropTypes.func,
  setIsFirstMenuOpen: PropTypes.func ,
  setIsDraw: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  userNameX: PropTypes.string,
  userNameO: PropTypes.string,
  setUserNameX: PropTypes.func,
  setUserNameO: PropTypes.func ,

}; 
