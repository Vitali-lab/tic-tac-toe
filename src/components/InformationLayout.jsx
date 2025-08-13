
import PropTypes from "prop-types";
import styles from "./Information.module.css";
import { connect, useSelector } from "react-redux";
import React from "react";


// export const  InformationLayout = ({refresh, info,winsX,winsO,draws })=>{
  
//   const isGameEnded = useSelector((state)=> state.isGameEnded)
//   const userNameX = useSelector((state)=> state.userNameX)
//   const userNameO = useSelector((state)=> state.userNameO)

//     return(
//         <div className={styles.info}>
//             <p>{info}</p>
//             {isGameEnded && <div className={styles.refresh}>
//                 <p className={styles.result}>{info}</p>
//                 <p>{userNameX} - {`${winsX} побед`}</p>
//                 <p>{userNameO} - {`${winsO} побед`}</p>
//                 <p>Ничьих - {`${draws}`}</p>
//               <button className={styles.refreshButton} onClick={refresh}>Продолжить игру</button>
//               <button className={styles.newGame} onClick={()=>{location.reload()}}>Новая игра</button>
              
//             </div>}
            
//         </div>
//     )
// } 

class InformationLayout extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {

    const { userNameX,userNameO,isGameEnded, } = this.props

    return(
       <div className="text-center text-6xl z-5 text-white">
            <p>{this.props.info}</p>
            {isGameEnded && <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 pt-[85px] flex flex-col gap-4 font-medium">
                <p className="border-b-8 pb-20 text-orange-700 font-bold">{this.props.info}</p>
                <p className= "pt-20"> {userNameX} который играет за <span className="text-orange-600">X</span> - {`${this.props.winsX} побед`}</p>
                <p>{userNameO} который играет за <span className="text-orange-600">O</span> - {`${this.props.winsO} побед`}</p>
                <p>Ничьих - {`${this.props.draws}`}</p>
              <button className={styles.refreshButton} onClick={this.props.refresh}>Продолжить игру</button>
              <button className={styles.newGame} onClick={()=>{location.reload()}}>Новая игра</button>
              
            </div>}
            
        </div>
    )
  }
}


const mapStateToProps = ( state ) => ({
    userNameX: state.userNameX,
    userNameO:  state.userNameO,
    isGameEnded:  state.isGameEnded,

})

export default connect(mapStateToProps )(InformationLayout)



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
