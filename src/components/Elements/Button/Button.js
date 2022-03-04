import React from "react";
import {Link} from "react-router-dom";
// import "../../scss/_Button.scss";

const Button = ({url, text}) => {

    return (
        <Link to={url} className={"button-big"}>{text}</Link>
    )
}
export default Button;