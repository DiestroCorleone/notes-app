import React from "react";

export default function DarkModeButton(props) {
    return(
        <button
            className='float-button'
            onClick={props.toggleDarkMode}
        >
            <i className='fa-fw fa fa-lightbulb-o'></i>            
        </button>
    );
}