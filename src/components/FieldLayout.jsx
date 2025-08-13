import React from 'react';
import styles from './Field.module.css'
import PropTypes from 'prop-types';

// export const  FieldLayout = ({ content })=>{

//     return(
//         <div className={styles.field}>{content(styles)}</div>
//     )
// } 


class FieldLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
       <div className="w-[650px] h-[650px] bg-orange-700 flex flex-wrap items-center justify-center gap-[16px]">{this.props.content(styles)}</div>
    )
  }
}

export default FieldLayout


FieldLayout.propTypes = {
  content: PropTypes.func,

}; 