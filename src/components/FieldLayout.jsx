import styles from './Field.module.css'

export const  FieldLayout = ({ field, content })=>{

    return(
        <div className={styles.field}>{content(styles)}</div>
    )
} 