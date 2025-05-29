
import styles from "./Information.module.css";



export const  InformationLayout = ({isGameEnded, setIsGameEnded, setIsDraw,setField, setCurrentPlayer, result })=>{

    return(
        <div className={styles.info}>
            <p>{result()}</p>
            {isGameEnded && <div className={styles.refresh}>
                <p className={styles.result}>{result()}</p>
              <button className={styles.refreshButton} onClick={()=>{
               setIsDraw(false)
               setIsGameEnded(false)
               setField([ '','','','','','','','','',])
               setCurrentPlayer('X')

            }}>Начать заново</button>
            </div>}
            
        </div>
    )
} 