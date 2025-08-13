import React from 'react';
import styles from './FirstMenu.module.css'
import PropTypes from 'prop-types';

// export const FirstMenuLayout = ({  getNameO ,getNameX, startGame}) => {

//     return(
//         <div className={styles.firstMenu}>
//             <h2 className={styles.name}>TIC-TAC-TOE</h2>
//             <input type="text" placeholder="Имя игрока X" onChange={getNameX}/>
//             <input type="text" placeholder="Имя игрока O" onChange={getNameO}/>
//             <button onClick={startGame}>Начать игру</button>
//         </div>
//     )
// }

class FirstMenuLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {

        return (
             <div className="flex flex-col gap-15 items-center justify-center w-200 h-200 border-4 border-orange-700 rounded-3xl  bg-neutral-900 ">
            <h2 className="text-6xl text-orange-700 font-bold mb-10">Крестики-нолики</h2>
            <input className= "border-2 rounded-2xl w-100 h-15 text-center text-white text-2xl border-orange-700" type="text" placeholder="Имя игрока X" onChange={this.props.getNameX}/>
            <input className= "border-2 rounded-2xl w-100 h-15 text-center text-white text-2xl  border-orange-700" type="text" placeholder="Имя игрока O" onChange={this.props.getNameO}/>
            <button className="border-2 p-4 text-3xl bg-orange-700 text-neutral-800 font-bold rounded-2xl" onClick={this.props.startGame}>Начать игру</button>
        </div>
        )
    }
}

export default FirstMenuLayout



FirstMenuLayout.propTypes = {
  getNameO: PropTypes.func,
  getNameX: PropTypes.func,
  startGame: PropTypes.func,
  
}; 
