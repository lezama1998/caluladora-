import { Button } from 'bootstrap';
import React from 'react';


function Number(props){
    function handelCick(e){
        props.onClick(props.title);
    }
    return(
        <button onClick={handelCick}>{props.title}</button>
    )
    }
    
    export default Number;