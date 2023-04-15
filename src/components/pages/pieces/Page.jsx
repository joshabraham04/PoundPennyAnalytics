import React from "react";
import "./styling/Page.css";
import Button from "../pieces/Button";

function Page (props){
    const pageStyle = {
        backgroundColor: props.backgroundColor,
    };

    const textStyle = {
        color: props.textColor,
        fontFamily: "Inter"
    };

    console.log(props.imagesrc);
    return (
        <div className = "Page" style = {pageStyle}>
            <div className = "text">
                <h1 style = {textStyle}>{props.mainText}</h1>
            </div>

            <div className = "subText">
                <p style = {textStyle}>{props.subText}</p>
            </div>

            <div className = "image">
                {props.imagesrc ? <img src={require("./pieceImages/ppaBG.png")} alt="ppa-logo-wallpaper-i" style={{ width: "90%", height: "auto" }}/>: <div/>}
            </div>
            <Button
                text= {props.buttonText}
                backgroundColor= "#EFBF00"
                textColor= "#ffffff"
                borderRadius= "7px"
                padding= "20px 40px"
                fontSize = "1.5rem"
            />
        </div>
    )
}

export default Page;