import React from "react";
import "./Button.module.scss";

export interface ButtonProps {
    label: string,
    contur?: boolean,
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
    return <button
        className={props.contur ? 'osk-ui-rt-contur' : ''}
        onClick={props.onClick}
    >
        {props.label}
    </button>
};

export default Button;