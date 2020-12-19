
import React from 'react';
const modal = (props) =>{

    return (
        <div className="Modal" style={{transform:props.show?"translate(-50%,-50%)":"translate(-50%,-200vh)"}}>
            {props.children}
            
        </div>
    )
}

export default modal;