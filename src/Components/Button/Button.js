import React from 'react';

const button = (props) =>{
    return (
        <div>
            <input type='button' id={props.id} value={props.value} onClick={props.onClick}/>
        </div>

    )
}

export default button;


