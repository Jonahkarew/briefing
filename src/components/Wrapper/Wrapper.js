import React from 'react';
import classes from "./style.module.css";



function Wrapper(props) {
    let mode;

    if (props.mode === "dark"){
        mode = `${classes.darkMode}`
    }
    else{
        mode = `${classes.lightMode}`
    }

    return (
        <div className={`${classes.wrapper}, ${mode}`}>
            {props.children}
        </div>
    )
}

export default Wrapper
