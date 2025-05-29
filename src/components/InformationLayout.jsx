
import styles from "./Information.module.css";



export const  InformationLayout = ({ isDraw,setIsGameEnded, setIsDraw,setField, setCurrentPlayer, result })=>{

    return(
        <div className={styles.info}>
            <p>{result()}</p>
            <div>
              <button className={styles.refresh} onClick={()=>{
               setIsDraw(false)
               setIsGameEnded(false)
               setField([ '','','','','','','','','',])
               setCurrentPlayer('X')

            }}>Начать заново</button>
            </div>
            
        </div>
    )
} 