// import { store } from "../store"
import { FirstMenuLayout } from "./FirstMenuLayout"
import { useRedux } from '../hooks/useRedux';
// import { useSelector, useDispatch } from "react-redux";

export const FirstMenu = ( ) => {


    const [state, dispatch] = useRedux()

    
    const userNameX = state.userNameX
    const userNameO = state.userNameO
    
    // const dispatch = useDispatch();
    // const userNameX = useSelector((state)=> state.userNameX)
    // const userNameO = useSelector((state)=> state.userNameO) 

   const getNameX = (e) => {
    dispatch({type:'SET_USER_NAME_X', payload:e.target.value})
   }
   const getNameO = (e) => {
    dispatch({type:'SET_USER_NAME_O', payload:e.target.value})
   }
   
   const startGame = () => {
   if (!userNameX || !userNameO) {
            return
        }else {
            dispatch({type:"SET_IS_FIRST_MENU_OPEN", payload:false})
        }
   }
    
    // const getNameX = (e) => {
    //    setUserNameX(e.target.value) 
    // }
    //  const getNameO = (e) => {
    //    setUserNameO(e.target.value) 
    // }

    // const startGame = () =>{ 
    //     if (!userNameX || !userNameO) {
    //         return
    //     }else {
    //         setIsFirstMenuOpen(false)
    //     }
    // }
  
    
    

    return <FirstMenuLayout getNameX = {getNameX} getNameO = {getNameO} startGame= {startGame} />
}