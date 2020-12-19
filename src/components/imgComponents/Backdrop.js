
import React from 'react';

const backdrop = (props) =>{

    return (
        props.show?<div onClick={props.closeModalHandler} className="Backdrop" ></div>:null
    )
}

export default backdrop;