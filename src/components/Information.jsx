
import PropTypes from 'prop-types';
import  InformationLayout  from './InformationLayout'
import React, { useEffect, useState } from 'react';
// import { useSelector , useDispatch } from "react-redux";
import { useRedux } from '../hooks/useRedux';
import { connect } from 'react-redux';

// export const Information = ( ) => {
//  const [winsX, setWinsX] = useState(0)
//  const [winsO, setWinsO] = useState(0)
//  const [draws , setDraws] = useState(0)
//  const [state, dispatch] = useRedux()
//     // const userNameX = useSelector((state)=> state.userNameX)
//     // const userNameO = useSelector((state)=> state.userNameO)
//     // const isDraw = useSelector((state)=> state.isDraw)
//     // const isGameEnded = useSelector((state)=> state.isGameEnded) 
//     // const currentPlayer = useSelector((state)=> state.currentPlayer) 

//     const userNameX = state.userNameX
//     const userNameO = state.userNameO
//     const isDraw = state.isDraw
//     const isGameEnded = state.isGameEnded
//     const currentPlayer = state.currentPlayer


    

    

//     const result = () => {
//         if (isDraw === true) {
//             return 'Ничья'
//         }else if (isDraw === false && isGameEnded === true) {
//             return `Победа : ${currentPlayer === 'X'? userNameX + ' X ':userNameO + ' O '} `
//         }else if (isDraw === false && isGameEnded === false){
//             return `Ходит :  ${currentPlayer === 'X'? userNameX + ' X ':userNameO + ' O '} `
//         }
//     }

//     const info = result()

    
//     const resultTable = ( ) => {
//         const winObj = {
//             userNameX : winsX,
//             userNameO : winsO, 
//             draws : draws,
//         }
         
//         if (info.includes(`Победа : ${userNameX} X`)) {
//             localStorage.setItem('table', JSON.stringify(winObj))
//            return setWinsX(winsX + 1) 
//         } else if(info.includes(`Победа : ${userNameO} O`)) {
//             localStorage.setItem('table', JSON.stringify(winObj))
//            return setWinsO(winsO + 1)
//         } else if(info.includes(`Ничья`)){
//             localStorage.setItem('table', JSON.stringify(winObj))
//            return setDraws(draws + 1)
//         }
//     }

  
   
//     const results = JSON.parse(localStorage.getItem('table'))

//     useEffect(()=>{
//          if (info.includes(`Победа : ${userNameX} X`)) {
//            return setWinsX(winsX + 1) 
//         } else if(info.includes(`Победа : ${userNameO} O`)) {
//            return setWinsO(winsO + 1)
//         } else if(info.includes(`Ничья`)){
//            return setDraws(draws + 1)
//         }
//     },[isGameEnded])
    
//     const refresh = () => {
//             dispatch({type:'SET_IS_DRAW', payload:false})
//             dispatch({type:'SET_GAME_ENDED', payload:false})
//             dispatch({type:"SET_FIELD",payload:[ '','','','','','','','','',]})
//             dispatch({type:'SET_CURRENT_PLAYER', payload:'X'})

//             }

//     return (<InformationLayout 
//           result = {result}
//           refresh={refresh}
//           results={results}
//           resultTable={resultTable}
//           winsX={winsX}
//           winsO = {winsO}
//           draws = {draws}
          
//           />)
    
// }


class Information extends React.Component {
    constructor(props){
        super(props)
        this.state = {
         winsX:0,
         winsO:0,
         draws:0,
         info:''
        }
    this.result = this.result.bind(this)
    this.resultTable = this.resultTable.bind(this)
    this.refresh = this.refresh.bind(this)
    
  
    }

      result(){
        const { isDraw,isGameEnded,currentPlayer, userNameX, userNameO  } = this.props
        if (isDraw === true) {
            return this.setState({info:'Ничья'})
        }else if (isDraw === false && isGameEnded === true) {
            return this.setState({info:`Победа : ${currentPlayer === 'X'? userNameX + ' X ':userNameO + ' O '} `})
        }else if (isDraw === false && isGameEnded === false){
            return this.setState({info:`Ходит :  ${currentPlayer === 'X'? userNameX + ' X ':userNameO + ' O '} `})
        }
       
        
    }


    componentDidUpdate(prevProps, prevState){
        const { isDraw,isGameEnded,currentPlayer, userNameX, userNameO  } = this.props
        const { info, winsX, winsO, draws } = this.state;

          if (
         prevProps.isDraw !== isDraw ||
         prevProps.isGameEnded !== isGameEnded ||
         prevProps.currentPlayer !== currentPlayer
       ) {
    this.result();
      } 

     if (prevState.info !== info) {
       if (info.includes(`Победа : ${userNameX} X`)) {
            this.setState({winsX: winsX + 1}) 
        } else if(info.includes(`Победа : ${userNameO} O`)) {
            this.setState({winsO: winsO + 1})
        } else if(info.includes(`Ничья`)){
            this.setState({draws: draws + 1})
        }
          
    }
    }

    resultTable ( ) {
        const { userNameX, userNameO  } = this.props
        const { winsX, winsO, draws, info } = this.state;
        const winObj = {
            userNameX : winsX,
            userNameO : winsO, 
            draws : draws,
        }
         
        if (info.includes(`Победа : ${userNameX} X`)) {
            localStorage.setItem('table', JSON.stringify(winObj))
           return this.setState({winsX: winsX + 1}) 
        } else if(info.includes(`Победа : ${userNameO} O`)) {
            localStorage.setItem('table', JSON.stringify(winObj))
           return this.setState({winsO: winsO + 1})
        } else if(info.includes(`Ничья`)){
            localStorage.setItem('table', JSON.stringify(winObj))
           return this.setState({draws: draws + 1})
        }
    }

    refresh(){
            const { setIsDraw,setGameEnded,setField,setCurrentPlayer } = this.props
            setIsDraw(false)
            setGameEnded(false)
            setField()
            setCurrentPlayer()

            }
  

       
    render(){

        
        return(<InformationLayout 
          info = {this.state.info}
          refresh={this.refresh}
          resultTable={this.resultTable}
          winsX={this.state.winsX}
          winsO = {this.state.winsO}
          draws = {this.state.draws}
          
          />)
    }  
}

const mapStateToProps = ( state ) => ({
    userNameX: state.userNameX,
    userNameO:  state.userNameO,
    isDraw:   state.isDraw,
    isGameEnded:  state.isGameEnded,
    currentPlayer:  state.currentPlayer,
})

 const mapDispatchToProps = (dispatch) => ({
    setIsDraw : (value) => dispatch({type:'SET_IS_DRAW', payload:value}),
    setGameEnded : (value) => dispatch({type:'SET_GAME_ENDED', payload:value}),
    setField : () => dispatch({type:"SET_FIELD",payload:[ '','','','','','','','','',]}),
    setCurrentPlayer : ( ) => dispatch({type:'SET_CURRENT_PLAYER', payload: 'X'})

 })


export default connect(mapStateToProps, mapDispatchToProps )(Information)





Information.propTypes = {
  setCurrentPlayer: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  setIsDraw: PropTypes.func,
  setField: PropTypes.func,
  refresh:PropTypes.func,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
  userNameX: PropTypes.string,
  userNameO: PropTypes.string,
}; 
