import  Field  from './components/Field';
import  Information  from './components/Information'
import  FirstMenu  from './components/FirstMenu';
import  styles  from "./Game.module.css";
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import React from 'react';

// export const GameLayout = () =>{


//     const isFirstMenuOpen = useSelector((state)=> state.isFirstMenuOpen)

//     return(
      
//         <div className={styles.main}>
//            {isFirstMenuOpen && <div className={styles.startGame}>
//         <FirstMenu />
//             </div>}
//         <Information />
//         <Field />
        
//         </div>
//     )
// }

class GameLayout extends React.Component {

    render () {
     const { isFirstMenuOpen } = this.props

     return(
      
        <div className="bg-neutral-800 flex items-center justify-center w-full h-screen flex-col gap-20"  >
           {isFirstMenuOpen && <div className="absolute " >
        <FirstMenu />
            </div>}
        <Information />
        <Field />
        
        </div>
    )
    }
}

const mapStateToProps = ( state ) => ({
    isFirstMenuOpen: state.isFirstMenuOpen
})

export default connect(mapStateToProps)(GameLayout)

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
