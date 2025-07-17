import { Field } from './components/Field';
import { Information } from './components/Information'
import { FirstMenu } from './components/FirstMenu';
import  styles  from "./Game.module.css";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const GameLayout = () =>{


    const isFirstMenuOpen = useSelector((state)=> state.isFirstMenuOpen)

    return(
      
        <div className={styles.main}>
           {isFirstMenuOpen && <div className={styles.startGame}>
        <FirstMenu />
            </div>}
        <Information />
        <Field />
        
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
