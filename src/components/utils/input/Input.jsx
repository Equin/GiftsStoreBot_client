import React from "react";



const Input = (props) => {
    return (
        <>
            {props.class ? (
                <div className={props.class}>
                    <input
                        className={props.inpClass}
                        onChange={(event) => props.setValue(event.target.value)}
                        value={props.value}
                        type={props.type}
                        placeholder={props.placeholder}
                    />
                </div>
            ) : (
                <input
                    className={props.inpClass}
                    onChange={(event) => props.setValue(event.target.value)}
                    value={props.value}
                    type={props.type}
                    placeholder={props.placeholder}
                />
            )}
        </>
    );
};

export default Input;