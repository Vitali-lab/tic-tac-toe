import styles from './FirstMenu.module.css'
import PropTypes from 'prop-types';

export const FirstMenuLayout = ({  getNameO ,getNameX, startGame}) => {

    return(
        <div className={styles.firstMenu}>
            <h2 className={styles.name}>TIC-TAC-TOE</h2>
            <input type="text" placeholder="Имя игрока X" onChange={getNameX}/>
            <input type="text" placeholder="Имя игрока O" onChange={getNameO}/>
            <button onClick={startGame}>Начать игру</button>
        </div>
    )
}
FirstMenuLayout.propTypes = {
  getNameO: PropTypes.func,
  getNameX: PropTypes.func,
  startGame: PropTypes.func,
  
}; 
