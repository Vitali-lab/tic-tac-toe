
import { FirstMenuLayout } from "./FirstMenuLayout"

export const FirstMenu = ({ userNameX,userNameO,setUserNameX,setUserNameO,setIsFirstMenuOpen }) => {

    
    const getNameX = (e) => {
       setUserNameX(e.target.value) 
    }
     const getNameO = (e) => {
       setUserNameO(e.target.value) 
    }

    const startGame = () =>{ 
        if (!userNameX || !userNameO) {
            return
        }else {
            setIsFirstMenuOpen(false)
        }
    }
  
    
    

    return <FirstMenuLayout getNameX = {getNameX} getNameO = {getNameO} startGame= {startGame} />
}