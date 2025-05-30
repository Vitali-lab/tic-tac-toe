import styles from './Field.module.css'
import PropTypes from 'prop-types';

export const  FieldLayout = ({ content })=>{

    return(
        <div className={styles.field}>{content(styles)}</div>
    )
} 

FieldLayout.propTypes = {
  content: PropTypes.func,

}; 