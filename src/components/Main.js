import React from "react";
import Promo from './Promo'

function Main(props){
   
    return  <>
       <h2> Hello {props.username}, 
       you are in position nº{props.num}</h2>
       <Promo/>
   </>
}

export default Main;