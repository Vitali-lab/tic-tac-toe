
import PropTypes from "prop-types";
import styles from "./Information.module.css";
import { useSelector } from "react-redux";


export const  InformationLayout = ({refresh, result,winsX,winsO,draws })=>{
  
  const isGameEnded = useSelector((state)=> state.isGameEnded)
  const userNameX = useSelector((state)=> state.userNameX)
  const userNameO = useSelector((state)=> state.userNameO)

    return(
        <div className={styles.info}>
            <p>{result()}</p>
            {isGameEnded && <div className={styles.refresh}>
                <p className={styles.result}>{result()}</p>
                <p>{userNameX} - {`${winsX} побед`}</p>
                <p>{userNameO} - {`${winsO} побед`}</p>
                <p>Ничьих - {`${draws}`}</p>
              <button className={styles.refreshButton} onClick={refresh}>Продолжить игру</button>
              <button className={styles.newGame} onClick={()=>{location.reload()}}>Новая игра</button>
              
            </div>}
            
        </div>
    )
} 
InformationLayout.propTypes = {
  result: PropTypes.func,
  refresh:PropTypes.func,
  isGameEnded: PropTypes.bool,
  userNameX : PropTypes.string,
  userNameO: PropTypes.string,
  winsX: PropTypes.number,
  winsO: PropTypes.number,
  draws: PropTypes.number,
}; 
