import React from "react";

const ChooseButton = ({text, choice, isActive, onClick}) => {

    let activeStyle ;
    if(isActive) {
        activeStyle = {
            border: "1px solid red"
        }
    }

    return (
    <div className="c-btn c-btn__help e-alignCenter">
        <span className="c-btn__label c-heading c-heading--level2 e-alignCenter" onClick={() => onClick(choice)} style={activeStyle}>{text}</span>
    </div>
    )
}
export default ChooseButton;