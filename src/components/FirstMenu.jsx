// import { store } from "../store"
import  FirstMenuLayout  from "./FirstMenuLayout"
import { useRedux } from '../hooks/useRedux';
import React from "react";
import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";

// export const FirstMenu = ( ) => {


//     const [state, dispatch] = useRedux()

    
//     const userNameX = state.userNameX
//     const userNameO = state.userNameO
    
//     // const dispatch = useDispatch();
//     // const userNameX = useSelector((state)=> state.userNameX)
//     // const userNameO = useSelector((state)=> state.userNameO) 

//    const getNameX = (e) => {
//     dispatch({type:'SET_USER_NAME_X', payload:e.target.value})
//    }
//    const getNameO = (e) => {
//     dispatch({type:'SET_USER_NAME_O', payload:e.target.value})
//    }
   
//    const startGame = () => {
//    if (!userNameX || !userNameO) {
//             return
//         }else {
//             dispatch({type:"SET_IS_FIRST_MENU_OPEN", payload:false})
//         }
//    }
    
//     // const getNameX = (e) => {
//     //    setUserNameX(e.target.value) 
//     // }
//     //  const getNameO = (e) => {
//     //    setUserNameO(e.target.value) 
//     // }

//     // const startGame = () =>{ 
//     //     if (!userNameX || !userNameO) {
//     //         return
//     //     }else {
//     //         setIsFirstMenuOpen(false)
//     //     }
//     // }
  
    
    

//     return 
// }


class FirstMenu extends React.Component {
 
    startGame = () => {
  const { userNameX, userNameO,isFirstMenuOpen } = this.props

   if (!userNameX || !userNameO) {
            return
        }else {
            isFirstMenuOpen(false)
        }
   }

    render ( ) {
        const {getNameX ,getNameO} = this.props
        return(
         <FirstMenuLayout getNameX = {getNameX} getNameO = {getNameO} startGame= {this.startGame} />
        )
    }
}

const mapStateToProps = (state) => ({
    userNameX:(state) => state.userNameX ,
    userNameO:(state) => state.userNameO,
     
})
const mapDispatchToProps = (dispatch ) => ({
    getNameX: (e) => dispatch({type:'SET_USER_NAME_X', payload:e.target.value}),    
    getNameO: (e) => dispatch({type:'SET_USER_NAME_O', payload:e.target.value}),
    isFirstMenuOpen : (value) => dispatch({type:"SET_IS_FIRST_MENU_OPEN", payload:value})
})

export default connect(mapStateToProps,mapDispatchToProps)(FirstMenu)