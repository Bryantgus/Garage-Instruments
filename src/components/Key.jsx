import PropTypes from "prop-types"
import { useState } from "react";

export default function Key(props) {
    const [keyClicked, setKeyClicked] = useState(false);

    return (
        <button 
        className={`key`}
        style={{backgroundColor: keyClicked ? props.pushColor : props.color,}}
        onKeyDown={(e) => {console.log(e.key)}}
        onMouseDown={() => {
            setKeyClicked(true);
            props.playKey(props.note)
        }} 
        onMouseUp={() => {setKeyClicked(false)}}
        onMouseLeave={() => {setKeyClicked(false)}}
        value={props.note}
         >{props.keyboard}</button>  
    )
}

Key.propTypes = {
    note: PropTypes.string,
    color: PropTypes.string,
    pushColor: PropTypes.string,
    playKey: PropTypes.func,
    keyboard: PropTypes.string,
}