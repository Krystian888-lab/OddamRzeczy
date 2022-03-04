import React from "react";
// import "./button.scss";

const ChooseButton = ({text, choice, isActive, onClick}) => {

    return (
        <button onClick={() => onClick(choice)}>{text}</button>
    )
}
export default ChooseButton;